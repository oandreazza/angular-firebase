import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../notification.service';
import { Notification } from '../notification';


@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  private notes: Notification[];

  constructor(private service: NotificationService) { }

  ngOnInit() {
    this.notes = new Array<Notification>();

    this.service.noteAdded
      .subscribe( note =>{
        this.notes.push(note);
        setTimeout( () => { this.notes.pop()}, 5000);
      });
  }

}
