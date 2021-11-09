import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { PessoaService } from '../services/pessoa.service';
import { CorModel } from '../../cores/model/cor';
import { CoresService } from '../../cores/services/cores.service';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from '../../shared/components/success-dialog/success-dialog.component';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.scss']
})



export class EditarPessoaComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    nome: [{ value: '', disabled: true }],
    corFavorita: {
      id: '',
      descricao: ''
    },
  })
  selectCores: Observable<CorModel[]>;
  pessoa: Observable<Pessoa>;
  id: number;
  constructor(
    private formBuilder: FormBuilder,
    coresService: CoresService,
    public dialog: MatDialog,
    private pessoaService: PessoaService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.selectCores = coresService.listarCor().pipe(
      catchError(error => {
        this.onError(`Erro ao carregar cores `);
        return of()
      })
    )
    this.pessoa = this.pessoaService.pegarPessoa(this.id).pipe(
      catchError(error => {
        this.onError(`Erro buscar usuário `);
        return of()
      })
    )
  }

  ngOnInit(): void {
    this.selectCores.subscribe()
    this.pessoa.subscribe(res => {
      this.checkoutForm.setValue(
        {
          nome: res.nome,
          corFavorita: { ...res.corFavorita }
        }
      );
    })


  }

  onSubmit(): void {
    if (this.checkoutForm.status !== 'INVALID') {

      this.pessoaService.atualizarPessoa(this.id, this.checkoutForm.value.corFavorita.id).pipe(
        catchError((error => {
          this.onError(`Erro ao atualizar  usuário, tente mais tarde! `);
          return of()
        })
        )).subscribe((res) => {
          if (res.statusCode === 200) {
            this.onSuccess({ title: 'Usuário atualizado com sucesso', subTitle: 'Você será redirecionado para a tela inicial' })
            setTimeout(() => {
              this.router.navigateByUrl('lista-pessoas')
              this.dialog.closeAll();
            }, 2000);
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

  compareItems(o1: any, o2: any): boolean {
    return o1.name === o2.name && o1.id === o2.id;
  }
}
