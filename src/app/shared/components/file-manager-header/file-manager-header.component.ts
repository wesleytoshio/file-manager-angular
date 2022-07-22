import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileManagerService } from 'src/app/services/file-manager.service';
import { FileManagerEventTarget, FileManagerEventType } from '../../interfaces/file-manager-event.interface';

@Component({
  selector: 'file-manager-header',
  templateUrl: './file-manager-header.component.html',
  styleUrls: ['./file-manager-header.component.scss'],
  host: { 'class': 'row g-0' }
})
export class FileManagerHeader implements OnInit {
  @Input() currentView: string = 'default';
  @Output() onChanged = new EventEmitter<string>();
  menuState = {
    newFolder: false,
    upload: false,
    search: false,
  };
  constructor(private fileManagerService: FileManagerService) {

  }

  ngOnInit(): void {
  }

  onClick(value: string) {
    this.menuState.upload = !this.menuState.upload;
    this.fileManagerService.emit({
      data: this.menuState.upload,
      type: FileManagerEventType.CLICK_TO_UPLOAD,
      target: FileManagerEventTarget.TO_LIST_FILES,
    });
  }

}
