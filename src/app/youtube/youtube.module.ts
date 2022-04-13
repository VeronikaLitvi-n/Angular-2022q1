import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddColorDirective } from './directives/add-color.directive';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';
import { AddExclamationPipe } from './pipes/add-exclamation.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { YoutubeInterceptor } from './interceptors/youtube.interceptor';

const routes: Routes = [{ path: ':id', component: DetailsPageComponent }];

@NgModule({
  declarations: [
    AddColorDirective,
    DetailsPageComponent,
    NotFoundPageComponent,
    SearchItemComponent,
    SearchResultsComponent,
    AddExclamationPipe,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [
    AddColorDirective,
    DetailsPageComponent,
    NotFoundPageComponent,
    SearchItemComponent,
    SearchResultsComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true },
  ],
})
export class YoutubeModule {}
