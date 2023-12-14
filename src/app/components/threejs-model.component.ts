import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-threejs-model',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #rendererContainer id="model"></div>
  `,
  styles: [`
    #model {
      position: absolute;
      top: 0;
      width: 100px;
      height: 100px;
      background: transparent;
    }
  `]
})
export class ThreejsModelComponent implements OnInit, AfterViewInit, OnDestroy{

  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  renderer!: THREE.WebGLRenderer;
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  mixer!: THREE.AnimationMixer;
  clock = new THREE.Clock();

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setClearColor(0x000000, 0);
  }


  ngOnInit(): void {
    window.addEventListener('resize', () => this.onWindowResize(), false);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    if (this.mixer) {
      const delta = this.clock.getDelta(); // aggiungi un clock se non è già definito
      this.mixer.update(delta);
    }
    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  ngOnDestroy() {
    if (this.renderer) {
      this.rendererContainer.nativeElement.removeChild(this.renderer.domElement);
    }
  }

  ngAfterViewInit(): void {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    this.scene.add(directionalLight);

    // Carica il modello .glb
    const loader = new GLTFLoader();
    loader.load('assets/3dmodel/Farfalla.glb', (gltf) => {
      const model = gltf.scene;

      // Imposta le dimensioni del modello (ad esempio, scala il modello a metà delle sue dimensioni originali)
      const scale = 0.3;
      model.scale.set(scale, scale, scale);

      // Imposta la posizione del modello (ad esempio, sollevalo di 1 unità lungo l'asse y)
      model.position.set(-4, 0.25, 0);

      // Imposta la rotazione del modello (ad esempio, ruota di 45 gradi attorno all'asse y)
      const rotationX = THREE.MathUtils.degToRad(0);
      const rotationY = THREE.MathUtils.degToRad(55);
      const rotationZ = THREE.MathUtils.degToRad(10);
      model.rotation.set(rotationX, rotationY, rotationZ);

      //////////////////////////////////
      this.scene.add(model);
      this.mixer = new THREE.AnimationMixer(model);

      // Se il modello ha animazioni, le riproduce
      if (gltf.animations && gltf.animations.length) {
        gltf.animations.forEach((clip) => {
          this.mixer.clipAction(clip).play();
        });
      }

      // Aggiorna il rendering
      this.renderer.render(this.scene, this.camera);

    });

    this.camera.position.z = 5;

    this.animate();
  }

}
