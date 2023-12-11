import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeCanvasComponent } from "./three-canvas.component";

@Component({
  selector: 'app-circular-button-menu',
  standalone: true,
  imports: [CommonModule, ThreeCanvasComponent],
  template: `
    <div class="button-container"  [ngStyle]="buttonPosition" (mouseenter)="onMouseEnter($event)" (mouseleave)="onMouseLeave($event)">
      <button #circleButton><img src="assets/img/pulsante.svg" alt="circular-button-menu"></button>
      <!--<div style="position: absolute; bottom: 0; width: 100px; height: 150px; background: #00849A"></div>-->
      <app-three-canvas
        *ngIf="true"
        [canvasWidth]="'300px'"
        [canvasHeight]="'300px'"
        [coordX]="lineStartX"
        [coordY]="lineStartY"
      ></app-three-canvas>
    </div>

  `,
  styles: [`
    .button-container {
      width: fit-content;
      height: fit-content;
      /*width: 20px;
      height: 20px;*/
      border-radius: 50%;
      position: absolute;


      & button {
        /*width: fit-content;
        max-width: 100%;
        height: 100%;*/
        width: 20px;
        height: 20px;
        border-radius: 50%;
        &:hover {
          animation: smallPulseButton 1.5s linear infinite;
        }

        & img {
          width: 100%;
          cursor: pointer;
        }

      }
    }
  `]
})
export class CircularButtonMenuComponent implements AfterViewInit{

  @Input() buttonPosition: {[key: string]: string} = {}
  @ViewChild('circleButton') circleButton!: ElementRef<HTMLButtonElement>;

  showLine: boolean = false

  lineStartX: string = '0';
  lineStartY: string = '0';

  ngAfterViewInit(): void {
    this.circleButton.nativeElement.addEventListener('mouseenter', (event) => {
      const rect = this.circleButton.nativeElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      this.lineStartX = centerX + 'px';
      this.lineStartY = centerY + 'px';
      console.log(`Centro del bottone: x = ${centerX}, y = ${centerY}`);
      this.showLine = true;
    });
  }

  onMouseEnter(evt: MouseEvent) {

  }

  onMouseLeave(evt: MouseEvent) {
    this.showLine = false;
  }
}
