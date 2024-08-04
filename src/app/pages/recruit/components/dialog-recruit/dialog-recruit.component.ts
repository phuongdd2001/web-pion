import { Dialog, DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { DialogSuccessComponent } from '../dialog-success/dialog-success.component';

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

    constructor(
        public dialogRef: DialogRef<string>, 
        @Inject(DIALOG_DATA) public data: DialogData,
        public dialog: Dialog
    ) { }

    openFileDialog() {
        document.getElementById('upload-file')?.click();
    }

    fileChangeEvent(event: any): void {
        this.files.push(...event.target.files);
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

    openDialog() {
        this.dialogRef.close();
        this.dialog.open(DialogSuccessComponent, {
            width: '480px',
            panelClass: 'dialog-success',
        });
    }
}
