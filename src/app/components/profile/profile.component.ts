import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  yearsOfExperience: number = 5;
  projectDelivered: number = 15;
  version: string = 'v4 ~ v19';
}
