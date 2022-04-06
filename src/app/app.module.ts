import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FiltersComponent } from './youtube/components/filters/filters.component';
import { SearchItemComponent } from './youtube/components/search-item/search-item.component';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';
import { SearchInputComponent } from './core/header/componens/search-input/search-input.component';
import { AuthenticationComponent } from './auth/components/authentication/authentication.component';
import { AddColorDirective } from './youtube/directives/add-color.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalWindowComponent } from './auth/components/modal-registration/modal-window.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ModalLoginComponent } from './auth/components/modal-login/modal-login.component';
import { NotFoundPageComponent } from './youtube/components/not-found-page/not-found-page.component';
import { DetailsPageComponent } from './youtube/components/details-page/details-page.component';

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
    NotFoundPageComponent,
    DetailsPageComponent,
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
