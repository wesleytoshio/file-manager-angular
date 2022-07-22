import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileManagerService } from 'src/app/services/file-manager.service';
import { FileManagerEvent, FileManagerEventTarget, FileManagerEventType } from '../../interfaces/file-manager-event.interface';
import { HeaderItemHandle } from '../../interfaces/handle.interface';
import { distinctUntilKeyChanged } from 'rxjs/operators';
@Component({
  selector: 'file-manager-header',
  templateUrl: './file-manager-header.component.html',
  styleUrls: ['./file-manager-header.component.scss'],
  host: { 'class': 'row g-0' }
})
export class FileManagerHeader implements OnInit {
  @Input() currentView: string = 'default';
  @Output() onChanged = new EventEmitter<string>();
  menuState: HeaderItemHandle = {
    newFolder: false,
    sendfile: false,
    search: false,
  };
  constructor(private fileManagerService: FileManagerService) {

  }

  ngOnInit(): void {
    this.fileManagerService.event
      .pipe(distinctUntilKeyChanged('type'))
      .subscribe((event: FileManagerEvent) => {
        if (event.type == FileManagerEventType.UPLOAD) this.menuState = {};

      });
  }

  onClick(value: string) {
    this.menuState.sendfile = !this.menuState.sendfile;
    this.fileManagerService.emit({
      data: this.menuState.sendfile,
      type: FileManagerEventType.CLICK_TO_UPLOAD,
      target: FileManagerEventTarget.TO_LIST_FILES,
    });
  }

}
