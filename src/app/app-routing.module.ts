import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';
import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';
import { NotFoundPageComponent } from './youtube/components/not-found-page/not-found-page.component';
import { AuthGuard } from '../auth.guard';
const routes: Routes = [
  { path: 'not-found', component: NotFoundPageComponent },
  {
    path: 'home',
    component: SearchResultsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'video',
    loadChildren: () =>
      import('./youtube/youtube.module').then(m => m.YoutubeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  { path: '', redirectTo: 'auth/registration', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
