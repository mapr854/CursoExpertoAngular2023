import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/countries.intefaces';
import { Observable, catchError, delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiURl: string = 'https://restcountries.com/v3.1';


  constructor(private http: HttpClient) { }

  
  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

  searchByAlphaCode(term: string): Observable<Country | null> {
    console.log(term)
    return this.http.get<Country[]>(`${this.apiURl}/alpha/${term}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null)));
  }

  searchCapital(term: string): Observable<Country[]> {
    const url=`${this.apiURl}/capital/${term}`;
    return this.getCountriesRequest(url)
  }
  searchCountry(term: string): Observable<Country[]> {
    const url=`${this.apiURl}/name/${term}`;
    return this.getCountriesRequest(url)
  }
  searchRegion(term: string): Observable<Country[]> {
    const url=`${this.apiURl}/region/${term}`;
    return this.getCountriesRequest(url)
  }



}
