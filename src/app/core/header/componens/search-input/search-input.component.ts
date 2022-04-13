import { Component, Output, EventEmitter } from '@angular/core';
import { ViewOptionService } from '../../../services/view-option.service';

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

  constructor(private readonly viewOptionService: ViewOptionService) {}

  showSettings() {
    this.onshowSettings.emit(true);
  }

  searchVideo() {
    this.viewOptionService.changeTitleSearch(this.inputSearch);
  }
}
