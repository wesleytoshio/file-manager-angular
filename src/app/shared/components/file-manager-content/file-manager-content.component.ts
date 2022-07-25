import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'file-manager-content',
  templateUrl: './file-manager-content.component.html',
  styleUrls: ['./file-manager-content.component.scss']
})
export class FileManagerContent implements OnInit {
  selectedFile?: string;
  closeResult = '';
  constructor(private offcanvasService: NgbOffcanvas) { }

  ngOnInit(): void {
  }

  onClickFile(e: any) {
    this.selectedFile = e;
  }
}
