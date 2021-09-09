import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CaketypeComponent } from './caketype/caketype.component';
import { CakeComponent } from './cake/cake.component';
const routes: Routes = [
  {path:'Cake',component:CakeComponent},
  {path:'CakeType',component:CaketypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
