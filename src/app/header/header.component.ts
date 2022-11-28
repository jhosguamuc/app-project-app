import { Component, EventEmitter, Output } from '@angular/core';
import { Constantes } from 'src/app/constantes.globales'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ConstantesGlobales: Constantes = new Constantes();
  @Output() featureSelected:EventEmitter<string> = new EventEmitter<string>()


  onSelect(feature:string) {
  this.featureSelected.emit(feature);
}

}
