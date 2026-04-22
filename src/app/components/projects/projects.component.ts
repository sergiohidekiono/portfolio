import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-projects',
  imports: [ButtonModule, CardModule, SectionTitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
