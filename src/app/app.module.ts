import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ResourcesComponent } from './resources/resources.component';
import { ActionComponent } from './action/action.component';
import { AnotheractionComponent } from './anotheraction/anotheraction.component';
import { SomethingelseComponent } from './somethingelse/somethingelse.component';
import { Multilevel1Component } from './multilevel1/multilevel1.component';
import { Multilevel2Component } from './multilevel2/multilevel2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ResourcesComponent,
    ActionComponent,
    AnotheractionComponent,
    SomethingelseComponent,
    Multilevel1Component,
    Multilevel2Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
