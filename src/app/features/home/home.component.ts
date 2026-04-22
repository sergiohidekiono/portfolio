import { Component } from '@angular/core';
import { MarqueeComponent } from '../../components/marquee/marquee.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { TrajectoryComponent } from '../../components/trajectory/trajectory.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { KnowledgesComponent } from '../../components/knowledges/knowledges.component';

@Component({
  selector: 'app-home',
  imports: [
    MarqueeComponent,
    KnowledgesComponent,
    ProfileComponent,
    ProjectsComponent,
    TrajectoryComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
