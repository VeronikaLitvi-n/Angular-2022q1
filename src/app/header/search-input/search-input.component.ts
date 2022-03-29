import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})

export class SearchInputComponent {

  logo = './assets/logo.svg';

  settings = './assets/search_settings.svg';

  @Output() onshowSettings = new EventEmitter<boolean>();

  showSettings() {
    this.onshowSettings.emit(true);
  }
}

