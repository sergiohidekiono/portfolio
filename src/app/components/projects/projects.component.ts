import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { CommonModule } from '@angular/common';
import { ProjectData } from '../../data';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    SectionTitleComponent,
    TranslateModule,
    CarouselModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  section: number = 3;

  projects: any[] = [];
  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {
    this.projects = ProjectData();
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
