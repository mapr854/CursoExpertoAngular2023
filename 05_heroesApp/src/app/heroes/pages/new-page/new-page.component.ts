import { filter, switchMap } from 'rxjs';
import { HeroService } from './../../services/heroes.services';
import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../Interfaces/heroes.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent  implements OnInit{
  public heroForm = new FormGroup({
    id:               new FormControl<string>(''),
    superhero:        new FormControl<string>('',{ nonNullable:true}),
    publisher:        new FormControl<Publisher>(Publisher.DCComics),
    alter_ego:        new FormControl(''),
    first_appearance: new FormControl(''),
    characters:       new FormControl(''),
    alt_img:         new FormControl(''),
  }
  );

 public publishers = [{id:  'DC Comics', desc: 'DC - Comics'},
 {id:  'Marvel Comics', desc: 'Marvel - Comics'}];

 constructor(private heroService:HeroService,
  private router:Router,
  private activateRoute: ActivatedRoute,
  private snackbar: MatSnackBar,
  private dialog: MatDialog){}
  ngOnInit(): void {
    if(!this.router.url.includes('edit')) return;
    this.activateRoute.params
    .pipe(
      switchMap(({id})=> this.heroService.getHeroById(id))
    ).subscribe(hero => {
      if(!hero) return this.router.navigateByUrl('/');
      this.heroForm.reset(hero);
      return;
    })
  }

 get currentHero():Hero{
  const hero = this.heroForm.value as Hero
  return hero;
 }

 onSubmit(){
  if(this.heroForm.invalid) return;
  
  if(this.currentHero.id){
    this.heroService.updateHero(this.currentHero).subscribe(hero=>{
      this.showSnackbar(`se ha actualiado el superheroe ${hero.superhero}`);
    })
  }
  else{
    this.heroService.addHero(this.currentHero).subscribe(hero=>{
      this.router.navigate(['/heroes/edit',hero.id])
      this.showSnackbar(`se ha creado un nuevo superheroe ${hero.superhero}`);
    })
  }
  
 }

 showSnackbar(message:string){
  this.snackbar.open(message,'done',{duration:2500});
 }

 onDelete(){
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    data: this.heroForm.value,
  });

  dialogRef.afterClosed()
  .pipe(
    filter((result:boolean) => result),
    switchMap(()=>this.heroService.deleteHero(this.currentHero.id) ),
    filter( (wasDelete:boolean) => wasDelete)
  )
  .subscribe(() =>{
       this.router.navigate(['/heroes'])
    });
    
}
  

}
