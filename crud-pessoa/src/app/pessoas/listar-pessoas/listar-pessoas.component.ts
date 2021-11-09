import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { ObjectPessoas, Parametros, Pessoa } from './../model/pessoa';
import { PessoaService } from './../services/pessoa.service';
import { DeletarPessoaComponent } from './components/deletar-pessoa/deletar-pessoa.component';
import { VisualizarPessoaComponent } from './components/visualizar-pessoa/visualizar-pessoa.component';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss']
})
export class ListarPessoasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'corFavorita', 'actions']
  objectPessoas: Observable<ObjectPessoas>
  pessoas: Pessoa[];
  totalPeople: number;
  parametros: Parametros;
  pageEvent!: PageEvent;
  carregando: boolean;

  constructor(
    private pessoaService: PessoaService,
    public dialog: MatDialog,
    private router: Router,
  ) {
    this.carregando = true;
    this.parametros =
    {
      page: 1,
      limit: 6
    }
      ;
    this.objectPessoas = this.pessoaService.listarPessoa(this.parametros).pipe(
      catchError(error => {
        this.carregando = false;
        this.onError(`Erro ao carregar lista de pesso, tente mais tarde! `)
        return of()
      })
    )
    this.pessoas = []
    this.totalPeople = 0;
  }

  ngOnInit(): void {
    this.objectPessoas.subscribe(res => {
      this.totalPeople = res.body.count;
      this.pessoas = res.body.rows;
      this.carregando = false;
    })
  }



  listarPessoas() {
    this.carregando = true;
    this.parametros =
    {
      page: this.pageEvent ? this.pageEvent.pageIndex * this.pageEvent.pageSize : 0,
      limit: this.pageEvent ? this.pageEvent.pageSize : 5,
    }
    this.objectPessoas = this.pessoaService.listarPessoa(this.parametros);
    this.objectPessoas.subscribe(res => {
      this.totalPeople = res.body.count;
      this.pessoas = res.body.rows;
      this.carregando = false;
    })
  }
  editarPessoa(id: number) {
    this.router.navigateByUrl(`editar-pessoa/${id}`);

  }

  deletarPessoa(id: number, nome: string) {
    this.onDeleteUser(id, nome);
  }
  visualizarPerfil(id: number) {
    this.onOpenUser(id)
  }


  onOpenUser(id: number) {
    this.dialog.open(VisualizarPessoaComponent, {
      data: id,
    });
  }

  onDeleteUser(id: number, nome: string) {
    this.dialog.open(DeletarPessoaComponent, {
      data: { id, nome },
    });
  }
  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  cadastrarPessoa() {
    this.router.navigateByUrl('criar-pessoa');
  }
}
