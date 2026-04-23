import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { Experience } from './experience';

@Component({
  selector: 'app-trajectory',
  imports: [SectionTitleComponent],
  templateUrl: './trajectory.component.html',
  styleUrl: './trajectory.component.scss',
})
export class TrajectoryComponent {
  section: number = 2;
  title = $localize`:@@trajectory.title:Trajetória`;

  experiences: Experience[] = [
    {
      position: 'Desenvolvedor Frontend Pleno',
      enterprise: 'WBA Software',
      duration: '3 meses (SET 2022 – NOV 2023)',
      description:
        'Desenvolvimento e manutenção de interfaces web com Angular, implementação de componentes reutilizáveis, layout responsivo, system design para performance, integração com APIs REST e tratamento de estados assíncronos com RxJS.',
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'HTML',
        'CSS',
        'REST APIs',
        'Git',
      ],
    },
    {
      position: 'Desenvolvedor Frontend Pleno',
      enterprise: 'Tecnofit',
      duration: '1 ano (AGO 2022 – JUL 2023)',
      description:
        'Desenvolvimento de módulos de agenda e campanhas, criação de biblioteca de componentes reutilizáveis, otimização de performance em telas com grande volume de dados e integração com APIs REST usando RxJS.',
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'REST APIs',
        'PHP',
        'SQL',
        'Git',
        'Figma',
      ],
    },
    {
      position: 'Analista Frontend Developer',
      enterprise: 'Avanade',
      duration: '1 ano e 1 mês (JUL 2021 – JUL 2022)',
      description:
        'Desenvolvimento de aplicações corporativas em Angular para clientes internacionais do grupo CNH Industrial. Módulos de gestão de produtos, estoque e processos financeiros. Componentes reutilizáveis, integração com APIs REST e trabalho em times multidisciplinares ágeis.',
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'REST APIs',
        'Git',
        'Azure DevOps',
        'Figma',
        'SQL',
      ],
    },
    {
      position: 'Programador Júnior II',
      enterprise: 'OM Sistemas',
      duration: '2 anos e 11 meses (AGO 2018 – JUN 2021)',
      description:
        'Desenvolvimento de sistema web para gestão de clínicas e pacientes, funcionalidades de agendamento, cadastro e rotinas administrativas. Manutenção e evolução de sistema legado com melhorias contínuas.',
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'REST APIs',
        'Git',
        'SQL',
        'DevExtreme',
      ],
    },
  ];
}
