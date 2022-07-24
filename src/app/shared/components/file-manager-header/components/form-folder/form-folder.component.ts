import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileManagerItem } from 'src/app/shared/interfaces/file-manager-item.interface';
import { FileManagerDataService } from 'src/app/shared/services/local.service';

@Component({
  selector: 'form-folder',
  templateUrl: './form-folder.component.html',
  styleUrls: ['./form-folder.component.scss']
})
export class FormFolder implements OnInit {
  @Output() onClose = new EventEmitter<boolean>();
  //@Output() onSave = new EventEmitter<boolean>();
  fileForm = new FormGroup({
    name: new FormControl('', [Validators.required,]),
    parent: new FormControl(null),
  });

  folders: FileManagerItem[] = [];

  constructor(private dataService: FileManagerDataService) { }

  ngOnInit(): void {
    this.dataService.data$.subscribe(data => {
      this.folders = data.filter(fill => fill.parent === null);
    });
  }

  onSave(): void {
    this.dataService.setData({ ...this.fileForm.value, folder: true, });
    this.onClose.emit(true);
  }

}
