import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgbCollapseModule, NgbDropdownModule, NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements AfterViewInit {
  isCollapsed = true;
  @ViewChild('navbarToggler', { static: false }) navbarToggler!: ElementRef;
  @ViewChild('navbarCollapse', { static: false }) navbarCollapse!: ElementRef;
  acordion: any;
  closeMenu() {
    this.isCollapsed = true;
  }
  ngAfterViewInit() {
    if (this.navbarToggler) {
      this.navbarToggler.nativeElement.addEventListener('click', () => {
        const container =
          this.navbarCollapse.nativeElement.closest('.container');
        if (container) {
          this.navbarToggler.nativeElement.classList.toggle('collapsed');
          container.classList.toggle('menu-expanded');
        }
      });
    }
  }
}
