import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ModalWindowComponent } from '../modal-registration/modal-window.component';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
})
export class ModalLoginComponent {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalLoginComponent>
  ) {}

  closeWindow() {
    this.dialogRef.close();
  }

  openRegisterDialog() {
    let dialog = this.dialog.open(ModalWindowComponent);
    dialog.afterClosed().subscribe(() => {});
    this.closeWindow();
  }
}
