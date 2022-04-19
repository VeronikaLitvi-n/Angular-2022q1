import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './core/components/header/search-input/search-input.component';
import { AuthenticationComponent } from './auth/components/authentication/authentication.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FiltersComponent } from './core/components/header/filters/filters.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminPageComponent } from './core/pages/admin-page/admin-page.component';
import { YoutubeInterceptor } from './core/interceptors/youtube.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LayoutComponent,
    FiltersComponent,
    SearchInputComponent,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
