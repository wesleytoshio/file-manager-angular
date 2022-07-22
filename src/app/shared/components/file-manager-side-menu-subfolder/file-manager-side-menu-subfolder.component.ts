import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'file-manager-side-menu-subfolder',
  templateUrl: './file-manager-side-menu-subfolder.component.html',
  styleUrls: ['./file-manager-side-menu-subfolder.component.scss']
})
export class FileManagerSideMenuSubfolder implements OnInit {

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
