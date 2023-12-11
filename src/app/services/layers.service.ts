import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, from, map, Observable, of } from "rxjs";
import { StyleOptions } from "../models/styleOptions";

interface LayerData {
  screen: number,
  backLayers: Layer[],
  frontLayers: Layer[]
}

interface Layer {
  styleOptionsDesktop: StyleOptions
  styleOptionsMobile: StyleOptions
}
@Injectable({
  providedIn: 'root'
})
export class LayersService {

  plainData: LayerData[] = [
    {
      screen: 1,
      backLayers: [
        {
          styleOptionsDesktop: { 'transform': 'translateZ(-55px) scale(1.06)', 'background-image': 'url(assets/img/layers/1/sfondo_giungla.jpg)' },
          styleOptionsMobile: { 'transform': 'translateZ(-55px)', 'background-image': 'url(assets/img/layers/1/sfondo_giungla.jpg)' }
        },
        {
          styleOptionsDesktop: { 'transform': 'translateZ(80px) scale(0.88)', 'background-image': 'url(assets/img/layers/1/giungla_d.png)' },
          styleOptionsMobile: { 'transform': 'translateZ(80px)', 'background-image': 'url(assets/img/layers/1/giungla_d.png)' }
        },
        {
          styleOptionsDesktop: { 'transform': 'translateZ(100px) scale(0.9)', 'background-image': 'url(assets/img/layers/1/giungla_c.png)' },
          styleOptionsMobile: { 'transform': 'translateZ(180)', 'background-image': 'url(assets/img/layers/1/giungla_c.png)' }
        },
        {
          styleOptionsDesktop: { 'transform': 'translateZ(142px) scale(.86)', 'background-image': 'url(assets/img/layers/1/giungla_b.png)' },
          styleOptionsMobile: { 'transform': 'translateZ(300px)', 'background-image': 'url(assets/img/layers/1/giungla_b.png)' }
        },
      ],
      frontLayers: [
        {
          styleOptionsDesktop: { 'transform': 'translateZ(160px) scale(.8)', 'background-image': 'url(assets/img/layers/1/giungla_a.png)' },
          styleOptionsMobile: { 'transform': 'translateZ(380px)', 'background-image': 'url(assets/img/layers/1/giungla_a.png)' }
        },
        {
          styleOptionsDesktop: { 'transform': 'translateZ(200px) scale(.6)', 'background-image': 'url(assets/img/layers/1/foglie.png)' },
          styleOptionsMobile: { 'transform': 'translateZ(380px)', 'background-image': 'url(assets/img/layers/1/foglie.png)' }
        }
      ]
    },
    {
      screen: 2,
      backLayers: [
        {
          styleOptionsDesktop: { 'transform': 'translateZ(-55px) scale(1.06)', 'background-image': 'url(assets/img/layers/2/sfondo_giungla.jpg)' },
          styleOptionsMobile: { 'transform': 'translateZ(-55px)', 'background-image': 'url(assets/img/layers/2/sfondo_giungla.jpg)' }
        },
        {
          styleOptionsDesktop: { 'transform': 'translateZ(80px) scale(.88)', 'background-image': 'url(assets/img/layers/2/giungla_d.png)' },
          styleOptionsMobile: { 'transform': 'translateZ(80px)', 'background-image': 'url(assets/img/layers/2/giungla_d.png)' }
        },
        {
          styleOptionsDesktop: { 'transform': 'translateZ(180px) scale(.8)', 'background-image': 'url(assets/img/layers/2/giungla_c.png)' },
          styleOptionsMobile: { 'transform': 'translateZ(180)', 'background-image': 'url(assets/img/layers/2/giungla_c.png)' }
        }
      ],
      frontLayers: [
        {
          styleOptionsDesktop: { 'transform': 'translateZ(300px) scale(.9)', 'background-image': 'url(assets/img/layers/2/giungla_b.png)' },
          styleOptionsMobile: { 'transform': 'translateZ(300px)', 'background-image': 'url(assets/img/layers/2/giungla_b.png)' }
        },
        {
          styleOptionsDesktop: { 'transform': 'translateZ(380px)', 'background-image': 'url(assets/img/layers/2/giungla_a.png)' },
          styleOptionsMobile: { 'transform': 'translateZ(380px)', 'background-image': 'url(assets/img/layers/2/giungla_a.png)' }
        }
      ]
    },
    {
      screen: 3,
      backLayers: [
        {
          styleOptionsDesktop: { 'transform': 'translateZ(-55px) scale(1.06)', 'background-image': 'url(assets/img/layers/3/sfondo_giungla.jpg)' },
          styleOptionsMobile: { 'transform': 'translateZ(-55px)', 'background-image': 'url(assets/img/layers/3/sfondo_giungla.jpg)' }
        },
        {
          styleOptionsDesktop: { 'transform': 'translateZ(80px) scale(.88)', 'background-image': 'url(assets/img/layers/3/giungla_d.png)' },
          styleOptionsMobile: { 'transform': 'translateZ(80px)', 'background-image': 'url(assets/img/layers/3/giungla_d.png)' }
        },
        {
          styleOptionsDesktop: { 'transform': 'translateZ(180px) scale(.8)', 'background-image': 'url(assets/img/layers/3/giungla_c.png)' },
          styleOptionsMobile: { 'transform': 'translateZ(180)', 'background-image': 'url(assets/img/layers/3/giungla_c.png)' }
        }
      ],
      frontLayers: [
        {
          styleOptionsDesktop: { 'transform': 'translateZ(300px) scale(.9)', 'background-image': 'url(assets/img/layers/3/giungla_b.png)' },
          styleOptionsMobile: { 'transform': 'translateZ(300px)', 'background-image': 'url(assets/img/layers/3/giungla_b.png)' }
        },
        {
          styleOptionsDesktop: { 'transform': 'translateZ(380px)', 'background-image': 'url(assets/img/layers/3/giungla_a.png)' },
          styleOptionsMobile: { 'transform': 'translateZ(380px)', 'background-image': 'url(assets/img/layers/3/giungla_a.png)' }
        }
      ]
    }
  ]

  data$: Observable<LayerData[]> = of(this.plainData)

  private currentPageSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  currentPage$ = this.currentPageSubject.asObservable();

  currentScreen$: Observable<LayerData[]> = this.currentPage$.pipe(
    concatMap( () => this.data$),
    map( data => data.filter( screen => screen.screen === this.currentPageSubject.value ))
  )

  numbersOfScreens: number = 3

  constructor() {}

  setCurrentPage(page: number) {
    this.currentPageSubject.next(page);
  }

  nextPage() {
    let nextPage = this.currentPageSubject.value + 1;
    if (nextPage > this.numbersOfScreens) nextPage = 1;
    console.log('nextPage: ', nextPage);
    this.setCurrentPage(nextPage);
  }

  prevPage() {
    let prevPage = this.currentPageSubject.value - 1;
    if (prevPage < 1) prevPage = this.numbersOfScreens;
    console.log('prevPage: ', prevPage);
    this.setCurrentPage(prevPage);
  }

}
