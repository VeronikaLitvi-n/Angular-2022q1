import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddColorDirective } from './directives/add-color.directive';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';
import { AddExclamationPipe } from './pipes/add-exclamation.pipe';

const routes: Routes = [
  { path: 'video', component: SearchResultsComponent },
  { path: ':id', component: DetailsPageComponent },
];

@NgModule({
  declarations: [
    AddColorDirective,
    DetailsPageComponent,
    SearchItemComponent,
    SearchResultsComponent,
    AddExclamationPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    AddColorDirective,
    DetailsPageComponent,
    SearchItemComponent,
    SearchResultsComponent,
  ],
  providers: [],
})
export class YoutubeModule {}
