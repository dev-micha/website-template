import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ResourcesComponent } from './resources/resources.component';
import { ActionComponent } from './action/action.component';
import { AnotheractionComponent } from './anotheraction/anotheraction.component';
import { SomethingelseComponent } from './somethingelse/somethingelse.component';
import { Multilevel1Component } from './multilevel1/multilevel1.component';
import { Multilevel2Component } from './multilevel2/multilevel2.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'resources',component:ResourcesComponent},
  {path:'action',component:ActionComponent},
  {path:'anotheraction',component:AnotheractionComponent},
  {path:'somethingelse',component:SomethingelseComponent},
  {path:'multilevel1',component:Multilevel1Component},
  {path:'multilevel2',component:Multilevel2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
