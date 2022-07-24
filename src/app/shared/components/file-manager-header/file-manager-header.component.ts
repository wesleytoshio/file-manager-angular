import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileManagerEvent, FileManagerEventTarget, FileManagerEventType } from '../../interfaces/file-manager-event.interface';
import { HeaderItemHandle } from '../../interfaces/handle.interface';
import { distinctUntilKeyChanged } from 'rxjs/operators';
import { FileManagerService } from '../../services/file-manager.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FileManagerItem } from '../../interfaces/file-manager-item.interface';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'file-manager-header',
  templateUrl: './file-manager-header.component.html',
  styleUrls: ['./file-manager-header.component.scss'],
  host: { 'class': 'row g-0' }
})
export class FileManagerHeader implements OnInit {
  @Input() currentView: string = 'default';
  @Output() onChanged = new EventEmitter<string>();
  closeResult = '';
  menuState: HeaderItemHandle = {
    newFolder: false,
    sendfile: false,
    search: false,
  };

  fileForm = new FormGroup({
    name: new FormControl(''),
    parent: new FormControl(''),
  });

  states = [
    { name: 'Arizona', abbrev: 'AZ' },
    { name: 'California', abbrev: 'CA' },
    { name: 'Colorado', abbrev: 'CO' },
    { name: 'New York', abbrev: 'NY' },
    { name: 'Pennsylvania', abbrev: 'PA' },
  ];

  constructor(private config: NgbModalConfig,
    private fileManagerService: FileManagerService,
    private modalService: NgbModal) {
    config.backdrop = 'static';
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

  createFolder() { }

  open(content: any) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title', centered: true }).result
      .then(result => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      })

  }
  onModalClose() {
    console.log('aaaaaaaaaaaaaaaaaaaaaa');

    // this.modal.dismiss('Cross click')
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
