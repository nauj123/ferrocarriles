import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadosFinancierosComponent } from './estados-financieros/estados-financieros.component';

const routes: Routes = [
  {
    path: 'estados-financieros/156',
    component: EstadosFinancierosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionFinancieraModule {}
