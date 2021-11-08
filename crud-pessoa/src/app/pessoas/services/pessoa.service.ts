import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { ObjectPessoa, Parametros } from '../model/pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private httpClient: HttpClient) { }
  private readonly API = environment.api;


  listaPessoa(params: Parametros) {
    return this.httpClient.get<ObjectPessoa>(`${this.API}/pessoa`, {params: {...params}})
  }
}
