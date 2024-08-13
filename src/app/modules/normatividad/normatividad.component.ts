import { Component } from '@angular/core';
import { BannerComponent } from '../../general/banner/banner.component';
import { SubmenuComponent } from '../../general/submenu/submenu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-normatividad',
  standalone: true,
  imports: [BannerComponent, SubmenuComponent, RouterOutlet],
  templateUrl: './normatividad.component.html',
  styleUrl: './normatividad.component.css',
})
export class NormatividadComponent {}
