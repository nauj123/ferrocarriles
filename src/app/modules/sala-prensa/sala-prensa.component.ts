import { Component } from '@angular/core';
import { BannerComponent } from '../../general/banner/banner.component';
import { SubmenuComponent } from '../../general/submenu/submenu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sala-prensa',
  standalone: true,
  imports: [BannerComponent, SubmenuComponent, RouterOutlet],
  templateUrl: './sala-prensa.component.html',
  styleUrl: './sala-prensa.component.css',
})
export class SalaPrensaComponent {}
