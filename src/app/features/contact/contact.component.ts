import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  email = 'sergiohidekiono@gmail.com';
  downloadCurriculum() {
    window.open('assets/curriculo.pdf', '_blank');
  }
}
