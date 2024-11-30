import { Component, OnInit, Input, AfterViewInit, ElementRef, ViewEncapsulation  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ReloadService } from '../../services/reload.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InicioComponent implements OnInit {
  slides: any[] = [];
  currentSlideIndex: number = 0;
  previousSlideIndex: number | null = null; // Guarda el índice anterior
  isChanging: boolean = false;
  reloading:boolean = true
  constructor(private elementRef: ElementRef, private router: Router, private reloadService: ReloadService){}
  ngOnInit(): void {
    this.slides = [
      {
        id: 0,
        src: '../../../assets/slider1.jpg',
        title: 'En BITGENIOS transformamos tus procesos e impulsamos tu negocio.',
        subtitle:
          'Nos dedicamos a proporcionar herramientas y soluciones tecnológicas integrales diseñadas para satisfacer las necesidades específicas de cada empresa. A través del uso de tecnología web de vanguardia, ayudamos a optimizar sus procesos internos, mejorar su productividad y alcanzar sus objetivos estratégicos. Nuestra misión es convertirnos en el aliado tecnológico que impulsa el crecimiento y la innovación en cada organización.',
        button: 'Conoce más de BITGENIOS',
        link: '/acerca',
      },
      {
        id: 1,
        src: '../../../assets/slider2.jpg',
        title: 'Soluciones personalizadas para impulsar tu negocio',
        subtitle:
          'Descubre nuestros servicios de desarrollo de software a medida, diseñados para optimizar tus procesos y acelerar tu crecimiento. Desde sistemas internos hasta plataformas digitales, nuestra experiencia se adapta a tus necesidades específicas.',
        button: 'Explora nuestros servicios',
        link: '/servicios',
      },
      {
        id: 2,
        src: '../../../assets/slider3.jpeg',
        title: 'Metodologías Ágiles para proyectos eficientes',
        subtitle:
          'Aprende cómo nuestra metodología basada en prácticas ágiles asegura una entrega puntual, flexible y de alta calidad. Colaboramos contigo en cada etapa del proyecto para garantizar el éxito de tus objetivos tecnológicos.',
        button: 'Conoce nuestra metodología',
        link: '/metodologia',
      },
    ];
    if(this.reloading === true){
      this.reloadComponent
    }
    this.reloading = false
  }
   // Función para recargar el componente actual
   reloadComponent() {
    window.location.reload()
  }
  navigate(direction: 'left' | 'right'): void {
    if (this.isChanging) return;

    this.isChanging = true;
    this.previousSlideIndex = this.currentSlideIndex;

    // Calcula el siguiente índice según la dirección
    if (direction === 'left') {
      this.currentSlideIndex =
        this.currentSlideIndex === 0 ? this.slides.length - 1 : this.currentSlideIndex - 1;
    } else {
      this.currentSlideIndex =
        this.currentSlideIndex === this.slides.length - 1 ? 0 : this.currentSlideIndex + 1;
    }

    // Simula la duración de la animación
    setTimeout(() => {
      this.isChanging = false;
    }, 500); // Ajusta este valor según la duración de la animación CSS
  }
  images: string[] = ['../../../assets/guadalupe.png','../../../assets/nubaj.png','../../../assets/oxxoLogo.png','../../../assets/divinataLogo.png',
    '../../../assets/pabellonM.png','../../../assets/gant.jpg','../../../assets/agroalimLogo.png','../../../assets/antad.png',
    '../../../assets/moldeatLogo.png','../../../assets/inovamedikLogo.png','../../../assets/shower-walls2.png'
  ]
  @Input() itemsToShow: number = 3; // Default to showing 3 items at a time
  currentIndex: number = 0;

  get maxIndex(): number {
    return Math.max(0, this.images.length - this.itemsToShow);
  }

  nextSlide(): void {
    this.currentIndex = Math.min(this.currentIndex + 1, this.maxIndex);
  }

  prevSlide(): void {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
  }
  getSlideClass(index: number): string {
    if (index === this.currentSlideIndex) {
      return 'imgIn sm:absolute sm:inset-0 h-96 w-full sm:w-[60%] object-cover opacity-80 z-0'; // Animación de entrada
    } else if (index === this.previousSlideIndex) {
      return 'imgOut'; // Animación de salida
    } else {
      return ''; // Sin animación
    }
  }
}
