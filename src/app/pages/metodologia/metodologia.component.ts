import { Component } from '@angular/core';

@Component({
  selector: 'app-metodologia',
  templateUrl: './metodologia.component.html',
  styleUrl: './metodologia.component.css'
})
export class MetodologiaComponent {
  metodologia = {nombre:'devOps' }
  change(nombre:string){
    if(nombre == 'devOps') this.metodologia.nombre='devOps'
    if(nombre == 'agile') this.metodologia.nombre='agile'
    if(nombre == 'scrum') this.metodologia.nombre='scrum'
  }
}
