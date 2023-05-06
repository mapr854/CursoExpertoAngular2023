import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output() onNewChar:EventEmitter<Character>= new EventEmitter();
  
  public character: Character={
    id:'0000',
    name:'',
    power:0
  };
  
  emitCharacter():void{
    console.log(this.character);
    if(this.character.name.length===0)return;
    this.onNewChar.emit(this.character);


    this.character ={id:'0000',name:'',power:0};
      
  }
}




