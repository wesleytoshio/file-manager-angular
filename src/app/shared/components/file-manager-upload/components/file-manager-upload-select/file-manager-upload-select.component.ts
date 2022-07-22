import { Component, EventEmitter, HostBinding, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'file-manager-upload-select',
  templateUrl: './file-manager-upload-select.component.html',
  styleUrls: ['./file-manager-upload-select.component.scss']
})
export class FileManagerUploadSelect implements OnInit {
  @Output() onSelectedFiles = new EventEmitter<any[]>();
  constructor() { }

  ngOnInit(): void {
  }
  fileBrowseHandler(evt: any) {
    if (evt.target.files.length > 0) this.onSelectedFiles.emit(evt.target.files)
  }

  @HostBinding('class.active') fileOver: boolean = false;
  // // Dragover listener
  // @HostListener('dragover', ['$event']) onDragOver(evt: any) {
  //   evt.preventDefault();
  //   evt.stopPropagation();
  //   this.fileOver = true;
  // }

  // // Dragleave listener
  // @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
  //   evt.preventDefault();
  //   evt.stopPropagation();
  //   this.fileOver = false;
  // }

  // // Drop listener
  // @HostListener('drop', ['$event']) public ondrop(evt: any) {
  //   evt.preventDefault();
  //   evt.stopPropagation();
  //   this.fileOver = false;
  //   let files = evt.dataTransfer.files;
  //   if (files.length > 0) {
  //     this.onSelectedFiles.emit(files);
  //   }
  // }
}
