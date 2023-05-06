import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
@Input('characters') characters:Character[]=[];
@Output() emitCharId:EventEmitter<string> = new EventEmitter();

//deleteCharacter(index:number){
//  this.deleteChar.emit(index);
//}
emitCharacterId(id:string){
  this.emitCharId.emit(id);
}
}
