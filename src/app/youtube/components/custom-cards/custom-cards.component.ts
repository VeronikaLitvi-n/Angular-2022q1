import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-cards',
  templateUrl: './custom-cards.component.html',
  styleUrls: ['./custom-cards.component.scss'],
})
export class CustomCardsComponent {
  @Input() customImageURL: string = '';

  @Input() customItemTitle: string = '';

  @Input() customPublished: string = '';

  @Input() itemId!: string;
}
