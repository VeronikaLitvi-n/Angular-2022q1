import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ModalLoginComponent } from '../modal-login/modal-login.component';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
})
export class ModalWindowComponent {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalWindowComponent>
  ) {}

  closeWindow() {
    this.dialogRef.close();
  }

  openLoginDialog() {
    let dialog = this.dialog.open(ModalLoginComponent);
    dialog.afterClosed().subscribe(() => {});
    this.closeWindow();
  }
}
