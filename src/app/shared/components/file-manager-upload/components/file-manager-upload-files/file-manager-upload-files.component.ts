import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'file-manager-upload-files',
  templateUrl: './file-manager-upload-files.component.html',
  styleUrls: ['./file-manager-upload-files.component.scss']
})
export class FileManagerUploadFiles implements OnInit {
  @Input() files: any[] = [];
  constructor() { }

  ngOnInit(): void {


  }

}
