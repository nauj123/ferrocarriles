import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadoresGestionComponent } from './indicadores-gestion/indicadores-gestion.component';

const routes: Routes = [
  {
    path: 'indicadores-de-gestion/62',
    component: IndicadoresGestionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformesModule {}
