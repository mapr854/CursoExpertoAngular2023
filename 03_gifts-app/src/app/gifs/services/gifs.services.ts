import { Gif, SearchResponse } from './../Interfaces/gifs.interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';

@Injectable({providedIn: 'root'})
export class GifsService {
    public gifsList:Gif[] =[];
    private _tagHistory:string[] = [];
    private  apiKey:string = 'ajOPooUTkxW9t3guC7WTChRMIkzGKRrh';
    private  serviceUrl:string = 'http://api.giphy.com/v1/gifs';

    constructor(private http:HttpClient) { 
        this.loadLocalStorage()
     }

    get tagsHistory(){

        return this._tagHistory;
    }

    private organizeHistory(tag:string){
        tag = tag.toLocaleLowerCase();
        if(this._tagHistory.includes(tag)){
            this._tagHistory = this._tagHistory.filter(oldTag => oldTag !== tag );
        }
        this._tagHistory.unshift(tag);
        this._tagHistory = this._tagHistory.splice(0,10);
        this.saveLocalStorage();

    }

    searchTag(tag:string):void{
        if (tag.length === 0) return;
        this.organizeHistory(tag);
        const params = new HttpParams()
            .set('api_key','ajOPooUTkxW9t3guC7WTChRMIkzGKRrh')
            .set('limit','10')
            .set('q',tag);
        //fetch('http://api.giphy.com/v1/gifs/search?api_key=ajOPooUTkxW9t3guC7WTChRMIkzGKRrh&q=valorant&limit=10').then((resp) =>resp.json()).then(data=>console.log(data));
        this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
        .subscribe( resp =>{
            this.gifsList = resp.data;
        }
        )
        
    }

    private saveLocalStorage():void{
        localStorage.setItem('history',JSON.stringify(this._tagHistory))
    }

    private loadLocalStorage(){
        if(!localStorage.getItem('history')) return;
        this._tagHistory = JSON.parse(localStorage.getItem('history')!);
        if(this._tagHistory.length>0) this.searchTag(this._tagHistory[0]);
    }

    
    
}