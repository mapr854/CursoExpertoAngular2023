import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsLayoutComponent } from './layouts/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkerPageComponent } from './pages/marker-page/marker-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';

const routes: Routes = [
  {
    path:'',
    component: MapsLayoutComponent,
    children:[
      { path:'fullscreen', component: FullScreenPageComponent},
      { path:'zoom-range', component: ZoomPageComponent},
      { path:'markers', component: MarkerPageComponent},
      { path:'properties', component: PropertiesPageComponent},
      { path:'**', redirectTo: 'fullscreen'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
