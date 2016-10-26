import { Injectable } from '@angular/core';

import { Notification } from './notification';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class NotificationService {
  private notifications = new Subject<Notification>();

  public noteAdded = this.notifications.asObservable();

  constructor() { }

  public add(notification: Notification){
    this.notifications.next(notification);
  }

}
