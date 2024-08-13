import { Component } from '@angular/core';
import { BannerComponent } from '../../general/banner/banner.component';
import { SubmenuComponent } from '../../general/submenu/submenu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-informacion-financiera',
  standalone: true,
  imports: [BannerComponent, SubmenuComponent, RouterOutlet],
  templateUrl: './informacion-financiera.component.html',
  styleUrl: './informacion-financiera.component.css',
})
export class InformacionFinancieraComponent {}
