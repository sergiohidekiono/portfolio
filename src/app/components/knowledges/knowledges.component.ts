import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { KnowledgesData } from '../../data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-knowledges',
  imports: [SectionTitleComponent, TranslateModule],
  templateUrl: './knowledges.component.html',
  styleUrl: './knowledges.component.scss',
})
export class KnowledgesComponent {
  section: number = 1;
  title: string = '';

  knowledges = KnowledgesData();
}
