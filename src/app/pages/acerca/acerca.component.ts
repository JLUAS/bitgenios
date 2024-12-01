import { Component} from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.css'
})
export class AcercaComponent{
  valor1:boolean = false
  valor2:boolean = false
  valor3:boolean = false
  valor4:boolean = false
  private x = 0; // Posición actual del gradiente en X
  private y = 0; // Posición actual del gradiente en Y
  private targetX = 0; // Posición destino en X
  private targetY = 0; // Posición destino en Y
  private animationFrame: number | null = null;

  switch(valor: number): void {
    if (valor === 1) this.valor1 = !this.valor1
    if (valor === 2) this.valor2 = !this.valor2
    if (valor === 3) this.valor3 = !this.valor3
    if (valor === 4) this.valor4 = !this.valor4
  }

}
