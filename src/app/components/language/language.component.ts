import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-language',
  imports: [ToggleSwitchModule, FormsModule],
  template: `
    <ul class="flex items-center">
      <li class="flex gap-4">
        <p-toggleswitch
          class="flex items-center"
          [(ngModel)]="checked"
          (onChange)="changeLang(checked ? 'pt' : 'en')"
        >
          <ng-template #handle let-checked="checked" class="overflow-hidden">
            <img
              [src]="
                checked
                  ? 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Flag_orb_Brazil.svg'
                  : 'https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_orb_USA.svg'
              "
              class="w-4 h-4 rounded-full object-cover"
              alt="flag"
            />
          </ng-template>
        </p-toggleswitch>
      </li>
    </ul>
  `,
  styles: [
    `
      :host ::ng-deep .p-toggleswitch .p-toggleswitch-slider {
        background: rgba(255, 255, 255, 1);
      }
      :host
        ::ng-deep
        .p-toggleswitch.p-toggleswitch-checked
        .p-toggleswitch-slider {
        background: rgba(99, 253, 163, 1);
      }
      :host
        ::ng-deep
        .p-toggleswitch:not(.p-toggleswitch-checked):hover
        .p-toggleswitch-slider {
        background: rgb(221, 221, 221);
      }
      :host
        ::ng-deep
        .p-toggleswitch.p-toggleswitch-checked:hover
        .p-toggleswitch-slider {
        background: rgba(78, 209, 132, 1) !important;
      }
    `,
  ],
})
export class LanguageComponent {
  checked: boolean = true;
  constructor(private translate: TranslateService) {
    this.translate.use('pt');
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
