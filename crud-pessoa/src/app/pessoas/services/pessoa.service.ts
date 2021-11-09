import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

import { CriarPessoa, ObjectPessoa, ObjectPessoas, Parametros } from '../model/pessoa';




@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private httpClient: HttpClient) { }
  private readonly API = environment.api;


  listarPessoa(params: Parametros) {
    return this.httpClient.get<ObjectPessoas>(`${this.API}/pessoa`, { params: { ...params } })
  }
  cadastrarPessoa(body: CriarPessoa) {
    return this.httpClient.post<any>(`${this.API}/pessoa`, body)
  }

  pegarPessoa(id: number) {
    return this.httpClient.get<ObjectPessoa>(`${this.API}/pessoa/${id}`).pipe(
      map(res => {
        return res.body
      })
    )
  }
  deletarPessoa(id: number) {
    return this.httpClient.delete<any>(`${this.API}/pessoa/${id}`)
  }

  atualizarPessoa(id: number, corFavoritaId: number) {
    return this.httpClient.put<any>(`${this.API}/pessoa/${id}`, { corFavoritaId: corFavoritaId } )
  }
}
