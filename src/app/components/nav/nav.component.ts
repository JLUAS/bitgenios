import { Component, Input, OnInit, HostListener, Inject, PLATFORM_ID, ElementRef, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit{
  isMenuOpen: boolean = false;
  slides: any[] = [];
  currentSlideIndex: number = 0;
  previousSlideIndex: number | null = null; // Guarda el índice anterior
  isChanging: boolean = false;
  isInicio: boolean = true;
  isInicioMin: boolean = true;

  private x = 0; // Posición actual del gradiente en X
  private y = 0; // Posición actual del gradiente en Y
  private targetX = 0; // Posición destino en X
  private targetY = 0; // Posición destino en Y
  private animationFrame: number | null = null;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object, private elRef: ElementRef) {}

  // ngAfterViewInit() {
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

  //   const background2 = this.elRef.nativeElement.querySelector('.background2') as HTMLElement;

  //   // Actualizamos el fondo con el gradiente centrado en las coordenadas correctas
  //   if (background) {
  //     background.style.background = `radial-gradient(circle at ${this.x}px ${this.y}px, #ff4500 10px, transparent 20px),rgb(28,29,29)`;

  //   }
  //   if (background2) {
  //     background2.style.background = `rgb(28,29,29)`;

  //   }

  //   // Continuamos la animación
  //   this.animationFrame = requestAnimationFrame(() => this.animate());
  // }

  // ngOnDestroy() {
  //   if (this.animationFrame) {
  //     cancelAnimationFrame(this.animationFrame);
  //   }
  // }


  ngOnInit(): void {
    this.slides = [
      {
        id: 0,
        src: '../../../assets/slider1.jpg',
        title: 'En ',
        bold:'BITGENIOS',
        title2:' transformamos tus procesos e impulsamos tu negocio',
        subtitle:
          'Nos dedicamos a proporcionar herramientas y soluciones tecnológicas integrales diseñadas para satisfacer las necesidades específicas de cada empresa. A través del uso de tecnología web de vanguardia, ayudamos a optimizar sus procesos internos, mejorar su productividad y alcanzar sus objetivos estratégicos. Nuestra misión es convertirnos en el aliado tecnológico que impulsa el crecimiento y la innovación en cada organización.',
        button: 'Conoce más de BITGENIOS',
        link: '/acerca',
      },
      {
        id: 1,
        src: '../../../assets/slider2.jpg',
        title: 'Soluciones ',
        bold:'personalizadas',
        title2:' para impulsar tu negocio',
        subtitle:
          'Descubre nuestros servicios de desarrollo de software a medida, diseñados para optimizar tus procesos y acelerar tu crecimiento. Desde sistemas internos hasta plataformas digitales, nuestra experiencia se adapta a tus necesidades específicas.',
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
          'Aprende cómo nuestra metodología basada en prácticas ágiles asegura una entrega puntual, flexible y de alta calidad. Colaboramos contigo en cada etapa del proyecto para garantizar el éxito de tus objetivos tecnológicos.',
        button: 'Conoce nuestra metodología',
        link: '/metodologia',
      },
    ];
    this.checkRouteAndSize();
    this.router.events.subscribe(() => {
      this.checkRouteAndSize();
    });
  }

  @HostListener('window:resize', [])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkRouteAndSize();
    }
  }

  private checkRouteAndSize(): void {
    if (isPlatformBrowser(this.platformId)) {
      const currentUrl = this.router.url;
      const isSmallScreen = window.innerWidth < 640;
      console.log("URL: ",currentUrl)
      this.isInicioMin = (currentUrl === '/inicio' || currentUrl === '') && isSmallScreen;
      this.isInicio = (currentUrl === '/inicio' || currentUrl === '') && !isSmallScreen;
    }
  }

  navigate(direction: 'left' | 'right'): void {
    if (this.isChanging) return;

    this.isChanging = true;
    this.previousSlideIndex = this.currentSlideIndex;

    if (direction === 'left') {
      this.currentSlideIndex =
        this.currentSlideIndex === 0 ? this.slides.length - 1 : this.currentSlideIndex - 1;
    } else {
      this.currentSlideIndex =
        this.currentSlideIndex === this.slides.length - 1 ? 0 : this.currentSlideIndex + 1;
    }

    setTimeout(() => {
      this.isChanging = false;
    }, 500); // Ajusta este valor según la duración de la animación CSS
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
    window.location.reload();
  }
  reload(){
    window.location.reload();
  }
}


// xufi ofky hnti nsrp
