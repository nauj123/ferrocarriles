import { Component } from '@angular/core';
import { InfoComponent } from './info/info.component';
import { NewsComponent } from './news/news.component';
import { SaludComponent } from './salud/salud.component';
import { SliderComponent } from './slider/slider.component';
import { ActionBtnsHomeComponent } from './action-btns-home/action-btns-home.component';
import { EventosComponent } from './eventos/eventos.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { LeyTransferenciaComponent } from './ley-transferencia/ley-transferencia.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    InfoComponent,
    NewsComponent,
    SaludComponent,
    SliderComponent,
    ActionBtnsHomeComponent,
    EventosComponent,
    MultimediaComponent,
    LeyTransferenciaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
