import { Injectable } from '@angular/core';
import { Menu, MenuList, MenuType } from "../models/menu";
import { BehaviorSubject, concatMap, filter, map, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuPlainData: MenuList = [
    {
      type: MenuType.SCREEN,
      menuTitle: { title: 'We do this', url: 'https://www.google.com' },
      links: [
        {
          mainLink: { title: 'Servizi', url: 'https://www.google.com' },
        },
        {
          mainLink: { title: 'I settori che conosciamo', url: 'https://www.google.com' },
          subLinks: [
            { title: 'il tuo settore', url: 'https://www.google.com' }
          ]
        },
        {
          mainLink: { title: 'Dimensioni aziendali e loro peculiarità', url: 'https://www.google.com' },
          subLinks: [
            { title: 'azienda senza dipendenti', url: 'https://www.google.com' },
            { title: 'azienda fino a 10 dipendenti', url: 'https://www.google.com' },
            { title: 'azienda con centinaia di dipendenti', url: 'https://www.google.com' }
          ]
        },
        {
          mainLink: { title: 'Scopri tutti i servizi', url: 'https://www.google.com' },
        },

      ]
    },
    {
      type: MenuType.PLANT,
      menuTitle: { title: 'Work with us', url: 'https://google.com'},
      links: [
        {
          mainLink: { title: 'Lavora con noi', url: 'https://www.google.com' },
        }
      ]
    },
    {
      type: MenuType.CHAIR,
      menuTitle: { title: 'Get in touch', url: 'https://google.com'},
      links: [
        {
          mainLink: { title: 'Contatti', url: 'https://www.google.com' },
        }
      ]
    },
    {
      type: MenuType.MOUSE,
      menuTitle: { title: 'Get to know us', url: 'https://google.com'},
      links: [
        {
          mainLink: { title: 'Chi siamo', url: 'https://www.google.com' },
        },
        {
          mainLink: { title: 'Our bet', url: 'https://www.google.com' },
        },
        {
          mainLink: { title: 'Team', url: 'https://www.google.com' },
        }
      ]
    },
    {
      type: MenuType.LAMP,
      menuTitle: { title: 'Testimonials and Numbers', url: 'https://google.com'},
      links: [
        {
          mainLink: { title: 'Dicono di noi', url: 'https://www.google.com' },
        }
      ]
    }

  ]

  data$: Observable<MenuList> = of(this.menuPlainData);

  private currentMenuTypeSubject: BehaviorSubject<MenuType | null> = new BehaviorSubject<MenuType | null>(null);
  currentMenuType$: Observable<MenuType | null> = this.currentMenuTypeSubject.asObservable();

  currentMenu$: Observable<Menu[] | null> = this.currentMenuType$.pipe(
    filter( menus => !!menus),
    concatMap( () => this.data$),
    map( (data: Menu[]) => data.filter( menu => menu.type === this.currentMenuTypeSubject.value))
  )

  setCurrentMenuType(type: MenuType | null) {
    this.currentMenuTypeSubject.next(type);
  }

  constructor() { }
}
