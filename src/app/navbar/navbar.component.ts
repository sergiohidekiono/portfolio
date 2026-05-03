import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollTopModule } from 'primeng/scrolltop';
import { MenuItem } from 'primeng/api';

import { Navbar } from '../data';
import { LanguageComponent } from '../components/language/language.component';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    TranslateModule,
    ScrollTopModule,
    LanguageComponent,
    DrawerModule,
    ButtonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  text = 'sergio.hideki()';
  displayText = '';

  private index = 0;
  private isDeleting = false;
  private timeoutId: any;

  isDrawerVisible: boolean = false;

  items = Navbar();
  flags: MenuItem[] | null = null;

  constructor() {}

  ngOnInit() {
    this.typeEffect();
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }

  typeEffect() {
    if (!this.isDeleting) {
      this.displayText = this.text.substring(0, this.index++);
      if (this.index > this.text.length) {
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.typeEffect(), 1500);
        return;
      }
    } else {
      this.displayText = this.text.substring(0, this.index--);
      if (this.index < 0) {
        this.isDeleting = false;
      }
    }

    this.timeoutId = setTimeout(
      () => this.typeEffect(),
      this.isDeleting ? 50 : 100,
    );
  }
}
