import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ObjectCores } from './../model/cor';

@Injectable({
  providedIn: 'root'
})
export class CoresService {
  private readonly API = environment.api;
  constructor(private httpClient: HttpClient) { }

  listarCor() {
    return this.httpClient.get<ObjectCores>(`${this.API}/cor`).pipe(
      map(
        (res) => {
          return res.body
        }
      )
    )
  }

}
