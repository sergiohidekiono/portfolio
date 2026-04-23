import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contacts = [
    {
      id: 1,
      name: 'Email',
      url: 'mailto:sergiohidekiono@gmail.com',
    },
    {
      id: 2,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sergio-hideki-ono-947b066a/?skipRedirect=true',
    },
    { id: 3, name: 'GitHub', url: 'https://github.com/sergiohidekiono' },
  ];

  downloadCurriculum() {
    window.open('assets/curriculo.pdf', '_blank');
  }
}
