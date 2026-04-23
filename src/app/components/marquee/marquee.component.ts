import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee',
  imports: [],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss',
})
export class MarqueeComponent {
  technologies: { id: number; name: string }[] = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Javascript' },
    { id: 3, name: 'Angular Material' },
    { id: 4, name: 'PrimeNg' },
    { id: 5, name: 'TypeScript' },
    { id: 6, name: 'RxJS' },
    { id: 7, name: 'NgRx Signals' },
    { id: 8, name: 'NestJs' },
    { id: 9, name: 'Jest' },
    { id: 10, name: 'Storybook' },
    { id: 11, name: 'Node.js' },
    { id: 12, name: 'CI/CD' },
    { id: 13, name: 'Prisma' },
    { id: 14, name: 'Figma' },
    { id: 15, name: 'RxJS' },
    { id: 16, name: 'API Rest' },
    { id: 17, name: 'Git' },
    { id: 18, name: 'Jira' },
    { id: 19, name: 'Scrum' },
    { id: 20, name: 'Kanban' },
    { id: 21, name: 'i18n' },
    { id: 22, name: 'Azure DevOps' },
  ];
}
