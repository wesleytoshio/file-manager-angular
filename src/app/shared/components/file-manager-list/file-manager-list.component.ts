import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FileManagerService } from 'src/app/services/file-manager.service';
import { FileManagerEvent, FileManagerEventTarget, FileManagerEventType } from '../../interfaces/file-manager-event.interface';
import { filter } from 'rxjs/operators';
import { TypeTargetHandle } from '../../interfaces/type-target-handle.interface';
@Component({
  selector: 'file-manager-list',
  templateUrl: './file-manager-list.component.html',
  styleUrls: ['./file-manager-list.component.scss']
})
export class FileManagerList implements OnInit {
  typeTargetHandle: TypeTargetHandle = {
    click: false,
    drag: false,
  };
  dragInArea: boolean = false;
  @ViewChild('file') inputFile: any;
  constructor(private fileManagerService: FileManagerService) {

  }


  ngOnInit(): void {
    this.fileManagerService.event
      .pipe(filter(val => val.target === FileManagerEventTarget.TO_LIST_FILES))
      .subscribe((event: FileManagerEvent) => {
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


}
const customTakeWhileInclusive = <T>(predicate: (value: T) => boolean) => (source: Observable<T>) => new Observable<T>(observer => {
  let hasAlreadyMatched = false; // fix
  return source.subscribe({
    next: e => {
      if (hasAlreadyMatched) {
        observer.complete();
      }
      else {
        if (!predicate(e)) {
          /*
           *   Code from https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/takeWhile.customTakeWhileInclusive
           *  
           *   if (this.inclusive) {
           *      destination.next(value); // NO! with a synchronous scheduler, it will trigger another iteration without reaching the next "complete" statement 
           *      and there is no way to detect if a match already occured!
           *   }
           *   destination.complete();
           */

          // Fix:
          hasAlreadyMatched = true; // prevents from having stackoverflow issue here
        }

        observer.next(e);
      }
    },
    error: (e) => observer.error(e),
    complete: () => observer.complete()
  });
});