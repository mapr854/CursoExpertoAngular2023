import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/countries.intefaces';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  country!:Country | null 

  constructor(private activatedRoute: ActivatedRoute,
     private countriesService:CountriesService){

  }
  ngOnInit(): void {
     this.activatedRoute.params.pipe(switchMap(({id})=> this.countriesService.searchByAlphaCode(id))).subscribe(country => {
        this.country=country
     });
     
  }

  

}
