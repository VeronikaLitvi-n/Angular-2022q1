import { Component, Output, EventEmitter } from '@angular/core';
import { ViewOptionService } from '../../services/view-option.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  logo = './assets/logo.svg';

  settings = './assets/search_settings.svg';

  inputSearch: string = '';

  @Output() onshowSettings = new EventEmitter<boolean>();

  showSettings() {
    this.onshowSettings.emit(true);
  }

  constructor(private readonly searchService: ViewOptionService) {}

  public setSearchText(): void {
    this.searchService.changeSearch(this.inputSearch);
  }
}
