import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';


const routes: Routes = [
  {    path: '',    component: HomeComponent , pathMatch: 'full' }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class HomeRoutingModule { }
