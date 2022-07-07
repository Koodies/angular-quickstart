import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero

  //AcivatedRoute: Holds info about the route to this instance. Provide the "id" parameter is the id of the hero to display
  //HeroService gets hero data from a remote server and this component
  //Location is an Angular Service for interacting with the browser
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id).subscribe(hero => { 
      this.hero = hero
      this.messageService.add(`Displaying ${hero.name}`)
    })
  }

  onChange(hero: Hero): void {
    this.messageService.add(`Changing hero name: ${hero.name}`)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if(this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack())
    }
  }

}
