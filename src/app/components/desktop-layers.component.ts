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

    <!--START::Main-layer-container-->
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
          [ngStyle]="{ 'transform': 'translateZ(144px) scale(.7)', 'background-image': 'url(assets/img/scrivania.png)' }"
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
        <!--<div class="layers__item layer-buttons">

          &lt;!&ndash;START::Screen-button&ndash;&gt;
          <app-circular-button-menu
            [buttonPosition]="{ 'top': '24%', 'right': '43%' }"
            [canvasSettings]="{ 'bottom': '50%', 'left': '50%', 'width': '150px', 'height': '50px' }"
            [lineSettings]="{ 'startL1X': 0, 'startL1Y': '100%', 'endL1X': '50%', 'endL1Y': 0, 'endL2X': '100%', 'endL2Y': 0 }"
          ></app-circular-button-menu>
          &lt;!&ndash;END::Screen-button&ndash;&gt;

          &lt;!&ndash;START::Mouse-button&ndash;&gt;
          <app-circular-button-menu
            [buttonPosition]="{ 'top': '52%', 'right': '40%' }"
            [canvasSettings]="{ 'bottom': '50%', 'right': '50%', 'width': '200px', 'height': '135px' }"
            [lineSettings]="{ 'startL1X': '100%', 'startL1Y': '100%', 'endL1X': '50%', 'endL1Y': 0, 'endL2X': 0, 'endL2Y': 0 }"
          ></app-circular-button-menu>
          &lt;!&ndash;END::Mouse-button&ndash;&gt;

          &lt;!&ndash;START::Right-plant-button&ndash;&gt;
          <app-circular-button-menu
            [buttonPosition]="{ 'top': '45%', 'right': '25%' }"
            [canvasSettings]="{ 'top': '50%', 'left': '50%', 'width': '150px', 'height': '100px' }"
            [lineSettings]="{ 'startL1X': 0, 'startL1Y': 0, 'endL1X': '50%', 'endL1Y': '100%', 'endL2X': '100%', 'endL2Y': '100%' }"
          ></app-circular-button-menu>
          &lt;!&ndash;END::Right-plant-button&ndash;&gt;

          &lt;!&ndash;START::Chair-plant-button&ndash;&gt;
          <app-circular-button-menu
            [buttonPosition]="{ 'bottom': '20%', 'left': '43%' }"
            [canvasSettings]="{ 'top': '50%', 'left': '50%', 'width': '130px', 'height': '60px' }"
          ></app-circular-button-menu>
          &lt;!&ndash;END::Chair-plant-button&ndash;&gt;

          &lt;!&ndash;START::Lamp-buttons&ndash;&gt;
          <app-circular-button-menu
            [buttonPosition]="{ 'top': '28%', 'left': '25%' }"
            [canvasSettings]="{ 'bottom': '50%', 'right': '50%', 'width': '200px', 'height': '100px' }"

          ></app-circular-button-menu>
          &lt;!&ndash;END::Lamp-buttons&ndash;&gt;
        </div>-->
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
    <!--END::Main-layer-container-->

    <!--START::Secondary-layer-container-->
    <section
      *ngIf="(layerService.currentScreen$ | async) as currentScreen"
      [ngClass]="{'fade-in-out': hasFadeInOut, 'fade-out': hasFadeOut}"
      class="layers second"
    >
      <!--START::Layers-container-->
      <div class="layers__container second">

        <!--START::Buttons-layer-->
        <div class="layers__item layer-buttons">

          <!--START::Screen-button-->
          <app-circular-button-menu
            [buttonPosition]="{ 'top': '32%', 'right': '41%' }"
            [canvasSettings]="{ 'bottom': '50%', 'left': '50%', 'width': '150px', 'height': '50px' }"
            [lineSettings]="{ 'startL1X': 0, 'startL1Y': '100%', 'endL1X': '50%', 'endL1Y': 3, 'endL2X': '100%', 'endL2Y': 3 }"
          ></app-circular-button-menu>
          <!--END::Screen-button-->

          <!--START::Mouse-button-->
          <app-circular-button-menu
            [buttonPosition]="{ 'top': '51.5%', 'right': '42.5%' }"
            [canvasSettings]="{ 'bottom': '50%', 'right': '50%', 'width': '200px', 'height': '135px' }"
            [lineSettings]="{ 'startL1X': '100%', 'startL1Y': '100%', 'endL1X': '50%', 'endL1Y': 3, 'endL2X': 0, 'endL2Y': 3 }"
          ></app-circular-button-menu>
          <!--END::Mouse-button-->

          <!--START::Right-plant-button-->
          <app-circular-button-menu
            [buttonPosition]="{ 'top': '46%', 'right': '28%' }"
            [canvasSettings]="{ 'top': '50%', 'left': '50%', 'width': '150px', 'height': '100px' }"
            [lineSettings]="{ 'startL1X': 0, 'startL1Y': 0, 'endL1X': '50%', 'endL1Y': 97, 'endL2X': '100%', 'endL2Y': 97 }"
          ></app-circular-button-menu>
          <!--END::Right-plant-button-->

          <!--START::Chair-button-->
          <app-circular-button-menu
            [buttonPosition]="{ 'bottom': '30%', 'left': '43%' }"
            [canvasSettings]="{ 'top': '50%', 'left': '50%', 'width': '130px', 'height': '60px' }"
            [lineSettings]="{ 'startL1X': 0, 'startL1Y': 0, 'endL1X': '50%', 'endL1Y': '97%', 'endL2X': '100%', 'endL2Y': '97%' }"
          ></app-circular-button-menu>
          <!--END::Chair-button-->

          <!--START::Lamp-buttons-->
          <app-circular-button-menu
            [buttonPosition]="{ 'top': '38%', 'left': '25%' }"
            [canvasSettings]="{ 'bottom': '50%', 'right': '50%', 'width': '200px', 'height': '100px' }"
            [lineSettings]="{ 'startL1X': '100%', 'startL1Y': '100%', 'endL1X': '50%', 'endL1Y': 3, 'endL2X': 0, 'endL2Y': 3 }"
          ></app-circular-button-menu>
          <!--END::Lamp-buttons-->
        </div>
        <!--START::Buttons-layer-->
      </div>

    </section>
    <!--SECONDARY::Secondary-layer-container-->

  `,
  styles: [``]
})
export class DesktopLayersComponent {

  @Input() hasFadeOut: boolean = false;

  hasFadeInOut: boolean = true;

  constructor(public layerService: LayersService) {}


}
