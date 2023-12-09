import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerButtonComponent } from "./layer-button.component";
import { LayersService } from "../services/layers.service";
import { CircularButtonMenuComponent } from "./circular-button-menu.component";

@Component({
  selector: 'app-desktop-layers',
  standalone: true,
  imports: [CommonModule, LayerButtonComponent, CircularButtonMenuComponent],
  template: `

    <section
      *ngIf="(layerService.currentScreen$ | async) as currentScreen"
      [ngClass]="{'fade-in-out': hasFadeInOut, 'fade-out': hasFadeOut}"
      class="layers"
    >
      <!--START::Layers-container-->
      <div class="layers__container">

        <!--START::Back-layer-->
        <div
          *ngFor="let backLayer of currentScreen[0].backLayers"
          [ngStyle]="backLayer.styleOptionsDesktop"
          class="layers__item"
        ></div>
        <!--END::Back-layer-->

        <!--START::Desk-layer-->
        <div
          [ngStyle]="{ 'transform': 'translateZ(190px) scale(.7)', 'background-image': 'url(assets/img/scrivania.png)' }"
          class="layers__item"
        ></div>
        <!--END::Desk-layer-->

        <!--START::Front-layer-->
        <div
          *ngFor="let frontLayer of currentScreen[0].frontLayers"
          [ngStyle]="frontLayer.styleOptionsDesktop"
          class="layers__item"
        ></div>
        <!--END::Front-layer-->

        <!--START::Buttons-layer-->
        <div class="layers__item layer-buttons">

          <!--START::Screen-button-->
          <app-circular-button-menu
            [buttonPosition]="{ 'top': '24%', 'right': '43%' }"
          ></app-circular-button-menu>
          <!--END::Screen-button-->

          <!--START::Mouse-button-->
          <app-circular-button-menu
            [buttonPosition]="{ 'top': '52%', 'right': '40%' }"
          ></app-circular-button-menu>
          <!--END::Mouse-button-->

          <!--START::Right-plant-button-->
          <app-circular-button-menu
            [buttonPosition]="{ 'top': '45%', 'right': '25%' }"
          ></app-circular-button-menu>
          <!--END::Right-plant-button-->

          <!--START::Chair-plant-button-->
          <app-circular-button-menu
            [buttonPosition]="{ 'bottom': '20%', 'left': '43%' }"
          ></app-circular-button-menu>
          <!--END::Chair-plant-button-->

          <!--START::Lamp-buttons-->
          <app-circular-button-menu
            [buttonPosition]="{ 'top': '28%', 'left': '25%' }"
          ></app-circular-button-menu>
          <!--END::Lamp-buttons-->
        </div>
        <!--START::Buttons-layer-->

        <!--START::Text-layer-->
        <div class="layers__item layer-text">
          <h1 class="hero-content__h1">NON SOLO<br>CONSULENZE</h1>
          <div class="hero-content__p">Studio Pentha Soluzioni</div>
        </div>
        <!--End::Text-layer-->

      </div>
      <!--END::Layers-container-->

    </section>

  `,
  styles: [``]
})
export class DesktopLayersComponent {

  @Input() hasFadeOut: boolean = false;

  hasFadeInOut: boolean = true;

  constructor(public layerService: LayersService) {}


}
