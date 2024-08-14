import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mision-vision',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './mision-vision.component.html',
  styleUrl: './mision-vision.component.css',
})
export class MisionVisionComponent {
  items = ['2022', '2021', '2020'];
}
