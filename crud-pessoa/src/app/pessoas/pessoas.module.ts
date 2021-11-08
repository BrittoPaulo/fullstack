import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ListarPessoasComponent } from './listar-pessoas/listar-pessoas.component';
import { PessoasRoutingModule } from './pessoas-routing.module';

@NgModule({
  declarations: [
    ListarPessoasComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatDialogModule

  ]
})
export class PessoasModule { }
