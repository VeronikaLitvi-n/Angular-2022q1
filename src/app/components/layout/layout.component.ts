import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import { OpenSettingsService } from '../../core/services/open-settings.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  toggleFilters!: boolean;

  constructor(private readonly openSettingsService: OpenSettingsService) {}

  ngOnInit(): void {
    this.openSettingsService.isShowSettings$.subscribe(
      isShowSettings => (this.toggleFilters = isShowSettings)
    );
  }
}
