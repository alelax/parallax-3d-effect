import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerButtonComponent } from "./layer-button.component";
import { LayersService } from "../services/layers.service";

@Component({
  selector: 'app-desktop-layers',
  standalone: true,
  imports: [CommonModule, LayerButtonComponent],
  template: `
    <section
      *ngIf="(layerService.currentScreen$ | async) as currentScreen"
      [ngClass]="{'fade-in-out': hasFadeInOut, 'fade-out': hasFadeOut}"
      class="layers"
    >

      <div class="layers__container">

        <!--START::back-layers-->
        <div
          *ngFor="let backLayer of currentScreen[0].backLayers"
          [ngStyle]="backLayer.styleOptionsDesktop"
          class="layers__item"
        ></div>
        <!--END::back-layers-->

        <!--START::desk-layers-->
        <div
          [ngStyle]="{ 'transform': 'translateZ(190px) scale(.7)', 'background-image': 'url(assets/img/scrivania.png)' }"
          class="layers__item"
        ></div>
        <!--END::desk-layers-->

        <!--START::front-layers-->
        <div
          *ngFor="let frontLayer of currentScreen[0].frontLayers"
          [ngStyle]="frontLayer.styleOptionsDesktop"
          class="layers__item"
        ></div>
        <!--END::front-layers-->

      </div>

    </section>

  `,
  styles: [``]
})
export class DesktopLayersComponent {

  @Input() hasFadeOut: boolean = false;

  hasFadeInOut: boolean = true;

  constructor(public layerService: LayersService) {}


}
