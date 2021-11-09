import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    SuccessDialogComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [ErrorDialogComponent, SuccessDialogComponent]
})
export class SharedModule { }
