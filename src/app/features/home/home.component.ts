import { Component } from '@angular/core';
import { MarqueeComponent } from '../../components/marquee/marquee.component';
import { ProfileComponent } from '../profile/profile.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { KnowledgesComponent } from '../knowledges/knowledges.component';
import { TrajectoryComponent } from '../trajectory/trajectory.component';
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
