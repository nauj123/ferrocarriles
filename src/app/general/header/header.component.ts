import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { TopbarComponent } from './topbar/topbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopbarComponent, SearchComponent, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
