import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { catchError, map, Observable, of } from 'rxjs';
import { Pessoa } from 'src/app/pessoas/model/pessoa';
import { PessoaService } from 'src/app/pessoas/services/pessoa.service';

import { ErrorDialogComponent } from './../../../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-visualizar-pessoa',
  templateUrl: './visualizar-pessoa.component.html',
  styleUrls: ['./visualizar-pessoa.component.scss']
})
export class VisualizarPessoaComponent implements OnInit {
  carregarDados: boolean;
  pessoa: Observable<Pessoa>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private pessoaService: PessoaService,
    public dialog: MatDialog,
  ) {
    this.carregarDados = true;
    this.pessoa = this.pessoaService.pegarPessoa(data).pipe(
      catchError(error => {
        this.carregarDados = false;
        this.onError(`Erro ao carregar lista de pesso, tente mais tarde! `)
        return of([])
      }),
      map((elem: any) => {
        return { ...elem, createdAt: moment(elem.createdAt).format('MM/DD/YYYY HH:mm'), updatedAt: moment(elem.createdAt).format('MM/DD/YYYY HH:mm') }

      })
    );
  }


  ngOnInit(): void {
    this.pessoa.subscribe(res => {
      this.carregarDados = false;
    })
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

}
