// ========== SEQUENCE CONTROLLER ========== 
let currentStage = 0;
const stages = [
  'intro',
  'journey-mercury',
  'journey-venus',
  'journey-earth',
  'journey-mars',
  'journey-jupiter',
  'journey-saturn',
  'journey-uranus',
  'meteor-impact',
  'main-website'
];

function showStage(index) {
  document.querySelectorAll('.stage').forEach(stage => {
    stage.classList.remove('active');
  });
  
  const targetStage = document.getElementById(stages[index]);
  if (targetStage) {
    targetStage.classList.add('active');
    currentStage = index;
  }
}

// ========== TOMBOL MASUK: Start Journey ========== 
const btnMasuk = document.getElementById('btnMasuk');
if (btnMasuk) {
  btnMasuk.addEventListener('click', startJourney);
}

function startJourney() {
  showStage(1); // Mulai dari Merkurius
  
  let planetIndex = 1;
  const planetInterval = setInterval(() => {
    planetIndex++;
    if (planetIndex <= 7) {
      showStage(planetIndex);
    } else {
      clearInterval(planetInterval);
      setTimeout(playMeteorImpact, 1500);
    }
  }, 3000); // 3 detik per planet
}

// ========== METEOR IMPACT SEQUENCE ========== 
function playMeteorImpact() {
  showStage(8);
  setTimeout(() => {
    showStage(9);
  }, 3500);
}

// ========== TAHUN DINAMIS ========== 
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// ========== TOGGLE MOBILE NAV ========== 
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
}

// ========== SMOOTH SCROLL & ACTIVE STATE ========== 
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function setActiveLink() {
  let current = 'home';
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = sectionId;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

const mainWebsite = document.getElementById('main-website');
if (mainWebsite) {
  mainWebsite.addEventListener('scroll', setActiveLink);
  window.addEventListener('scroll', setActiveLink);
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navList) {
      navList.classList.remove('show');
    }
  });
});

// ========== FORM CONTACT ========== 
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('Mohon lengkapi semua field!');
      return;
    }

    const body = `Halo Hanif,%0D%0A%0D%0ANama: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0APesan:%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0ATerkirim dari halaman portofolio.`;
    const subject = `Portofolio — Pesan dari ${encodeURIComponent(name || 'Pengunjung')}`;
    const mailto = `mailto:faqihhan123@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  });
}

// ========== DEBUG CONSOLE (OPSIONAL - BISA DIHAPUS) ========== 
console.log('✅ Script loaded successfully!');
console.log('📂 Stages available:', stages);
console.log('🚀 Ready to start journey!');
