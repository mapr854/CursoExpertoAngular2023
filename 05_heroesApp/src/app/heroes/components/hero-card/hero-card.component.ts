import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../Interfaces/heroes.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input() hero!:Hero;
  
  constructor(){}
  
  ngOnInit(): void {
    if(!this.hero) throw new Error('Hero property is required');
  }
}
