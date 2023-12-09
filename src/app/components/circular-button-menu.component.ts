import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circular-button-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="button-container"  [ngStyle]="buttonPosition" (mouseover)="loggingHover($event)">
      <button><img src="assets/img/pulsante.svg" alt="circular-button-menu"></button>
    </div>

  `,
  styles: [`
    .button-container {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      &:hover {
        animation: smallPulseButton 1.5s linear infinite;
      }

      & button {
        width: fit-content;
        max-width: 100%;
        height: 100%;
        border-radius: 50%;

        & img {
          width: 100%;
          cursor: pointer;
        }

      }
    }
  `]
})
export class CircularButtonMenuComponent {

  @Input() buttonPosition: {[key: string]: string} = {}

  loggingHover(evt: MouseEvent) {
    console.log(evt);

  }
}
