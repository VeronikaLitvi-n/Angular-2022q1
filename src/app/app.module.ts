import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './core/components/header/search-input/search-input.component';
import { AuthenticationComponent } from './auth/components/authentication/authentication.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FiltersComponent } from './core/components/header/filters/filters.component';
import { YoutubeModule } from './youtube/youtube.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LayoutComponent,
    FiltersComponent,
    SearchInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    YoutubeModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
