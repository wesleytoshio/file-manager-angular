import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { FileManagerItem } from '../../interfaces/file-manager-item.interface';
import { FileManagerDataService } from '../../services/local.service';
@Component({
  selector: 'file-manager-side-menu',
  templateUrl: './file-manager-side-menu.component.html',
  styleUrls: ['./file-manager-side-menu.component.scss'],
  // styles: [`
  //   .without-children::after {
  //     content: none;
  //   }
  // `]
})
export class FileManagerSideMenu implements OnInit {
  currentFolder: number = 0;
  folders: FileManagerItem[] = [];

  constructor(private dataService: FileManagerDataService) { }

  ngOnInit(): void {

    this.dataService.data$.subscribe(data => {

      this.folders = data;
    });
  }



  onClickFolder(item: FileManagerItem) {
    this.currentFolder = this.folders.indexOf(item);
    console.log(this.currentFolder);
  }

  public beforeChange($event: NgbPanelChangeEvent) {
    console.log($event);

    let folder: FileManagerItem = this.folders[Number($event.panelId)];

    //if (!folder.children?.length) $event.preventDefault();


  }
}
