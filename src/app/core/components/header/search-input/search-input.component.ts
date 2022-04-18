import { Component } from '@angular/core';
import { OpenSettingsService } from '../../../services/open-settings.service';
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

  constructor(
    private readonly viewOptionService: ViewOptionService,
    private readonly openSettingsService: OpenSettingsService
  ) {}

  public searchVideo() {
    this.viewOptionService.changeTitleSearch(this.inputSearch);
  }

  public toggleSettings() {
    this.settingsClicked = !this.settingsClicked;
    this.openSettingsService.showSettings(this.settingsClicked);
  }
}
