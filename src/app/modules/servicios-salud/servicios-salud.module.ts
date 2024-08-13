import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedDePrestadoresComponent } from './red-de-prestadores/red-de-prestadores.component';

const routes: Routes = [
  {
    path: 'red-de-prestadores/44',
    component: RedDePrestadoresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosSaludModule {}
