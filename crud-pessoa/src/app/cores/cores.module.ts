import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { ListarCoresComponent } from './components/listar-cores/listar-cores.component';


@NgModule({
  declarations: [
    ListarCoresComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppMaterialModule,
    MatCardModule
  ],
})
export class CoresModule { }
