import { Component } from '@angular/core';
import { ViewOptionService } from '../../../services/view-option.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  constructor(private readonly viewOption: ViewOptionService) {}

  dateSortValues: Array<{ name: string; value: string }> = [
    { name: 'date (old first)', value: 'date-increase' },
    { name: 'date (new first)', value: 'date-decrease' },
  ];

  selectedDateSortValue: string = '';

  inputTagSort: string = '';

  dateSortChange() {
    this.selectedCountSortValue = '';
    this.changeSort();
  }

  countSortValues: Array<{ name: string; value: string }> = [
    { name: 'count of views (increase)', value: 'count-increase' },
    { name: 'count of views (decrease)', value: 'count-decrease' },
  ];

  selectedCountSortValue: string = '';

  countSortChange() {
    this.selectedDateSortValue = '';
    this.changeSort();
  }

  tagInputChange() {
    this.viewOption.changeTagSearch(this.inputTagSort);
  }

  buildSortParams() {
    let sortType = '';
    if (
      this.selectedDateSortValue === '' &&
      this.selectedCountSortValue === ''
    ) {
      sortType = '';
    } else if (this.selectedDateSortValue === '') {
      sortType = this.selectedCountSortValue;
    } else if (this.selectedCountSortValue === '') {
      sortType = this.selectedDateSortValue;
    }

    return sortType;
  }

  public changeSort(): void {
    this.viewOption.changeSort(this.buildSortParams());
  }
}
