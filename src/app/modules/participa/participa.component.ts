import { Component } from '@angular/core';
import { BannerComponent } from '../../general/banner/banner.component';
import { SubmenuComponent } from '../../general/submenu/submenu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-participa',
  standalone: true,
  imports: [BannerComponent, SubmenuComponent, RouterOutlet],
  templateUrl: './participa.component.html',
  styleUrl: './participa.component.css',
})
export class ParticipaComponent {}
