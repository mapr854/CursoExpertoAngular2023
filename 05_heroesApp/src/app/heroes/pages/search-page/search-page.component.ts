import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Interfaces/heroes.interface';
import { HeroService } from '../../services/heroes.services';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent implements OnInit {
  public heroes:Hero[]= [];
  public searchInput = new FormControl('');
  public selectedHero?:Hero;

  constructor(private heroesService:HeroService){
    
  }
  ngOnInit(): void {
    //this.heroesService.getSuggestions().subscribe(heroes => this.heroes = heroes);
  }
  searchHeroe(){
    if(this.searchInput.value)
    this.heroesService.getSuggestions(this.searchInput.value).subscribe(heroes => this.heroes = heroes);
  }

  onSelectedOption(event:MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.selectedHero = undefined;
    } 
    const hero = event.option.value;
    this.searchInput.setValue(hero.superheroe);
    this.selectedHero = hero;
  }
}
