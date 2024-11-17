// Agregar más efectos o animaciones si se desea
document.addEventListener("DOMContentLoaded", () => {
    console.log("¡Página de cumpleaños lista!");
});
document.querySelector(".kuromi-img").addEventListener("mouseover", () => {
  alert("¡Kuromi dice hola! 🖤");
});
const confettiContainer = document.querySelector('.confetti-container');

// Crear múltiples confetis
for (let i = 0; i < 200; i++) {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');

  // Posición aleatoria y colores variados
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`; // Colores aleatorios
  confetti.style.animationDelay = Math.random() * 5 + 's'; // Diferentes tiempos
  confetti.style.animationDuration = 4 + Math.random() * 2 + 's';

  confettiContainer.appendChild(confetti);
}


/* Efecto de rosa en el cursor */
document.addEventListener('mousemove', (e) => {
    let rose = document.querySelector('.cursor-rose');
    if (!rose) {
        rose = document.createElement('div');
        rose.classList.add('cursor-rose');
        document.body.appendChild(rose);
    }
    rose.style.left = `${e.pageX}px`;
    rose.style.top = `${e.pageY}px`;
});
// Selecciona todos los GIFs
const gifs = document.querySelectorAll('.bouncing-gif');

// Genera valores iniciales de posición y velocidad para cada GIF
const gifData = Array.from(gifs).map(gif => ({
    element: gif,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    dx: (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1), // Velocidad en X
    dy: (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1), // Velocidad en Y
}));

// Función de animación
function animateGifs() {
    gifData.forEach(data => {
        const { element, x, y, dx, dy } = data;

        // Actualiza posiciones
        data.x += data.dx;
        data.y += data.dy;

        // Rebote horizontal
        if (data.x <= 0 || data.x + element.offsetWidth >= window.innerWidth) {
            data.dx *= -1; // Cambia dirección
        }

        // Rebote vertical
        if (data.y <= 0 || data.y + element.offsetHeight >= window.innerHeight) {
            data.dy *= -1; // Cambia dirección
        }

        // Aplica las posiciones al estilo del GIF
        element.style.left = `${data.x}px`;
        element.style.top = `${data.y}px`;
    });

    requestAnimationFrame(animateGifs); // Repite la animación
}

// Inicia la animación
animateGifs();
