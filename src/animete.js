const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // Lista de elementos y clases asociadas
    const elements = [
      { selector: '.contador1h', className: 'contador1' },
      { selector: '.contador2h', className: 'contador2' },
      { selector: '.contador3h', className: 'contador3' }
    ];

    elements.forEach(({ selector, className }) => {
      const element = entry.target.querySelector(selector);
      if (!element) return; // Evita errores si el elemento no existe

      // Añade o elimina clases según la intersección
      entry.isIntersecting
        ? element.classList.add(className)
        : element.classList.remove(className);
    });
  });
},{
  root: null, // Usa el viewport por defecto
  threshold: 0.1 // Se activa cuando al menos el 10% del elemento está visible
});

// Observa el contenedor principal
const targetElement = document.querySelector('.counter');
if (targetElement) observer4.observe(targetElement);


const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.slideInSub');

    if (entry.isIntersecting) {
      square.classList.add('imgIn');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('imgIn');
  });
});

observer2.observe(document.querySelector('.slideInDiv'));

const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.slideInSub2');

    if (entry.isIntersecting) {
      square.classList.add('imgIn');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('imgIn');
  });
});

observer5.observe(document.querySelector('.slideInDiv2'));

// animaciones de rotacion
function configureRotation(selector, isClockwise) {
  const element = document.querySelector(`${selector} > img`);
  if (!element) return; // Verifica si el elemento existe

  let startTime = 0;

  element.addEventListener("mouseenter", () => {
    element.style.animationPlayState = "running";
    startTime = performance.now();
  });

  element.addEventListener("mouseleave", () => {
    element.style.animationPlayState = "paused";
    const elapsedTime = (performance.now() - startTime) % 2000; // Tiempo transcurrido
    const rotationProgress = (elapsedTime / 2000) * (isClockwise ? 360 : -360);
    element.style.transform = `rotate(${rotationProgress}deg)`; // Aplica ángulo actual
  });
}

// Configuración para las imágenes
configureRotation(".rotateHover", true); // Horario
configureRotation(".rotateHover2", false); // Antihorario
configureRotation(".rotateHover3", true); // Horario

