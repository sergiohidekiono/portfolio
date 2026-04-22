import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  text = 'sergio.hideki()';
  displayText = '';

  private index = 0;
  private isDeleting = false;
  private timeoutId: any;

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

  changeLang(lang: string) {
    localStorage.setItem('lang', lang);
    window.location.href = `/${lang}`;
  }
}
