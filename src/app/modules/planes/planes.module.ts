import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanAccionComponent } from './plan-accion/plan-accion.component';

const routes: Routes = [
  {
    path: 'plan-de-accion/64',
    component: PlanAccionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanesModule {}
