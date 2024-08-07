import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-accessibility',
  standalone: true,
  imports: [],
  templateUrl: './accessibility.component.html',
  styleUrl: './accessibility.component.css',
})
export class AccessibilityComponent implements OnInit {
  class: string[];
  contrast_on: boolean;
  classIndex: number;
  private domElement: HTMLElement;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.class = [
      'fuente-0',
      'fuente-1',
      'fuente-2',
      'fuente-3',
      'fuente-4',
      'fuente-5',
      'fuente-6',
      'fuente-7',
      'fuente-8',
      'fuente-9',
      'fuente-10',
    ];
    this.contrast_on = false;
    this.classIndex = 5;
    this.domElement = this.elementRef.nativeElement as HTMLElement;
  }
  @Input() minHeight?: number;
  @Input('app-root') topOffset?: number;

  ngOnInit(): void {}

  cambiarContexto() {
    var htmlElement = document.documentElement;
    if (this.contrast_on) {
      htmlElement.classList.remove('hight-contrast');
      this.contrast_on = false;
    } else {
      htmlElement.classList.add('hight-contrast');
      this.contrast_on = true;
    }
  }

  disminuirTamanio() {
    var previousClass = this.classIndex;
    this.classIndex--;
    this.classIndex = this.classIndex < 0 ? 0 : this.classIndex;
    this.changeClass(previousClass, this.classIndex);
  }

  aumentarTamanio() {
    var previousClass = this.classIndex;
    this.classIndex++;
    this.classIndex =
      this.classIndex === this.class.length
        ? this.class.length - 1
        : this.classIndex;
    this.changeClass(previousClass, this.classIndex);
  }

  changeClass(previous: number, next: number) {
    if (previous !== next) {
      var htmlElement = document.documentElement;
      htmlElement.classList.remove(this.class[previous]);
      htmlElement.classList.add(this.class[next]);
      this.setHeight();
    }
  }

  private setHeight() {
    let height = document.getElementById('header')?.offsetHeight;
    this.renderer.setStyle(this.domElement, 'display', 'block');
    this.renderer.setStyle(this.domElement, 'margin-top', `${height}px`);
  }
}
