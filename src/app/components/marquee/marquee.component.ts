import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MarqueeData } from '../../data';

@Component({
  selector: 'app-marquee',
  imports: [TranslateModule],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss',
})
export class MarqueeComponent {
  technologies: { id: number; name: string }[] = MarqueeData();
}
