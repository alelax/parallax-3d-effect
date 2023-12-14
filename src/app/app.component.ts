import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopLayersComponent } from "./components/desktop-layers.component";
import { MobileLayersComponent } from "./components/mobile-layers.component";
import { LayersService } from "./services/layers.service";
import { LayerButtonComponent } from "./components/layer-button.component";
import { ThreejsModelComponent } from "./components/threejs-model.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DesktopLayersComponent, MobileLayersComponent, LayerButtonComponent, ThreejsModelComponent],
  template: `
    <app-desktop-layers [hasFadeOut]="hasFadeOut" class="desktop"></app-desktop-layers>
    <app-mobile-layers [hasFadeOut]="hasFadeOut" class="mobile"></app-mobile-layers>

    <app-layer-button
      type="prev"
      (onScreenSlide)="startTransition(); layerService.prevPage()"
    ></app-layer-button>

    <app-layer-button
      type="next"
      (onScreenSlide)="startTransition(); layerService.nextPage()"
    ></app-layer-button>
  `,
  styles: [`
    .mobile {
      @media screen and (min-width: 1200px) {
        display: none;
      }
    }
    .desktop {
      display: none;
      @media screen and (min-width: 1200px) {
        display: block;
      }
    }
  `],
})
export class AppComponent {
  title = 'Studio Pentha';

  hasFadeOut: boolean = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    Object.assign(document.documentElement, {
      style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
        --move-invert-x: ${(-1 * ((e.clientX - window.innerWidth / 2) / 150)) }px;
        --move-invert-y: ${(-1 * ((e.clientY - window.innerHeight / 2) / 50)) }px;
      `
    })
  }

  constructor(public layerService: LayersService) {}

  startTransition() {
    this.hasFadeOut = true;
    setTimeout(() => this.hasFadeOut = false, 500);
  }
}
