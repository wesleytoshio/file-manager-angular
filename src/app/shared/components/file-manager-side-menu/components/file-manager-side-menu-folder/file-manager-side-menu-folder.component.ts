import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { FileManagerItem } from '../../../../interfaces/file-manager-item.interface';

@Component({
  selector: 'file-manager-side-menu-folder',
  templateUrl: './file-manager-side-menu-folder.component.html',
  styleUrls: ['./file-manager-side-menu-folder.component.scss'],
  host: {
    'class': 'btn btn-outline-secondary ',


  }
})
export class FileManagerSideMenuFolder implements OnInit {
  @Input() canExpand: boolean = true;
  @Input()
  item!: FileManagerItem;
  @HostBinding('class.active') @Input() active: boolean = false;
  @Output() onClick = new EventEmitter<FileManagerItem>();
  constructor() {

  }

  ngOnInit(): void {

  }


  click(e: any) {
    this.active = !this.active;
    this.onClick.emit(this.item);
  }
}
