import { Component } from '@angular/core';
import {newsCard} from '../../interfaces/home'

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  newsC: newsCard[] = [];
  url: string ="assets/img/Home/newsHome/noticias"

  constructor() {
    this.newsC = [
      { id: 1, urlImage: this.url + "1.PNG", info: "Circular de envio de ordenes de cirugías", date: "13 FEBRERO 2024"},
      { id: 2, urlImage: this.url + "2.PNG" , info: "Circular cuotas moderadoras y copagos", date: "18 ENERO 2024"},
      { id: 3, urlImage: this.url + "3.PNG" , info: "Resolución no.2537 de 28 de diciembre", date: "30 DICIEMBRE 2023"},
      { id: 4, urlImage: this.url + "2.PNG", info: "Circular cuotas moderadoras y copagos", date: "18 ENERO 2024"},
    ];
  }

}
