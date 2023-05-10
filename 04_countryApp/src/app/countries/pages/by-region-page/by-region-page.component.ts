import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.intefaces';
import { CountriesService } from '../../services/countries.service';
import { catchError, of } from 'rxjs';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public countries : Country[]=[];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;


  constructor( private countryService:CountriesService){}

  searchByRegion(region:Region){
    this.selectedRegion = region;
    this.countryService.searchRegion(region).subscribe(
     (countries) => {
      this.countries =[...countries];
    })    
    
  }
}
