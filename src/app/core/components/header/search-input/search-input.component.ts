import { Component } from '@angular/core';
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

  settingsClicked: boolean = false;

  constructor(private readonly viewOptionService: ViewOptionService) {}

  public searchVideo() {
    if (this.inputSearch.length >= 3) {
      this.viewOptionService.changeTitleSearch(this.inputSearch);
    } else {
      return;
    }
  }

  public toggleSettings() {
    this.settingsClicked = !this.settingsClicked;
    this.viewOptionService.showSettings(this.settingsClicked);
  }
}
