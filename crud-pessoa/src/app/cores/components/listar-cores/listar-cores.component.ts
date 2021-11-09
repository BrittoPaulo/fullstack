import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { CorModel } from 'src/app/cores/model/cor';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { CoresService } from '../../services/cores.service';


@Component({
  selector: 'app-listar-cores',
  templateUrl: './listar-cores.component.html',
  styleUrls: ['./listar-cores.component.scss']
})
export class ListarCoresComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cor']

  selectCores: Observable<CorModel[]>;
  carregando: boolean;
  constructor(
    coresService: CoresService,
    public dialog: MatDialog,

  ) {
    this.carregando = true;
    this.selectCores = coresService.listarCor().pipe(
      catchError((error => {
        this.onError(`Erro ao carregar lista de cor, tente mais tarde! `);
        return of()
      })
      ))

  }


  ngOnInit(): void {
    this.selectCores.subscribe(res => this.carregando = false);
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

}
