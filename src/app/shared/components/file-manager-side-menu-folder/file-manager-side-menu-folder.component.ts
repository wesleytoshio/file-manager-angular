import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FileManagerItemInterface } from '../../interfaces/file-manager-item.interface';

@Component({
  selector: 'file-manager-side-menu-folder',
  templateUrl: './file-manager-side-menu-folder.component.html',
  styleUrls: ['./file-manager-side-menu-folder.component.scss']
})
export class FileManagerSideMenuFolder implements OnInit {
  @Input() canExpand: boolean = false;
  @Input() item?: FileManagerItemInterface;
  @HostBinding('class.active') @Input() active: boolean = false;
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.item);

  }





  onClick(e: any) {
    this.active = !this.active;
    console.log(e);
  }
}
