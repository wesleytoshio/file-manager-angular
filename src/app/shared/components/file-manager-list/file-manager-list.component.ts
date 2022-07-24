import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FileManagerService } from 'src/app/shared/services/file-manager.service';
import { FileManagerEvent, FileManagerEventTarget, FileManagerEventType } from '../../interfaces/file-manager-event.interface';
import { filter } from 'rxjs/operators';
import { TypeTargetHandle } from '../../interfaces/handle.interface';
@Component({
  selector: 'file-manager-list',
  templateUrl: './file-manager-list.component.html',
  styleUrls: ['./file-manager-list.component.scss'],
  host: { "class": "custom-scroll" }
})
export class FileManagerList implements OnInit {
  typeTargetHandle: TypeTargetHandle = {
    click: true,
    drag: false,
  };
  dragInArea: boolean = false;
  @ViewChild('file') inputFile: any;
  @Output() onClickFile = new EventEmitter<string>();
  constructor(private fileManagerService: FileManagerService) {

  }


  ngOnInit(): void {
    this.fileManagerService.event
      .pipe(filter(val => val.target === FileManagerEventTarget.TO_LIST_FILES))
      .subscribe((event: FileManagerEvent) => {
        console.log('aaaaa', event);

        switch (event.type) {
          case FileManagerEventType.CLICK_TO_UPLOAD:
            this.typeTargetHandle.click = event.data;
            break;
          case FileManagerEventType.DRAG_OVER:
            this.typeTargetHandle.drag = true;
            break;
          case FileManagerEventType.DRAG_LEAVE:
            this.typeTargetHandle.drag = false;
            break;
          case FileManagerEventType.UPLOAD:
            this.typeTargetHandle = {};
            break;
        }
      });
  }

  fileBrowseHandler(evt: any) {
    if (evt.target.files.length == 0) return;
    this.fileManagerService.emit({
      data: evt.target.files[0],
      type: FileManagerEventType.DROP,
      target: FileManagerEventTarget.TO_CROP,
    });

    evt.target.value = null;

  }
  onClick(e: any) {
    console.log(e);

    this.onClickFile.emit(`https://i.pravatar.cc/150?img=${e + 1}`);

  }

}