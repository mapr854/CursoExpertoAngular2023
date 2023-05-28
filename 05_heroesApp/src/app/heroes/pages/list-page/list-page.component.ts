import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/heroes.services';
import { Hero } from '../../Interfaces/heroes.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {
  public heroes:Hero[]= [];

  constructor(private heroesService:HeroService){
    
  }
  ngOnInit(): void {
    this.heroesService.getHero().subscribe(heroes => this.heroes = heroes);
  }
}
