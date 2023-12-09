import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerButtonComponent } from "./layer-button.component";
import { LayersService } from "../services/layers.service";

@Component({
  selector: 'app-mobile-layers',
  standalone: true,
  imports: [CommonModule, LayerButtonComponent],
  template: `
    <section
      *ngIf="(layerService.currentScreen$ | async) as currentScreen"
      [ngClass]="{'fade-in-out': hasFadeInOut, 'fade-out': hasFadeOut}"
      class="mobile-layers"
    >

      <div class="mobile-layers__container">

        <!--START::back-layers-->
        <div
          *ngFor="let backLayer of currentScreen[0].backLayers"
          [ngStyle]="backLayer.styleOptionsMobile"
          class="mobile-layers__item"
        ></div>

        <!--END::back-layers-->

        <!--START::desk-layers-->
        <div
          [ngStyle]="{'background-image': 'url(assets/img/scrivania.png)' }"
          class="mobile-layers__item desk"
        ></div>
        <!--END::desk-layers-->

        <!--START::front-layers-->
        <div
          *ngFor="let frontLayer of currentScreen[0].frontLayers"
          [ngStyle]="frontLayer.styleOptionsMobile"
          class="mobile-layers__item"
        ></div>
        <!--END::front-layers-->

      </div>

    </section>


  `,
  styles: [``]
})
export class MobileLayersComponent {

  @Input() hasFadeOut: boolean = false;

  hasFadeInOut: boolean = true;

  constructor(public layerService: LayersService) {}

}
