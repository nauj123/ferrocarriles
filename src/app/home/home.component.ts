import { Component } from '@angular/core';
import { InfoComponent } from './info/info.component';
import { NewsComponent } from './news/news.component';
import { SaludComponent } from './salud/salud.component';
import { SliderComponent } from './slider/slider.component';
import { ActionBtnsHomeComponent } from './action-btns-home/action-btns-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    InfoComponent,
    NewsComponent,
    SaludComponent,
    SliderComponent,
    ActionBtnsHomeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
