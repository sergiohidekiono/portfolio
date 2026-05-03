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
        background: linear-gradient(
          90deg,
          rgba(255, 82, 82, 1) -60%,
          rgba(255, 255, 255, 1) 200%
        );
      }
      :host
        ::ng-deep
        .p-toggleswitch.p-toggleswitch-checked
        .p-toggleswitch-slider {
        background: linear-gradient(
          90deg,
          rgba(255, 241, 112, 1) 0%,
          rgba(0, 189, 79, 1) 300%
        );
      }
      :host
        ::ng-deep
        .p-toggleswitch:not(.p-toggleswitch-checked):hover
        .p-toggleswitch-slider {
        background: linear-gradient(
          90deg,
          rgb(220, 60, 60) -60%,
          rgb(220, 220, 220) 200%
        ) !important;
      }
      :host ::ng-deep .p-toggleswitch:hover .p-toggleswitch-slider {
        background: linear-gradient(
          90deg,
          rgb(214, 203, 88) 0%,
          rgb(0, 150, 63) 300%
        ) !important;
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
