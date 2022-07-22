import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'file-manager-modal',
  templateUrl: './file-manager-modal.component.html',
  styleUrls: ['./file-manager-modal.component.scss']
})

export class FileManagerModal implements OnInit, OnDestroy {
  constructor() { }

  ngOnInit(): void {
    console.log('Modal init');
  }


  ngOnDestroy(): void {
    console.log(' Modal destroyed');
  }

}

