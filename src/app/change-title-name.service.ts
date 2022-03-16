import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChangeTitleNameService {
  title: BehaviorSubject<any> = new BehaviorSubject(null);
  // title: Subject<any> = new Subject();
  // title = new EventEmitter<any>();

  sendData(data: any) {
    this.title.next(data);
  }

  constructor() {}
}
