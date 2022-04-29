import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';
// import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';
import { NotFoundPageComponent } from './youtube/components/not-found-page/not-found-page.component';
import { AuthGuard } from './core/services/auth.guard';
import { AdminPageComponent } from './core/pages/admin-page/admin-page.component';
const routes: Routes = [
  { path: 'not-found', component: NotFoundPageComponent },
  // {
  //   path: 'home',
  //   component: SearchResultsComponent,
  //   canActivate: [AuthGuard],
  // },
  {
    path: 'home',
    loadChildren: () =>
      import('./youtube/youtube.module').then(m => m.YoutubeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  { path: '', redirectTo: 'home/video', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminPageComponent,
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
