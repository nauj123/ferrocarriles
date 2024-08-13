import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCiudadanaComponent } from './consulta-ciudadana/consulta-ciudadana.component';

const routes: Routes = [
  {
    path: 'consulta-ciudadana/227',
    component: ConsultaCiudadanaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipaModule {}
