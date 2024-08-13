import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntidadComponent } from './modules/entidad/entidad.component';
import { ServiciosSaludComponent } from './modules/servicios-salud/servicios-salud.component';
import { InformacionFinancieraComponent } from './modules/informacion-financiera/informacion-financiera.component';
import { InformesComponent } from './modules/informes/informes.component';
import { NormatividadComponent } from './modules/normatividad/normatividad.component';
import { ParticipaComponent } from './modules/participa/participa.component';
import { PlanesComponent } from './modules/planes/planes.component';
import { SalaPrensaComponent } from './modules/sala-prensa/sala-prensa.component';

export let APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'corporativo',
    component: EntidadComponent,
    loadChildren: () =>
      import('./modules/entidad/entidad.module').then((m) => m.EntidadModule),
  },
  {
    path: 'servicios-de-salud',
    component: ServiciosSaludComponent,
    loadChildren: () =>
      import('./modules/servicios-salud/servicios-salud.module').then(
        (m) => m.ServiciosSaludModule
      ),
  },
  {
    path: 'informacion-contable-y-financiera',
    component: InformacionFinancieraComponent,
    loadChildren: () =>
      import(
        './modules/informacion-financiera/informacion-financiera.module'
      ).then((m) => m.InformacionFinancieraModule),
  },
  {
    path: 'informes',
    component: InformesComponent,
    loadChildren: () =>
      import('./modules/informes/informes.module').then(
        (m) => m.InformesModule
      ),
  },
  {
    path: 'normatividad',
    component: NormatividadComponent,
    loadChildren: () =>
      import('./modules/normatividad/normatividad.module').then(
        (m) => m.NormatividadModule
      ),
  },
  {
    path: 'participa',
    component: ParticipaComponent,
    loadChildren: () =>
      import('./modules/participa/participa.module').then(
        (m) => m.ParticipaModule
      ),
  },
  {
    path: 'planeacion-gestion-y-control',
    component: PlanesComponent,
    loadChildren: () =>
      import('./modules/planes/planes.module').then((m) => m.PlanesModule),
  },
  {
    path: 'sala-de-prensa',
    component: SalaPrensaComponent,
    loadChildren: () =>
      import('./modules/sala-prensa/sala-prensa.module').then(
        (m) => m.SalaPrensaModule
      ),
  },
];
export let AppRouterModule = RouterModule.forRoot(APP_ROUTES, {});
