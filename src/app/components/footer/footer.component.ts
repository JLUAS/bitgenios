import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MailService } from '../../services/mail.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent{
  form = {name:'', email:'', message:''}
  message:string = 'Enviar mensaje'
  error:boolean = false

  constructor(private fb: FormBuilder, private http: HttpClient, private mailService: MailService){

  }
  submit(){
    const{name, email, message} = this.form
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    if (this.form.name !== '' && this.form.email !== '' && this.form.message !== '') {
      this.mailService.sendEmail(this.form).subscribe(
        () => {
          alert('Error al enviar el email');
          this.message = "Mensaje no enviado"
          console.error("error");
        },
        err => {
          this.message = "Mensaje enviado"
          window.location.reload()
        }
      );
    } else {
      this.error = true
    }
  }
  reload(){
    window.location.reload()
  }
}
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

