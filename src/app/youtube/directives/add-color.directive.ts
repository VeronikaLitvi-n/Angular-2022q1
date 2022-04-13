import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import type { OnInit } from '@angular/core';

@Directive({
  selector: '[appAddColor]',
})
export class AddColorDirective implements OnInit {
  @Input() publishedAt: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    let today = new Date();
    let publishedDate = new Date(this.publishedAt);
    let timeDiff = Math.abs(today.getTime() - publishedDate.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    let lineColor = '#e5e5e5';
    if (diffDays < 7) {
      lineColor = '#8bc34a';
    } else if (diffDays >= 7 && diffDays < 31) {
      lineColor = '#03a9f4';
    } else if (diffDays > 180) {
      lineColor = '#fa5f5f';
    }
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      lineColor
    );
  }
}
