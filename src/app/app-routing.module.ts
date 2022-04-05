import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';
import { NotFoundPageComponent } from './youtube/components/not-found-page/not-found-page.component';
import { ModalWindowComponent } from './auth/components/modal-registration/modal-window.component';

const routes: Routes = [
  // { path: '', redirectTo: 'not-found', pathMatch: 'full' },
  { path: 'not-found', component: NotFoundPageComponent },
  { path: 'home', component: SearchResultsComponent },
  { path: 'registration', component: ModalWindowComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
