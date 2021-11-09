import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ListarCoresComponent } from './cores/components/listar-cores/listar-cores.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pessoas';
  constructor(private dialog: MatDialog) { }



  AbrirCores() {
    this.dialog.open(ListarCoresComponent);
  }
}
