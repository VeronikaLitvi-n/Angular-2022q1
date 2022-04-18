import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './components/header/filters/filters.component';
import { SearchInputComponent } from '../core/components/header/search-input/search-input.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FiltersComponent, AdminPageComponent, SearchInputComponent],
  imports: [
    CommonModule,
    SearchInputComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CoreModule {}
