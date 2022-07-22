import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { FileManagerItemInterface } from '../interfaces/file-manager-item.interface';

@Injectable({ providedIn: "root" })
export class FileManagerDataService {
  private _data$ = new BehaviorSubject<FileManagerItemInterface[]>([]);
  public data$ = this._data$.asObservable()
  setData(data: FileManagerItemInterface) {
    this._data$.next([...this._data$.getValue(), data]);
  }

  remove() {
    this._data$.next([]);
  }

  clearAll() {
    this._data$.next([]);
  }
}