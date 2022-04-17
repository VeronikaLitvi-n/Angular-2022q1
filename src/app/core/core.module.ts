import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './components/header/search-input/search-input.component';
import { FiltersComponent } from './components/header/filters/filters.component';

@NgModule({
  declarations: [FiltersComponent, SearchInputComponent],
  imports: [CommonModule],
})
export class CoreModule {}
