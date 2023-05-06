import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid}  from 'uuid'

@Injectable({providedIn: 'root'})
export class dbzService {


    constructor() { }
    
    public characters:Character[] = [
        {
          id:uuid(),
          name:'Krillin',
          power:1000,
        },
        {
          id:uuid(),
          name:'Goku',
          power:9500,
        },
        {
          id:uuid(),
          name:'Vegeta',
          power:7500,
        },
      ];
      
      addCharacter(char:Character){
        char.id= uuid();
        this.characters.push(char);
        console.log(char);
      }
      
      deleteCharacter(index:number){
        this.characters.splice(index,1);
      }
      deleteCharacterById(id:string){
        console.log(id);
        this.characters=this.characters.filter(character=> character.id !== id);

      }
    
}