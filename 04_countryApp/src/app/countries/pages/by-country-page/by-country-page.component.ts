import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.intefaces';
import { CountriesService } from '../../services/countries.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
  public countries : Country[]=[];
  constructor( private countryService:CountriesService){}

  searchByCountry(term:string){
    this.countryService.searchCountry(term).subscribe(
     (countries) => {
      this.countries =[...countries];
    })    
    
  }
}
