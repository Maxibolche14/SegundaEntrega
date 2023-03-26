import { Component, OnInit } from '@angular/core';
import { Persona } from '/Angular/SegundaEntrega/src/app/component/models/persona';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  listaNombres : Array<Persona> = [
  {nombre:'Maxi',edad: 32},
  {nombre:'Vane',edad: 25},
  {nombre:'Maria Paz',edad: 0.9},
  {nombre:'Luciano',edad: 20},
  {nombre:'Gaston',edad: 28},
  {nombre:'Juan Pablo',edad: 5},
];

fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
