import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FileManagerEvent } from '../shared/interfaces/file-manager-event.interface';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {
  [x: string]: any;
  private eventBehavior = new BehaviorSubject<FileManagerEvent>({});
  event = this.eventBehavior.asObservable();
  constructor() { }

  emit(value: FileManagerEvent) {
    this.eventBehavior.next(value);
  }
}
