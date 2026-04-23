import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { CommonModule } from '@angular/common';
import { ProjectData } from '../../data';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ButtonModule, CardModule, SectionTitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  section: number = 3;
  title = $localize`:@@projects.title:Projetos`;

  projects: any[] = [];

  ngOnInit() {
    this.projects = ProjectData();
  }
}
