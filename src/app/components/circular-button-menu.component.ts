import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineShapeComponent } from "./line-shape.component";
import { LineCoord } from "../models/lineCoord";

@Component({
  selector: 'app-circular-button-menu',
  standalone: true,
  imports: [CommonModule, LineShapeComponent],
  template: `
    <div class="button-container" [ngStyle]="buttonPosition" (mouseenter)="onMouseEnter($event)" (mouseleave)="onMouseleave($event)">
      <button><img src="assets/img/pulsante.svg" alt="circular-button-menu"></button>

      <ng-container *ngIf="showLine">
        <app-line-shape
          *ngIf="canvasSettings && lineSettings"
          [canvasSetupSettings]="canvasSettings"
          [lineCoordinates]="lineSettings"
        ></app-line-shape>
      </ng-container>

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
  @Input() canvasSettings: {[key: string]: string} | null = null
  @Input() lineSettings: LineCoord | null = null

  showLine: boolean = false

  onMouseEnter(evt: MouseEvent) {
    this.showLine = true
  }

  onMouseleave($event: MouseEvent) {
    this.showLine = false
  }
}
