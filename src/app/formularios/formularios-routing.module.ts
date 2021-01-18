import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulariosPage } from './formularios.page';

const routes: Routes = [
  {
    path: '',
    component: FormulariosPage
  },
  {
    path: 'importar',
    loadChildren: () => import('./importar/importar.module').then( m => m.ImportarPageModule)
  },
  {
    path: 'exportar',
    loadChildren: () => import('./exportar/exportar.module').then( m => m.ExportarPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then( m => m.AgregarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulariosPageRoutingModule {}
