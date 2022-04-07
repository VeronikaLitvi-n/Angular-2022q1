import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './core/header/componens/search-input/search-input.component';
import { AuthenticationComponent } from './auth/components/authentication/authentication.component';
import { YoutubeModule } from './youtube/youtube.module';

@NgModule({
  declarations: [AppComponent, AuthenticationComponent, SearchInputComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, YoutubeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
