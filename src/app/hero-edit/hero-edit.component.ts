import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService} from '../hero.service';
import { Hero } from '../hero';
import { NotificationService} from '../notification.service';
import { Notification } from '../notification';


@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {
  hero: Hero;

  constructor(private route: ActivatedRoute,
              private service: HeroService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.route.data
      .do(console.log)
      .subscribe(
        data => {
          this.hero = data['hero'];
        });
  }

  edit(hero: Hero){
    let key = "123";

    this.service.update(key,hero)
      .then( () => {
          this.notificationService.add(new Notification('success', 'Hero edited with success'));
          history.back();
      });
  }

}
