import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import { ViewOptionService } from '../../core/services/view-option.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  toggleFilters!: boolean;

  constructor(private readonly viewOptionService: ViewOptionService) {}

  ngOnInit(): void {
    this.viewOptionService.isShowSettings$.subscribe(
      isShowSettings => (this.toggleFilters = isShowSettings)
    );
  }
}
