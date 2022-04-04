import { Component } from '@angular/core';
import { ModalWindowComponent } from '../modal-registration/modal-window.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  login = './assets/login.svg';

  constructor(public dialog: MatDialog) {}

  openRegisterDialog() {
    let dialog = this.dialog.open(ModalWindowComponent);
    dialog.afterClosed().subscribe(() => {});
  }
}
