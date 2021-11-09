import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriarPessoasComponent } from './pessoas/criar-pessoa/criar-pessoa.component';
import { EditarPessoaComponent } from './pessoas/editar-pessoa/editar-pessoa.component';
import { ListarPessoasComponent } from './pessoas/listar-pessoas/listar-pessoas.component';

const routes: Routes = [
  {
    path: 'editar-pessoa/:id',
    loadChildren: () => import('./pessoas/pessoas.module').then(m => m.PessoasModule),
    component: EditarPessoaComponent
  },
  {
    path: 'lista-pessoas',
    loadChildren: () => import('./pessoas/pessoas.module').then(m => m.PessoasModule),
    component: ListarPessoasComponent
  },
  {
    path: 'criar-pessoa',
    loadChildren: () => import('./pessoas/pessoas.module').then(m => m.PessoasModule),
    component: CriarPessoasComponent
  },
  { path: '', redirectTo: '/lista-pessoas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
