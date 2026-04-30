import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Navbar } from '../data';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, TranslateModule, SpeedDialModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [MessageService],
})
export class NavbarComponent {
  text = 'sergio.hideki()';
  displayText = '';

  private index = 0;
  private isDeleting = false;
  private timeoutId: any;

  items = Navbar();
  flags: MenuItem[] | undefined;

  constructor(
    private translate: TranslateService,
    private messageService: MessageService,
  ) {
    this.translate.use('pt');
  }

  ngOnInit() {
    this.typeEffect();
    this.flags = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Add',
            detail: 'Data Added',
          });
        },
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Update',
            detail: 'Data Updated',
          });
        },
      },
    ];
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
    this.translate.use(lang);
  }
}
