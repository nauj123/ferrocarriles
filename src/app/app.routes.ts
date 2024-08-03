import { RouterModule, Routes } from '@angular/router';

export let APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];
export let AppRouterModule = RouterModule.forRoot(APP_ROUTES, {});
