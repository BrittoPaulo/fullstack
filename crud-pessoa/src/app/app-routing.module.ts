import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarPessoasComponent } from './pessoas/listar-pessoas/listar-pessoas.component';

const routes: Routes = [
  {
    path: 'lista-pessoas',
    loadChildren: () => import('./pessoas/pessoas.module').then(m => m.PessoasModule),
    component: ListarPessoasComponent
  },
  { path: '', redirectTo: '/lista-pessoas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
