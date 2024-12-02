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
        src: '../../../assets/slider1.webp',
        title: 'En ',
        bold:'BITGENIOS',
        title2:' transformamos tus procesos e impulsamos tu negocio',
        subtitle:
          'Proveemos soluciones tecnológicas personalizadas para optimizar procesos, mejorar productividad y alcanzar objetivos estratégicos, actuando como aliados en el crecimiento e innovación de las empresas.',
        button: 'Conoce más de BITGENIOS',
        link: '/acerca',
      },
      {
        id: 1,
        src: '../../../assets/slider2.webp',
        title: 'Soluciones ',
        bold:'personalizadas',
        title2:' para impulsar tu negocio',
        subtitle:
          'Ofrecemos desarrollo de software a medida para optimizar procesos y acelerar el crecimiento, adaptándonos a tus necesidades con sistemas internos y plataformas digitales.',
        button: 'Explora nuestros servicios',
        link: '/servicios',
      },
      {
        id: 2,
        src: '../../../assets/slider3.jpeg',
        title: 'Metodologías',
        bold:'Ágiles',
        title2:' para proyectos eficientes',
        subtitle:
          'Nuestra metodología ágil garantiza entregas puntuales, flexibles y de alta calidad, colaborando contigo en cada etapa para asegurar el éxito de tus objetivos tecnológicos.',
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
  images: string[] = ['../../../assets/guadalupe.webp','../../../assets/nubaj.webp','../../../assets/oxxoLogo.webp','../../../assets/divinataLogo.webp',
    '../../../assets/pabellonM.webp','../../../assets/gant.webp','../../../assets/agroalimLogo.webp','../../../assets/antad.webp',
    '../../../assets/moldeatLogo.webp','../../../assets/inovamedikLogo.webp','../../../assets/shower-walls2.webp'
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
