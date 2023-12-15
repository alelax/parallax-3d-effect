import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="audio-player">
      <div class="left-controls">
        <button
          class="control"
          (click)="toggleAudio(audio)"
        >
          <!--<i class="fa" [ngClass]="{ 'fa-play': !audioPlay, 'fa-pause': audioPlay}" aria-hidden="true"></i>-->
          <div class="playing">
            <span class="playing__bar playing__bar1" [ngClass]="{ 'on-play': audioPlay }"></span>
            <span class="playing__bar playing__bar2" [ngClass]="{ 'on-play': audioPlay }"></span>
            <span class="playing__bar playing__bar3" [ngClass]="{ 'on-play': audioPlay }"></span>
          </div>
        </button>
      </div>
      <audio #audioPlayer>
        <source [src]="source" type="audio/mpeg">
        Il tuo browser non supporta il tag audio.
      </audio>
    </div>
  `,
  styles: [`
    .audio-player {
      padding: 0px 10px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      //background-color: var(--app-primary-color);
      color: white;
      margin: 10px 0;
      min-height: 60px;
      border-radius: 5px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1), 0 3px 11px -2px rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.1);
      cursor: pointer;
      text-decoration: none;
      position: absolute;
      bottom: 30px;
      right: 30px;
      

      & .control {
        width: 35px;
        height: 35px;
        color: white;
        display: inline-block;
        border: 1px solid transparent;
        border-radius: 50%;
        background-color: transparent;
      }

      & .playing {
        background: rgba(255,255,255,.1);
        width: 2rem;
        height: 2rem;
        border-radius: .3rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: .5rem;
        box-sizing: border-box;
        cursor: pointer;
        
        & .playing__bar {
          display: inline-block;
          background: white;
          width: 30%;
          height: 100%;
          
          &.on-play {
            animation: up-and-down 1.3s ease infinite alternate;
          }
          
          &.playing__bar1 {
            height: 60%;
          }

          &.playing__bar2 {
            height: 30%;
            animation-delay: -2.2s;
          }

          &.playing__bar3 {
            height: 75%;
            animation-delay: -3.7s;
          }
        }
        
      }

      @keyframes up-and-down {
        10% {
          height: 30%;
        }

        30% {
          height: 100%;
        }

        60% {
          height: 50%;
        }

        80% {
          height: 75%;
        }

        100% {
          height: 60%;
        }
      }
      
    }
  `]
})
export class AudioPlayerComponent {
  
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  @Input() source: string | undefined = '';
  @Input() title: string | undefined  = '';
  
  audioPlay: boolean = false;
  
  get audio(): HTMLAudioElement {
    return this.audioPlayer.nativeElement;
  }
  
  toggleAudio(audio: HTMLAudioElement) {
    this.audioPlay = !this.audioPlay
    return this.audioPlay ? audio.play().then() : audio.pause()
  }
}
