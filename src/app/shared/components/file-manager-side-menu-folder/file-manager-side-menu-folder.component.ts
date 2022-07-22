import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'file-manager-side-menu-folder',
  templateUrl: './file-manager-side-menu-folder.component.html',
  styleUrls: ['./file-manager-side-menu-folder.component.scss']
})
export class FileManagerSideMenuFolder implements OnInit {
  @Input() canExpand: boolean = false;
  @Input() name: string = 'Unknown';
  constructor() {

  }

  ngOnInit(): void {
  }



  @HostBinding('class.active') active: boolean = false;

  onClick(e: any) {
    this.active = !this.active;
    console.log(e);
  }
}
