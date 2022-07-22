import { Component, OnInit } from '@angular/core';
import { FileManagerItemInterface } from '../../interfaces/file-manager-item.interface';
import { FileManagerDataService } from '../../services/local.service';
@Component({
  selector: 'file-manager-side-menu',
  templateUrl: './file-manager-side-menu.component.html',
  styleUrls: ['./file-manager-side-menu.component.scss']
})
export class FileManagerSideMenu implements OnInit {

  items: FileManagerItemInterface[] = [];
  constructor(private dataService: FileManagerDataService) { }

  ngOnInit(): void {

    this.dataService.data$.subscribe(data => {

      this.items = data;
    });
  }


  groupBy(array: any, key: any, name: any) {
    return array.reduce((result: any, obj: any) => {
      result[obj[key]] = result[obj[key]] || {
        location: obj[name],
        child: [],
      };
      result[obj[key]].child.push(obj);
      return result;
    }, {});
  };


}
