import { Character } from '../../interfaces/character.interface';
import { dbzService } from '../../services/dbz.services';
import { AddCharacterComponent } from './../../components/add-character/add-character.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


constructor ( private dbzservice:dbzService ){
}

get characters():Character[]{
  return this.dbzservice.characters
}

deleteCharacterById(id:string){
  this.dbzservice.deleteCharacterById(id);

}
addCharacter(char:Character){
  this.dbzservice.addCharacter(char);
}

}
