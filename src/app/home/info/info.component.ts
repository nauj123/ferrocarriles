import { Component} from '@angular/core';
import { Infobtn} from '../../interfaces/home';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  infobtn: Infobtn[] = [];
  urlSvg: string = "/assets/img/Home/infoHome/interes0";
  currentUrl: string | null = null;
  hover: string = "_hover.svg";
  disabled: string = "_deshabilitado.svg";

  constructor() {
    this.infobtn = [
      { id: 1, url: this.urlSvg + "1.svg" },
      { id: 2, url: this.urlSvg + "2.svg" },
      { id: 3, url: this.urlSvg + "3.svg" },
      { id: 4, url: this.urlSvg + "4.svg" },
      { id: 5, url: this.urlSvg + "5.svg" },
      { id: 6, url: this.urlSvg + "6.svg" },
      { id: 7, url: this.urlSvg + "7.svg" },
      { id: 8, url: this.urlSvg + "8.svg" }
    ];
  }

  mhover(id: number) {
    this.currentUrl = this.urlSvg + id + this.hover;
  }

  resetImage() {
    this.currentUrl = null;
  }

  trackById(index: number, item: Infobtn): number {
    return item.id;
  }
}
