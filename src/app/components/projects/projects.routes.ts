// projects.routes.ts
import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

export const PROJECTS_ROUTES: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./project-detail/project-detail.component').then(
        (c) => c.ProjectDetailComponent,
      ),
  },
];
