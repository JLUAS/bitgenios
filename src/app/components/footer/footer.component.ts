import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent{

  // private x = 0; // Posición actual del gradiente en X
  // private y = 0; // Posición actual del gradiente en Y
  // private targetX = 0; // Posición destino en X
  // private targetY = 0; // Posición destino en Y
  // private animationFrame: number | null = null;

  // constructor( private elRef: ElementRef) {}

  //() {
  //   this.animate();
  // }

  // @HostListener('mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   const container = this.elRef.nativeElement.querySelector('.background') as HTMLElement;

  //   if (container) {
  //     const rect = container.getBoundingClientRect(); // Obtener dimensiones y posición del contenedor
  //     this.targetX = event.clientX - rect.left; // Coordenada X relativa al contenedor
  //     this.targetY = event.clientY - rect.top; // Coordenada Y relativa al contenedor
  //   }
  // }

  // animate() {
  //   const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

  //   // Suavizamos las coordenadas
  //   this.x = lerp(this.x, this.targetX, 0.1);
  //   this.y = lerp(this.y, this.targetY, 0.1);

  //   const background = this.elRef.nativeElement.querySelector('.background') as HTMLElement;

  //   // Actualizamos el fondo con el gradiente centrado en las coordenadas correctas
  //   if (background) {
  //     background.style.background = `radial-gradient(circle at ${this.x}px ${this.y}px, #ff4500 10px, transparent 20px),rgb(28,29,29)`;

  //   }

  //   // Continuamos la animación
  //   this.animationFrame = requestAnimationFrame(() => this.animate());
  // }

  // ngOnDestroy() {
  //   if (this.animationFrame) {
  //     cancelAnimationFrame(this.animationFrame);
  //   }
  // }
  reload(){
    window.location.reload()
  }
}
