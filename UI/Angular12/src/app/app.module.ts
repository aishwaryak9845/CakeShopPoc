import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaketypeComponent } from './caketype/caketype.component';
import { ShowCaketypeComponent } from './caketype/show-caketype/show-caketype.component';
import { AddEditCaketypeComponent } from './caketype/add-edit-caketype/add-edit-caketype.component';
import { CakeComponent } from './cake/cake.component';
import { ShowCakeComponent } from './cake/show-cake/show-cake.component';
import { AddEditCakeComponent } from './cake/add-edit-cake/add-edit-cake.component';
import { CakesService } from './cakes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 


@NgModule({
  declarations: [
    AppComponent,
    CaketypeComponent,
    ShowCaketypeComponent,
    AddEditCaketypeComponent,
    CakeComponent,
    ShowCakeComponent,
    AddEditCakeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [CakesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
