import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';
import { LineCoord } from "../models/lineCoord";

@Component({
  selector: 'app-line-shape',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      id="line-container"
      #svg
      [ngStyle]="canvasSetupSettings">
    </svg>
  `,
  styles: [`
    #line-container {
      position: absolute;
      /*background-color: deeppink;
      opacity: .4;*/
    }
  `]
})
export class LineShapeComponent implements OnInit, AfterViewInit {

  @Input() canvasSetupSettings: {[key: string]: string} = {};
  @Input() lineCoordinates: LineCoord | null = null;

  @ViewChild('svg') private svgRef!: ElementRef<SVGElement>;



  ngOnInit(): void {

  }

  private drawWhiteLine(): void {
    const svg = d3.select(this.svgRef.nativeElement);
    const width = this.svgRef.nativeElement.clientWidth;
    const height = this.svgRef.nativeElement.clientHeight;

    if (this.lineCoordinates) {
      const firstSegmentStartX: string | number = this.lineCoordinates.startL1X; // quando ho left
      const firstSegmentStartY: string | number = this.lineCoordinates.startL1Y; // quando ho left
      const firstSegmentEndX: string | number = this.lineCoordinates.endL1X;
      const firstSegmentEndY: string | number = this.lineCoordinates.endL1Y;
      const secondSegmentStartX: string | number = firstSegmentEndX;
      const secondSegmentStartY: string | number = firstSegmentEndY;
      const secondSegmentEndX: string | number = this.lineCoordinates.endL2X;
      const secondSegmentEndY: string | number = this.lineCoordinates.endL2Y;
      // Assumendo che tu voglia la linea nella parte inferiore del contenitore SVG
      const lineY = 0; // 10 è un esempio, metti la distanza dal fondo che preferisci

      svg.append('line') // Aggiungi un elemento linea
        .style('stroke', 'white') // Imposta il colore della linea su bianco
        .style('stroke-width', 2) // Imposta la larghezza della linea
        .attr('x1', firstSegmentStartX) // Inizio della linea sull'asse X
        .attr('y1', firstSegmentStartY) // Inizio della linea sull'asse Y
        .attr('x2', firstSegmentEndX) // Fine della linea sull'asse X
        .attr('y2', firstSegmentEndY) // Fine della linea sull'asse Y

      svg.append('line')
        .style('stroke', 'white') // Imposta il colore della linea su bianco
        .style('stroke-width', 2) // Imposta la larghezza della linea
        .attr('x1', secondSegmentStartX) // Inizio della linea sull'asse X
        .attr('y1', secondSegmentStartY) // Inizio della linea sull'asse Y
        .attr('x2', secondSegmentEndX) // Fine della linea sull'asse X
        .attr('y2', secondSegmentEndY) // Fine della linea sull'asse Y
    }



  }

  ngAfterViewInit(): void {
    this.drawWhiteLine();
  }
}
