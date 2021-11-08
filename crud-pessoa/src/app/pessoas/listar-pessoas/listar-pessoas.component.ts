
import { ObjectPessoa, Pessoa, Parametros } from './../model/pessoa';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PessoaService } from './../services/pessoa.service';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss']
})
export class ListarPessoasComponent implements OnInit {
  objectPessoa: Observable<ObjectPessoa>;
  pessoas: Pessoa[];
  totalPeople: number;
  parametros: Parametros;
  displayedColumns :  string[] =  ['id', 'nome']
  pageEvent!: PageEvent;
  carregando: boolean;
  constructor(private pessoaService: PessoaService, ) {
    this.carregando  = true;
    this.parametros =
    {
      page:1,
      limit:6
    }
   ;
    this.objectPessoa = this.pessoaService.listaPessoa( this.parametros);
    this.pessoas = []
    this.totalPeople = 0;
    this.objectPessoa.subscribe(res => {
      this.totalPeople = res.body.count;
      this.pessoas = res.body.rows;
      this.carregando = false;
    })

  }

  ngOnInit(): void {
    console.log(  this.pessoas )
  }



  listarPessoas(){
    this.carregando  = true;
    this.parametros =
    {
      page: this.pageEvent ? this.pageEvent.pageIndex *  this.pageEvent.pageSize: 0,
      limit: this.pageEvent ? this.pageEvent.pageSize : 5,
    }
    this.objectPessoa = this.pessoaService.listaPessoa(this.parametros);
    this.objectPessoa.subscribe(res => {
      this.totalPeople = res.body.count;
      this.pessoas = res.body.rows;
      this.carregando = false;
    })
  }
  announceSortChange(event: any){
    console.log(event)
  }

}
