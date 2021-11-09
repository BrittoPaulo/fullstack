import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { CriarPessoasComponent } from './criar-pessoa/criar-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { DeletarPessoaComponent } from './listar-pessoas/components/deletar-pessoa/deletar-pessoa.component';
import { VisualizarPessoaComponent } from './listar-pessoas/components/visualizar-pessoa/visualizar-pessoa.component';
import { ListarPessoasComponent } from './listar-pessoas/listar-pessoas.component';
import { PessoasRoutingModule } from './pessoas-routing.module';

@NgModule({
  declarations: [
    ListarPessoasComponent,
    CriarPessoasComponent,
    VisualizarPessoaComponent,
    DeletarPessoaComponent,
    EditarPessoaComponent,
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class PessoasModule { }
