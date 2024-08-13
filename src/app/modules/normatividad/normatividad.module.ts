import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolucionesComponent } from './resoluciones/resoluciones.component';

const routes: Routes = [
  {
    path: '49',
    component: ResolucionesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NormatividadModule {}
