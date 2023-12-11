import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuType } from "../models/menu";
import { MenuService } from "../services/menu.service";

@Component({
  selector: 'app-floating-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      id="menu-container"
      *ngIf="(menuService.currentMenu$ | async) as menu"
      [ngStyle]="menuSetupSettings"

    >
      <div
        class="menu-wrapper"
        [ngStyle]="menuContainerSetupSettings"
        (mouseenter)="toggleMenuItem($event)"
        (mouseleave)="toggleMenuItem($event)"
      >
        <div class="menu-title soft">
          <a [href]="menu[0].menuTitle.url" target="_blank">{{ menu[0].menuTitle.title }}</a>
        </div>

        <div *ngIf="showMenuItems" class="menu-items">

          <div class="link-container" *ngFor="let link of menu[0].links">
            <a class="main-link soft" [href]="link.mainLink.url" target="_blank">{{ link.mainLink.title }}</a>
            <ul>
              <li *ngFor="let subLink of link.subLinks">
                <a class="sub-link soft" [href]="subLink.url" target="_blank">
                  {{ subLink.title }}
                </a>
              </li>
            </ul>


          </div>

        </div>

      </div>

    </div>
  `,
  styles: [`
    #menu-container {
      position: absolute;
      /*background-color: chartreuse;
      opacity: .4;*/
      z-index: 10;

      & .menu-wrapper {


        height: fit-content;

        & .menu-title {
          background-color: var(--primary-color);
          width: 100%;
          height: fit-content;
          padding: 2px 5px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border-radius: 5px;
          font-family: sans-serif;
          font-size: 12px;
          line-height: 12px;
          cursor: pointer;
          margin-top: .2rem;

          & a {
            text-decoration: none;
            color: white;
          }

          &:hover {
            color: #e74c3c;
          }
        }

        & .menu-items {

          cursor: pointer;
          margin-bottom: 5px;

          & .link-container {
            display: block;
            width: 100%;
            font-family: sans-serif;
            font-size: 10px;

            & .main-link {
              text-decoration: none;
              color: white;
              white-space: nowrap;
              &:hover {
                color: #e74c3c;
              }
            }


            & ul li {

              margin-left: 20px;

              & a.sub-link {
                display: block;
                width: 100%;
                margin: 1px 0 1px -7px;
                text-decoration: none;
                color: white;
                white-space: nowrap;

                &:hover {
                  color: #e74c3c;
                }

              }
            }

          }


        }

        .soft {
          -webkit-transition: color .5s linear;
          -moz-transition: color .5s linear;
          -ms-transition: color .5s linear;
          -o-transition: color .5s linear;
          transition: color .5s linear;
        }
      }
    }
  `]
})
export class FloatingMenuComponent implements OnInit {
  @Input() menuSetupSettings: {[key: string]: string} | null = null
  @Input() menuContainerSetupSettings: {[key: string]: string} | null = null
  @Input() menuType!: MenuType

  showMenuItems: boolean = false

  constructor(public menuService: MenuService) {}

  toggleMenuItem($event: MouseEvent) {
    this.showMenuItems = !this.showMenuItems
  }

  ngOnInit(): void {

  }
}
