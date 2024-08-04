import { DIALOG_DATA } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';

export interface DialogData {
    animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
    selector: 'app-dialog-recruit',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dialog-recruit.component.html',
    styleUrl: './dialog-recruit.component.scss'
})
export class DialogRecruitComponent {

    files: File[] = [];
    dataFile: number = 0;

    constructor(@Inject(DIALOG_DATA) public data: DialogData) { }

    openFileDialog() {
        document.getElementById('upload-file')?.click();
    }

    fileChangeEvent(event: any): void {
        // let data = [];
        // data.push(...event.target.files);

        // console.log('data',data);
        this.files.push(...event.target.files);
        
        // const file = event.target.files;
        // console.log('file', file);
        // for (let i = 0; i < file.length; i++) {
        //     console.log('file[i]',file[i]);
            
        //     this.files.push(file[i]);
        // }
        this.totalSizeFile();
        
    }

    handleFileDelete(f: any) {
        const deleteData = this.files.filter((i: any, idx: any) => idx !== f);
        this.files = deleteData;
        this.totalSizeFile();
    }

    totalSizeFile() {
        let totalData = 0;
        for (let j = 0; j < this.files.length; j++) {
            totalData += this.files[j].size;
        }
        let fSize = totalData / 1024;
        let sizeMB = fSize / 1024;
        this.dataFile = Number(sizeMB.toFixed(2));
    }
}
