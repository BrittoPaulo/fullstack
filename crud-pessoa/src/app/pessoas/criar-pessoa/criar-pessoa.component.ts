import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { PessoaService } from '../services/pessoa.service';
import { CorModel, ObjectCores } from '../../cores/model/cor';
import { CoresService } from '../../cores/services/cores.service';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from '../../shared/components/success-dialog/success-dialog.component';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.scss']
})
export class CriarPessoasComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    nome: '',
    corFavoritaId: '',
  })
  selectCores: Observable<CorModel[]>;

  constructor(
    private formBuilder: FormBuilder,
    coresService: CoresService,
    public dialog: MatDialog,
    private pessoaService: PessoaService,
    private router: Router,
  ) {
    this.selectCores = coresService.listarCor().pipe(
      catchError((error => {
        this.onError(`Erro ao carregar lista de cor, tente mais tarde! `);
        return of()
      })
      ))
  }

  ngOnInit(): void {
    this.selectCores.subscribe();
  }
  onSubmit(): void {
    if (this.checkoutForm.status !== 'INVALID') {
      const result = this.pessoaService.cadastrarPessoa(this.checkoutForm.value).pipe(
        catchError((error => {
          this.onError(`Erro ao inserir usuário, tente mais tarde! `);
          return of()
        })
        ));

      result.subscribe((res) => {
        if (res.statusCode === 200) {
          this.onSuccess({ title: 'Cadastrado com sucesso', subTitle: 'Você será redirecionado para a tela inicial' })
          setTimeout(() => {
            this.router.navigateByUrl('lista-pessoas')
            this.dialog.closeAll();
          }, 3000);
        }
      })
    }
  }
  voltar(): void {
    this.router.navigateByUrl(``)
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
