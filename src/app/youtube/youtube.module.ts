import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddColorDirective } from './directives/add-color.directive';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { FiltersComponent } from './components/filters/filters.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';

const routes: Routes = [{ path: ':id', component: DetailsPageComponent }];

@NgModule({
  declarations: [
    AddColorDirective,
    DetailsPageComponent,
    FiltersComponent,
    NotFoundPageComponent,
    SearchItemComponent,
    SearchResultsComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [
    AddColorDirective,
    DetailsPageComponent,
    FiltersComponent,
    NotFoundPageComponent,
    SearchItemComponent,
    SearchResultsComponent,
  ],
})
export class YoutubeModule {}
