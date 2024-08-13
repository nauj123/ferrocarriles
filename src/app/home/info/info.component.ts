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
  disabledImg: string = "_deshabilitado.svg";

  constructor() {
    this.infobtn = [
      { id: 1, url: this.urlSvg + "1.svg", state: "undisabled"},
      { id: 2, url: this.urlSvg + "2.svg", state: "undisabled" },
      { id: 3, url: this.urlSvg + "3.svg", state: "undisabled" },
      { id: 4, url: this.urlSvg + "4.svg", state: "undisabled"},
      { id: 5, url: this.urlSvg + "5.svg", state: "disabled" },
      { id: 6, url: this.urlSvg + "6.svg", state: "undisabled" },
      { id: 7, url: this.urlSvg + "7.svg", state: "undisabled" },
      { id: 8, url: this.urlSvg + "8.svg", state: "undisabled" }
    ];
  }
}
