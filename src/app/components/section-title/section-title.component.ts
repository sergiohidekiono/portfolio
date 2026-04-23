import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
})
export class SectionTitleComponent {
  sectionNumber = input<number>();
  title = input<string>();
}
