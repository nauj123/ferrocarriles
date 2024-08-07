import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, RouterOutlet, Router } from '@angular/router';
import { AccessibilityComponent } from './general/accessibility/accessibility.component';
import { FooterComponent } from './general/footer/footer.component';
import { HeaderComponent } from './general/header/header.component';
import { debounceTime, fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    AccessibilityComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  @Input() minHeight?: number;
  @Input('app-root') topOffset?: number;
  private domElement: HTMLElement;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    this.domElement = this.elementRef.nativeElement as HTMLElement;
    fromEvent(window, 'resize')
      .pipe(throttleTime(1000), debounceTime(500))
      .subscribe(() => this.setHeight());
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt: any) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });

    setTimeout(() => {
      this.setHeight();
    }, 10);
  }

  private setHeight() {
    let height = document.getElementById('header')?.offsetHeight;
    this.renderer.setStyle(this.domElement, 'display', 'block');
    this.renderer.setStyle(this.domElement, 'margin-top', `${height}px`);
  }
}
