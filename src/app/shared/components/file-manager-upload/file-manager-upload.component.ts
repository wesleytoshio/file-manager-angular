import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'file-manager-upload',
  templateUrl: './file-manager-upload.component.html',
  styleUrls: ['./file-manager-upload.component.scss']
})
export class FileManagerUpload implements OnInit {
  public currentView: string = 'default';
  files: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  onSelectedFiles(files: any) {
    for (const item of files) {
      this.files.push(item);
    }
    this.currentView = 'files';
  }

  onSelectFolder(folderName: string) {
    this.currentView = 'upload';
  }

}
