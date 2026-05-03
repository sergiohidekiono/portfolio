export function Navbar() {
  return [
    { id: 1, name: 'navbar.knowledges', fragment: 'knowledges' },
    { id: 2, name: 'navbar.trajectory', fragment: 'trajectory' },
    { id: 3, name: 'navbar.projects', fragment: 'projects' },
    { id: 4, name: 'navbar.contact', fragment: 'contact' },
  ];
}

export function MarqueeData() {
  return [
    { id: 1, name: 'angular' },
    { id: 2, name: 'javascript' },
    { id: 3, name: 'angular_material' },
    { id: 4, name: 'primeng' },
    { id: 5, name: 'typescript' },
    { id: 6, name: 'rxjs' },
    { id: 7, name: 'ngrx_signals' },
    { id: 8, name: 'nestjs' },
    { id: 9, name: 'jest' },
    { id: 10, name: 'storybook' },
    { id: 11, name: 'node.js' },
    { id: 12, name: 'ci_cd' },
    { id: 13, name: 'prisma' },
    { id: 14, name: 'figma' },
    { id: 15, name: 'rxjs' },
    { id: 16, name: 'api_rest' },
    { id: 17, name: 'git' },
    { id: 18, name: 'jira' },
    { id: 19, name: 'scrum' },
    { id: 20, name: 'kanban' },
    { id: 21, name: 'i18n' },
    { id: 22, name: 'azure_devops' },
  ];
}

export function KnowledgesData() {
  return [
    {
      title: 'knowledges.frontend_engineering.title',
      icon: 'knowledges.frontend_engineering.icon',
      content: ['knowledges.frontend_engineering.content'],
    },
    {
      title: 'knowledges.architecture_performance.title',
      icon: 'knowledges.architecture_performance.icon',
      content: ['knowledges.architecture_performance.content'],
    },
    {
      title: 'knowledges.integrations_data.title',
      icon: 'knowledges.integrations_data.icon',
      content: ['knowledges.integrations_data.content'],
    },
    {
      title: 'knowledges.quality_practices.title',
      icon: 'knowledges.quality_practices.icon',
      content: ['knowledges.quality_practices.content'],
    },
    {
      title: 'knowledges.tools_methodologies.title',
      icon: 'knowledges.tools_methodologies.icon',
      content: ['knowledges.tools_methodologies.content'],
    },
  ];
}

export function ExperiencesData() {
  return [
    {
      position: 'trajectory.experience.wba.position',
      enterprise: 'trajectory.experience.wba.enterprise',
      duration: 'trajectory.experience.wba.duration',
      description: 'trajectory.experience.wba.description',
      technologies: ['trajectory.experience.wba.technologies'],
    },
    {
      position: 'trajectory.experience.tecnofit.position',
      enterprise: 'trajectory.experience.tecnofit.enterprise',
      duration: 'trajectory.experience.tecnofit.duration',
      description: 'trajectory.experience.tecnofit.description',
      technologies: ['trajectory.experience.tecnofit.technologies'],
    },
    {
      position: 'trajectory.experience.avanade.position',
      enterprise: 'trajectory.experience.avanade.enterprise',
      duration: 'trajectory.experience.avanade.duration',
      description: 'trajectory.experience.avanade.description',
      technologies: ['trajectory.experience.avanade.technologies'],
    },
    {
      position: 'trajectory.experience.omsistemas.position',
      enterprise: 'trajectory.experience.omsistemas.enterprise',
      duration: 'trajectory.experience.omsistemas.duration',
      description: 'trajectory.experience.omsistemas.description',
      technologies: ['trajectory.experience.omsistemas.technologies'],
    },
  ];
}

export function ProjectData() {
  return [
    {
      title: 'projects.wktechnology.title',
      description: 'projects.wktechnology.description',
      technologies: ['Angular', 'Chart.js', 'REST', 'Supabase', 'RxJS'],
      image: 'https://ik.imagekit.io/e0cpksvj4l/portfolio/wktechnology.png?updatedAt=1777781447995',
      url: 'https://wktechnology.netlify.app/',
    },
    {
      title: 'projects.medalerta.title',
      description: 'projects.medalerta.description',
      technologies: ['Angular', 'Firebase', 'PrimeNG', 'RxJS'],
      image: 'https://ik.imagekit.io/e0cpksvj4l/portfolio/med%20alerta.png?updatedAt=1777781448487',
      url: 'https://med-alerta.netlify.app/login',
    },
    {
      title: 'projects.yetianimation.title',
      description: 'projects.yetianimation.description',
      technologies: ['Angular', 'Rive', 'PrimeNG'],
      image: 'https://ik.imagekit.io/e0cpksvj4l/portfolio/yeti%20animation.png?updatedAt=1777781448476',
      url: 'https://yeti-animation.netlify.app/',
    },
  ];
}
