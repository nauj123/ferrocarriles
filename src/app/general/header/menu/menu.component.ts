import { Component, AfterViewInit } from '@angular/core';
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Menu } from '../../../interfaces/header';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgbCollapseModule, NgbDropdownModule, NgClass, NgFor, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements AfterViewInit {
  isCollapsed = true;
  menu: Menu[] | undefined;

  constructor() {
    this.menu = [
      {
        id: 1,
        nombre: 'INICIO',
        url: '/',
        submenu: [],
      },
      {
        id: 2,
        nombre: 'TRANSPARENCIA Y ACCESO A LA INFORMACIÓN PÚBLICA',
        url: '/',
        submenu: [],
      },
      {
        id: 3,
        nombre: 'ATENCIÓN Y SERVICIOS DE LA CIUDADANÍA',
        url: '/',
        submenu: [
          {
            id: 10,
            nombre: 'Trámites y Servicios',
            url: '/',
            submenu: [],
          },
          {
            id: 11,
            nombre: 'Canales de Atención',
            url: '/',
            submenu: [],
          },
          {
            id: 12,
            nombre: 'PQRSDF',
            url: '/',
            submenu: [],
          },
        ],
      },
      {
        id: 4,
        nombre: 'PARTICIPA',
        url: '/',
        submenu: [],
      },
      {
        id: 5,
        nombre: 'LA ENTIDAD',
        url: '/',
        submenu: [],
      },
      {
        id: 6,
        nombre: 'SALA DE PRENSA',
        url: '/',
        submenu: [],
      },
      {
        id: 7,
        nombre: 'SERVICIOS DE SALUD',
        url: '/',
        submenu: [
          {
            id: 13,
            nombre: 'Canal de Atención Servicios de Salud',
            url: '/',
            submenu: [],
          },
          {
            id: 14,
            nombre: 'Cobertura de Operación y Red de Prestadores de Salud',
            url: '/',
            submenu: [],
          },
          {
            id: 15,
            nombre: 'Sistema de Afiliación Transaccional (SAT)',
            url: '/',
            submenu: [],
          },
          {
            id: 16,
            nombre: 'Ruta de promoción y mantenimiento de la salud',
            url: '/',
            submenu: [],
          },
          {
            id: 17,
            nombre: 'Indicadores de salud',
            url: '/',
            submenu: [],
          },
          {
            id: 18,
            nombre: 'Afiliados',
            url: '/',
            submenu: [],
          },
          {
            id: 19,
            nombre: 'Gestión del Riesgo',
            url: '/',
            submenu: [],
          },
        ],
      },
      {
        id: 8,
        nombre: 'PLANEACIÓN, GESTIÓN Y CONTROL',
        url: '/',
        submenu: [],
      },
      {
        id: 9,
        nombre: 'INFORMACIÓN PRESUPUESTAL Y FINANCIERA',
        url: '/',
        submenu: [],
      },
    ];
  }

  ngAfterViewInit() {}
}
