import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';

const routes: Routes = [
  {
    path: 'mision-y-vision/37',
    component: MisionVisionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntidadModule {}
