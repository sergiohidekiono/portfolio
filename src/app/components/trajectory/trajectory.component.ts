import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { Experience } from './experience';
import { TranslateModule } from '@ngx-translate/core';
import { ExperiencesData } from '../../data';

@Component({
  selector: 'app-trajectory',
  imports: [SectionTitleComponent, TranslateModule],
  templateUrl: './trajectory.component.html',
  styleUrl: './trajectory.component.scss',
})
export class TrajectoryComponent {
  section: number = 2;

  experiences: Experience[] = ExperiencesData();
}
