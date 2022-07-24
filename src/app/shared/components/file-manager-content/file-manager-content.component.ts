import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'file-manager-content',
  templateUrl: './file-manager-content.component.html',
  styleUrls: ['./file-manager-content.component.scss']
})
export class FileManagerContent implements OnInit {
  selectedFile?: string
  constructor() { }

  ngOnInit(): void {
  }

  onClickFile(e: any) {
    this.selectedFile = e;
  }
}
