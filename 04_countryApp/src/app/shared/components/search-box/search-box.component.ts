import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  
  
  @Input() 
  public placeholder:string="Buscar";
  @Output() 
  public onValue:EventEmitter<string> = new EventEmitter();
  @ViewChild('txtInput') txtInput!:ElementRef<HTMLInputElement>;
  private debouncer=new Subject<string>();
  private debouncerSubsription?:Subscription;

  ngOnInit(): void {
    this.debouncerSubsription= this.debouncer.pipe(
      debounceTime(500)
    ).subscribe(value => {
      this.emitValue(value)
    })
  }

  emitValue(newTxt:string){
    this.onValue.emit(newTxt);

  }

  onKeyPress(){
    const newTxt=this.txtInput.nativeElement.value;
    this.debouncer.next(newTxt);
  }

  ngOnDestroy(): void {
    this.debouncerSubsription?.unsubscribe();
  }
}
