import { Component } from '@angular/core';
import { BannerComponent } from '../../general/banner/banner.component';
import { SubmenuComponent } from '../../general/submenu/submenu.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-servicios-salud',
  standalone: true,
  imports: [BannerComponent, SubmenuComponent, RouterOutlet],
  templateUrl: './servicios-salud.component.html',
  styleUrl: './servicios-salud.component.css',
})
export class ServiciosSaludComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((evt: any) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}
