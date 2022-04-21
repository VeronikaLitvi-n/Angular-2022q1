import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddColorDirective } from './directives/add-color.directive';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';
import { AddExclamationPipe } from './pipes/add-exclamation.pipe';
import { CustomCardsComponent } from './components/custom-cards/custom-cards.component';

const routes: Routes = [{ path: ':id', component: DetailsPageComponent }];

@NgModule({
  declarations: [
    AddColorDirective,
    DetailsPageComponent,
    NotFoundPageComponent,
    SearchItemComponent,
    SearchResultsComponent,
    AddExclamationPipe,
    CustomCardsComponent,
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
    NotFoundPageComponent,
    SearchItemComponent,
    SearchResultsComponent,
  ],
  providers: [],
})
export class YoutubeModule {}
