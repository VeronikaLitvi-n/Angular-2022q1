import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FiltersComponent } from './search/filters/filters.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchInputComponent } from './header/search-input/search-input.component';
import { AuthenticationComponent } from './header/authentication/authentication.component';
import { AddColorDirective } from './search/search-item/add-color.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalWindowComponent } from './header/modal-window/modal-window.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ModalLoginComponent } from './header/modal-login/modal-login.component';
import { AddExclamationPipe } from './add-exclamation.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    SearchItemComponent,
    SearchResultsComponent,
    SearchInputComponent,
    AuthenticationComponent,
    AddColorDirective,
    ModalWindowComponent,
    ModalLoginComponent,
    AddExclamationPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
