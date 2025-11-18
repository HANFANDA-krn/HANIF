// Splash screen timing and transition
window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  const mainSite = document.getElementById('main-site');

  // Show splash 3 sec, then fade out and show main
  setTimeout(() => {
    splash.style.transition = "opacity 0.8s ease";
    splash.style.opacity = 0;

    setTimeout(() => {
      splash.style.display = "none";
      mainSite.classList.remove('hidden');
    }, 900);
  }, 3000);
});

// Navigation scroll smooth and active highlight
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

/* --- 3D Profile Card Drag Rotation --- */
const card = document.querySelector('#profile-card .card-inner');
let isDragging = false;
let startX, startY;
let currentX = 0, currentY = 0;

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

card.style.transform = `rotateX(0deg) rotateY(0deg)`;

card.parentElement.addEventListener('pointerdown', (e) => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  card.style.transition = 'none';
  card.parentElement.style.cursor = 'grabbing';
  e.preventDefault();
});

window.addEventListener('pointerup', (e) => {
  if(isDragging) {
    isDragging = false;
    card.style.transition = 'transform 0.5s ease-out';
    card.parentElement.style.cursor = 'grab';
  }
});

window.addEventListener('pointermove', (e) => {
  if(!isDragging) return;

  const deltaX = e.clientX - startX;
  const deltaY = e.clientY - startY;

  currentX += deltaY * 0.5; // sensitivity vertical to rotateX
  currentY += deltaX * 0.5; // sensitivity horizontal to rotateY

  currentX = clamp(currentX, -90, 90); // limit vertical rotation

  card.style.transform = `rotateX(${-currentX}deg) rotateY(${currentY}deg)`;
  
  startX = e.clientX;
  startY = e.clientY;
});
