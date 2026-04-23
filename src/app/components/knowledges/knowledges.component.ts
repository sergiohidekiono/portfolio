import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-knowledges',
  imports: [SectionTitleComponent],
  templateUrl: './knowledges.component.html',
  styleUrl: './knowledges.component.scss',
})
export class KnowledgesComponent {
  section: number = 1;
  title = $localize`:@@knowledge.title:Conhecimentos`;

  knowledges = [
    {
      title: 'Frontend Engineering',
      icon: 'pi pi-code',
      content: [
        'Angular (Core, Signals, Standalone Components, Lazy Loading)',
        'TypeScript',
        'RxJS (gestão de estado assíncrono)',
        'HTML5 e CSS3',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Arquitetura & Performance',
      icon: 'pi pi-cog',
      content: [
        'Componentização reutilizável',
        'Arquitetura modular',
        'Micro-frontends',
        'Otimização para alto volume de dados',
        'Clean Code',
      ],
    },
    {
      title: 'Integrações & Dados',
      icon: 'pi pi-database',
      content: [
        'Consumo de APIs REST',
        'Firebase e Supabase',
        'SQL (consultas e integrações)',
      ],
    },
    {
      title: 'Qualidade & Boas Práticas',
      icon: 'pi pi-check-circle',
      content: [
        'Testes automatizados com Jest',
        'Storybook para documentação de componentes',
        'Padronização com Design System',
      ],
    },
    {
      title: 'Ferramentas & Metodologias',
      icon: 'pi pi-briefcase',
      content: [
        'Git e GitHub',
        'Azure DevOps',
        'Jira',
        'Scrum e Kanban',
        'Figma',
      ],
    },
  ];
}
