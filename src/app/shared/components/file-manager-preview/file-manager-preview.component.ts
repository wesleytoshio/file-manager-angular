import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'file-manager-preview',
  templateUrl: './file-manager-preview.component.html',
  styleUrls: ['./file-manager-preview.component.scss']
})
export class FileManagerPreview implements OnInit {
  @Input() selectedFile?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
