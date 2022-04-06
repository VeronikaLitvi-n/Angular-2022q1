import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';
import { NotFoundPageComponent } from './youtube/components/not-found-page/not-found-page.component';
import { ModalWindowComponent } from './auth/components/modal-registration/modal-window.component';
import { DetailsPageComponent } from './youtube/components/details-page/details-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'registration', pathMatch: 'full' },
  { path: 'not-found', component: NotFoundPageComponent },
  { path: 'home', component: SearchResultsComponent },
  { path: 'registration', component: ModalWindowComponent },
  { path: 'video/:id', component: DetailsPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
