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
    { name: 'date (new first)', value: 'date-increase' },
    { name: 'date (old first)', value: 'date-decrease' },
  ];

  selectedDateSortValue: string = '';

  inputTagSort: string = '';

  dateSortChange() {
    this.selectedCountSortValue = '';
    this.setSortValue();
  }

  countSortValues: Array<{ name: string; value: string }> = [
    { name: 'count of views (increase)', value: 'count-increase' },
    { name: 'count of views (decrease)', value: 'count-decrease' },
  ];

  selectedCountSortValue: string = '';

  countSortChange() {
    this.selectedDateSortValue = '';
    this.setSortValue();
  }

  tagInputChange() {
    this.setSortValue();
  }

  buildSortParams() {
    let sortData: { sortType: string; tagInput: string } = {
      sortType: '',
      tagInput: '',
    };
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
    sortData.sortType = sortType;
    sortData.tagInput = this.inputTagSort;
    return sortData;
  }

  public setSortValue(): void {
    console.log(this.buildSortParams());
    this.viewOption.changeSort(this.buildSortParams());
  }
}
