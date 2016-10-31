import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NotificationService } from '../notification.service';
import { Notification } from '../notification';

@Component({
    selector: 'app-hero-create',
    templateUrl: './hero-create.component.html',
    styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent implements OnInit {


    hero = new Hero('');


    constructor(private service: HeroService,
        private notification: NotificationService) { }

    ngOnInit() {
    }

    save(hero: Hero) {
        this.service.save(hero)
            .then(
            () => {
                history.back();
                this.notification.add(new Notification('success', 'Hero created with success!'));
            })
            .catch(error => console.log(error));
    }

}
