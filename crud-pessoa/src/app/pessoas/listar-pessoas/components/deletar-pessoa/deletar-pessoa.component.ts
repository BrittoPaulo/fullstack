import { SuccessDialogComponent } from './../../../../shared/components/success-dialog/success-dialog.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PessoaService } from 'src/app/pessoas/services/pessoa.service';

import { ErrorDialogComponent } from './../../../../shared/components/error-dialog/error-dialog.component';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-deletar-pessoa',
  templateUrl: './deletar-pessoa.component.html',
  styleUrls: ['./deletar-pessoa.component.scss']
})
export class DeletarPessoaComponent  {
  carregando: boolean;
  constructor(

    @Inject(MAT_DIALOG_DATA) public data: { id: number, nome: string },
    private PessoaService: PessoaService,
    private dialog: MatDialog
  ) {
    this.carregando = false;
  }

  deleteUser(id: number): void {
    this.carregando = true;
    this.PessoaService.deletarPessoa(id)
      .pipe(
        catchError(err => {
          this.carregando = false;
          this.onError('Falha a excluir o usuário');
          return of()
        })
      ).subscribe(res => {
        this.carregando = false;
        window.location.reload();
      })
  }
  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  onSuccess(data: { title: string, subTitle: string }) {
    this.dialog.open(SuccessDialogComponent, {
      data: data,
    });
  }
}
