import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileManagerNavbarItem } from 'src/app/shared/interfaces/file-manager-navbar-item.interface';
import { HeaderItemHandle } from 'src/app/shared/interfaces/handle.interface';

@Component({
  selector: 'file-manager-navbar',
  templateUrl: './file-manager-navbar.component.html',
  styleUrls: ['./file-manager-navbar.component.scss']
})
export class FileManagerNavbar implements OnInit {
  @Output() onCreateFolder = new EventEmitter<string>();
  @Output() onSearch = new EventEmitter<string>();
  @Output() onUpload = new EventEmitter<string>();
  @Input() state?: HeaderItemHandle;
  constructor() { }

  ngOnInit(): void {
  }

}
