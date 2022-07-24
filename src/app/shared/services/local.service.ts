import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { FileManagerItem } from '../interfaces/file-manager-item.interface';

@Injectable({ providedIn: "root" })
export class FileManagerDataService {
  private _data$ = new BehaviorSubject<FileManagerItem[]>([]);
  public data$ = this._data$.asObservable()
  constructor() {
    if (localStorage.getItem('folders')) {
      this._data$.next(JSON.parse(localStorage.getItem('folders')!));
    }
  }
  setData(data: FileManagerItem) {
    this._data$.next([...this._data$.getValue(), data]);
    localStorage.setItem('folders', JSON.stringify(this._data$.getValue()))

  }

  remove() {
    this._data$.next([]);
  }

  clearAll() {
    this._data$.next([]);
  }
}