import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { FileManagerService } from 'src/app/services/file-manager.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { FileManagerEventType, FileManagerEventTarget } from '../../interfaces/file-manager-event.interface';
@Component({
  selector: 'file-manager-wrapper',
  templateUrl: './file-manager-wrapper.component.html',
  styleUrls: ['./file-manager-wrapper.component.scss']
})
export class FileManagerWrapper implements OnInit {
  dragIsActive: boolean = false;
  navigationType: any = null;
  showCropper = false;
  imageChangedEvent?: any;
  constructor(private fileManagerService: FileManagerService) {

  }

  ngOnInit(): void {
    this.fileManagerService.event.subscribe((event) => {
      this.showCropper = event.target === FileManagerEventTarget.TO_CROP && event.data;
    });
  }


  // Dragover listener
  @HostListener('dragover', ['$event']) public onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    if (this.showCropper) return;
    this.fileManagerService.emit({
      type: FileManagerEventType.DRAG_OVER,
      target: FileManagerEventTarget.TO_LIST_FILES,
    });
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    if (this.showCropper) return;
    if (!evt.currentTarget.contains(evt.relatedTarget)) {
      this.fileManagerService.emit({
        type: FileManagerEventType.DRAG_LEAVE,
        target: FileManagerEventTarget.TO_LIST_FILES,
      });
    }
  }


  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    if (this.showCropper) return;
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.showCropper = true;
      this.fileManagerService.emit({
        data: evt.dataTransfer.files[0],
        type: FileManagerEventType.DROP,
        target: FileManagerEventTarget.TO_CROP,
      });
    }
  }


}
