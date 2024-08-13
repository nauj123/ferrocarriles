import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submenu',
  standalone: true,
  imports: [],
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.css',
})
export class SubmenuComponent implements OnInit {
  @Input() arg!: any;
  submenu: any;
  ngOnInit(): void {
    this.submenu = this.arg;
  }
}
