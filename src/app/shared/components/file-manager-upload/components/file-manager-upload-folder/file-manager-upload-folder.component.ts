import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'file-manager-upload-folder',
  templateUrl: './file-manager-upload-folder.component.html',
  styleUrls: ['./file-manager-upload-folder.component.scss']
})
export class FileManagerUploadFolder implements OnInit {
  @Output() onSelectFolder = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onSelectFolder.emit('select-folder');
  }

}
