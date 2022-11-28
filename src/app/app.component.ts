import { Component } from '@angular/core';
import { Constantes } from './constantes.globales';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ConstantesGlobales: Constantes = new Constantes();
  loadedFeature = "";

  constructor() {
    this.loadedFeature = this.ConstantesGlobales.typeFeacture_recipes; 
  }


  onNavigate(feature:string) {
    this.loadedFeature = feature;
  }
}
