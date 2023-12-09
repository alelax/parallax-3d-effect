import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layer-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="'button-'+type" (click)="slideScreen(type)">
      <span class="img-container"><img [src]="'assets/img/' + (type === 'prev' ? 'left' : 'right') + '-arrow.png'" alt="arrow"></span>
    </div>
  `,
  styles: [`
    .button-prev, .button-next {
      position: absolute;
      z-index: 10;
      transform: translateZ(380px);
      top: 50%;
      background-color: white;
      opacity: .6;
      color: black;
      cursor: pointer;
      border-radius: 50%;
      padding: 15px;
      width: 50px;
      height: 50px;
      &:hover {
        animation: pulseButton 1.5s linear infinite;
      }

      & .img-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border-radius: 50%;

        & img {
          width: 100%;
        }
      }
    }

    .button-prev {
      left: 5%;
      & .img-container img {
        position: relative;
        left: -1px;
      }
    }

    .button-next {
      right: 5%;
      & .img-container img {
        position: relative;
        left: 1px;
      }
    }


  `]
})
export class LayerButtonComponent {

  @Input() type: 'prev' | 'next' = 'prev'
  @Output() onScreenSlide: EventEmitter<string> = new EventEmitter<string>()

  slideScreen(slideDirection: string) {
    this.onScreenSlide.emit(slideDirection)
  }
}
