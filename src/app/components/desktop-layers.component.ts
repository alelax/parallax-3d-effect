import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerButtonComponent } from "./layer-button.component";
import { LayersService } from "../services/layers.service";
import { CircularButtonMenuComponent } from "./circular-button-menu.component";
import { MenuType } from "../models/menu";
import { ThreejsModelComponent } from "./threejs-model.component";

@Component({
  selector: 'app-desktop-layers',
  standalone: true,
  imports: [CommonModule, LayerButtonComponent, CircularButtonMenuComponent, ThreejsModelComponent],
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
        <app-threejs-model></app-threejs-model>
        <!--START::Buttons-layer-->
        <div class="layers__item layer-buttons">

          <!--START::Screen-button-->
          <app-circular-button-menu
            [buttonPosition]="{ 'top': '33%', 'right': '42%' }"
            [canvasSettings]="{ 'bottom': '50%', 'left': '50%', 'width': '150px', 'height': '90px' }"
            [menuSettings]="{ 'bottom': '50%', 'left': '50%', 'width': '150px', 'height': '90px', 'display': 'flex', 'justify-content': 'flex-end' }"
            [menuContainerSettings]="{ 'width': '50%' }"
            [lineSettings]="{ 'startL1X': 0, 'startL1Y': '100%', 'endL1X': '50%', 'endL1Y': '35%', 'endL2X': '100%', 'endL2Y': '35%' }"
            [menuType]="MenuType.SCREEN"
          ></app-circular-button-menu>
          <!--END::Screen-button-->

          <!--START::Mouse-button-->
          <app-circular-button-menu
            [buttonPosition]="{ 'top': '51.5%', 'right': '42.5%' }"
            [canvasSettings]="{ 'bottom': '50%', 'right': '50%', 'width': '200px', 'height': '195px' }"
            [menuSettings]="{ 'bottom': '610%', 'right': '600%', 'width': '150px', 'height': '90px', 'display': 'flex', 'justify-content': 'flex-end' }"
            [lineSettings]="{ 'startL1X': '100%', 'startL1Y': '100%', 'endL1X': '50%', 'endL1Y': '12%', 'endL2X': 0, 'endL2Y': '12%' }"
            [menuType]="MenuType.MOUSE"
          ></app-circular-button-menu>
          <!--END::Mouse-button-->

          <!--START::Right-plant-button-->
          <app-circular-button-menu
            [buttonPosition]="{ 'top': '46%', 'right': '31%' }"
            [canvasSettings]="{ 'top': '50%', 'left': '50%', 'width': '150px', 'height': '100px' }"
            [menuSettings]="{ 'top': '370%', 'left': '100%', 'width': '150px', 'height': '100px', 'display': 'flex', 'justify-content': 'flex-end' }"
            [menuContainerSettings]="{ 'width': '55%' }"
            [lineSettings]="{ 'startL1X': 0, 'startL1Y': 0, 'endL1X': '50%', 'endL1Y': 97, 'endL2X': '100%', 'endL2Y': 97 }"
            [menuType]="MenuType.PLANT"
          ></app-circular-button-menu>
          <!--END::Right-plant-button-->

          <!--START::Chair-button-->
          <app-circular-button-menu
            [buttonPosition]="{ 'bottom': '30%', 'left': '43%' }"
            [canvasSettings]="{ 'top': '50%', 'left': '50%', 'width': '130px', 'height': '60px' }"
            [menuSettings]="{ 'top': '170%', 'left': '10%', 'width': '150px', 'height': '100px', 'display': 'flex', 'justify-content': 'flex-end' }"
            [lineSettings]="{ 'startL1X': 0, 'startL1Y': 0, 'endL1X': '50%', 'endL1Y': '97%', 'endL2X': '100%', 'endL2Y': '97%' }"
            [menuType]="MenuType.CHAIR"
          ></app-circular-button-menu>
          <!--END::Chair-button-->

          <!--START::Lamp-buttons-->
          <app-circular-button-menu
            [buttonPosition]="{ 'top': '38%', 'left': '27%' }"
            [canvasSettings]="{ 'bottom': '50%', 'right': '50%', 'width': '200px', 'height': '100px' }"
            [lineSettings]="{ 'startL1X': '100%', 'startL1Y': '100%', 'endL1X': '80%', 'endL1Y': '30%', 'endL2X': 0, 'endL2Y': '30%' }"
            [menuSettings]="{ 'bottom': '75%', 'right': '300%', 'width': '250px', 'height': '100px', 'display': 'flex', 'justify-content': 'flex-end' }"
            [menuType]="MenuType.LAMP"
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

  protected readonly MenuType = MenuType;

  hasFadeInOut: boolean = true;

  constructor(public layerService: LayersService) {}
}
