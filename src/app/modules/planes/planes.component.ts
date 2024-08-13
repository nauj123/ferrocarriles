import { Component } from '@angular/core';
import { BannerComponent } from '../../general/banner/banner.component';
import { SubmenuComponent } from '../../general/submenu/submenu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [BannerComponent, SubmenuComponent, RouterOutlet],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.css',
})
export class PlanesComponent {}
