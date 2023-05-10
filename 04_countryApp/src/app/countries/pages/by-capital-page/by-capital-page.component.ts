import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.intefaces';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {
  isLoading  = false;
  public countries : Country[]=[];
  constructor( private countryService:CountriesService){}

  searchByCapital(term:string){
    this.isLoading=true;
    this.countryService.searchCapital(term).subscribe(
     (countries) => {
      this.countries =[...countries];
      this.isLoading=false;
    })    
    
  }
}
