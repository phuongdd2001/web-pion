import { HttpEvent, HttpEventType } from '@angular/common/http';
import { catchError, filter, from, map, mergeMap, of } from 'rxjs';
import { FileImageData } from '@shared/data/file.data';

export class UploadAdapterGlobal {
    private loader;

    constructor(loader: any, private apiFileImage: FileImageData) {
        this.loader = loader;
    }

    upload() {
        return new Promise((resolve, reject) => {
            return from([this.loader])
                .pipe(
                    map((file) => file),
                    mergeMap((file: any) => {
                        const ext = file.name.split('.');
                        console.log('file', file);

                        let dataUpload = {
                            app_key: 'store',
                            name: file.name
                                .replace(/[^\w\s.]/g, '')
                                .replace(/\s+/g, '_')
                                .replace(/_+/g, '_')
                                .trim(),
                            mime_type: file.type,
                            file_size: file.size,
                            ext: ext.length > 0 ? ext[ext.length - 1] : null,
                        };
                        return this.apiFileImage.PostFileImage(dataUpload).pipe(
                            filter(
                                (resp) =>
                                    resp.message === 'success' &&
                                    resp.data &&
                                    resp.data.upload_links.length > 0
                            ),
                            map((r) => {
                                return { f: file, r };
                            }),
                            catchError((err) => {
                                console.log('addFile ERR: ', err);
                                return of(err);
                            })
                        );
                    }),
                    mergeMap((resp1) => {
                        const parentLinkUpload = resp1.r.data.upload_links;
                        let linkUpload;
                        const file = resp1.f;
                        linkUpload = parentLinkUpload[0].link;
                        return this.apiFileImage
                            .uploadFileToAWS(linkUpload, file)
                            .pipe(
                                map((r: HttpEvent<any>) => {
                                    return {
                                        r: r,
                                        d: resp1.r.data,
                                        p: parentLinkUpload[0].part_idx,
                                    };
                                })
                            );
                    }),
                    filter((event: any) => {
                        return (
                            event.r.type === HttpEventType.Response &&
                            event.r.headers.get('Etag') !== ''
                        );
                    }),
                    mergeMap((resp2: any) => {
                        const Etag = resp2.r.headers.get('Etag');
                        const listPartsFile = {
                            etag: Etag,
                            part_idx: resp2.p,
                        };
                        const dataUploaded = {
                            id: resp2.d.id,
                            upload_id: resp2.d.upload_id,
                            uploaded_parts: [listPartsFile],
                        };

                        return this.apiFileImage
                            .completeUpload(dataUploaded)
                            .pipe(
                                map((r) => {
                                    return r;
                                }),
                                catchError((err) => {
                                    console.log('ERR: ', err);
                                    return of(err);
                                })
                            );
                    })
                )
                .subscribe((res2: any) => {
                    let link: string = res2.data && res2.data.link_cdn;
                    return resolve(res2);
                });
        });
    }
}
