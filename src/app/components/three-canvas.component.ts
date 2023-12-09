import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-three-canvas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #canvasContainer></div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100px;
      position: absolute;
      top: 0;
    }
    div {
      width: 100%;
      height: 100%;
    }

    #canvasContainer {
      width: 100%;  /* O la larghezza che preferisci */
      height: 400px; /* O l'altezza che preferisci */
      opacity: 0;
    }
  `]
})
export class ThreeCanvasComponent implements AfterViewInit, OnDestroy {

  @ViewChild('canvasContainer', { static: false }) canvasContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private line!: THREE.Line;

  ngAfterViewInit() {
    this.initThree();
  }

  ngOnDestroy() {
    this.renderer.dispose();
  }

  private initThree() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.canvasContainer.nativeElement.clientWidth, this.canvasContainer.nativeElement.clientHeight);
    this.renderer.setClearColor( 0xffffff, 0);
    this.canvasContainer.nativeElement.appendChild(this.renderer.domElement);

    // Aggiungi una linea
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const points = [];
    points.push(new THREE.Vector3(-1, 0, 0));
    points.push(new THREE.Vector3(0, 1, 0)); // Sostituisci con le coordinate corrette
    points.push(new THREE.Vector3(1, 0, 0)); // Sostituisci con le coordinate corrette
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    this.line = new THREE.Line(geometry, material);

    this.scene.add(this.line);
    this.camera.position.z = 5;

    this.animate();

  }

  private animate() {
    requestAnimationFrame(() => this.animate());
    // Qui puoi aggiungere logica per aggiornare gli oggetti della tua scena
    this.renderer.render(this.scene, this.camera);
  }
}
