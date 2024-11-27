const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.contadorH');

    if (entry.isIntersecting) {
      square.classList.add('contador1');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('contador1');
  });
});

observer.observe(document.querySelector('.slideInSub'));

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.contador2H');

    if (entry.isIntersecting) {
      square.classList.add('contador2');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('contador2');
  });
});

observer3.observe(document.querySelector('.slideInSub'));

const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.contador3H');

    if (entry.isIntersecting) {
      square.classList.add('contador3');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('contador3');
  });
});

observer4.observe(document.querySelector('.slideInSub'));

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


const observer6 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.slideInSub3');
    const square2 = entry.target.querySelector('.slideInSub4');
    const square3 = entry.target.querySelector('.slideInSub5');

    if (entry.isIntersecting) {
      square.classList.add('rotate');
      square2.classList.add('rotate');
      square3.classList.add('rotate');

      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('rotate');
    square2.classList.remove('rotate');
    square3.classList.remove('rotate');
  });
});

observer6.observe(document.querySelector('.slideInDiv3'));



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

