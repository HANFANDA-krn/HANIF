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
  // Hide all stages
  document.querySelectorAll('.stage').forEach(stage => {
    stage.classList.remove('active');
  });
  
  // Show target stage
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
  // Mulai dari planet pertama (Merkurius)
  showStage(1);
  
  // Auto sequence planet journey
  let planetIndex = 1;
  const planetInterval = setInterval(() => {
    planetIndex++;
    if (planetIndex <= 7) { // Sampai Uranus (index 7)
      showStage(planetIndex);
    } else {
      clearInterval(planetInterval);
      // Setelah semua planet, play meteor impact
      setTimeout(playMeteorImpact, 1500);
    }
  }, 3000); // 3 detik per planet
}

// ========== METEOR IMPACT SEQUENCE ========== 
function playMeteorImpact() {
  showStage(8); // Show meteor impact stage
  
  // Play crack sound setelah 1.2 detik (saat meteor menghantam)
  const crackSound = document.getElementById('crackSound');
  setTimeout(() => {
    if (crackSound) {
      crackSound.play().catch(error => {
        console.log('Audio autoplay blocked:', error);
      });
    }
  }, 1200);
  
  // Setelah semua animasi selesai (3.5 detik), masuk ke website
  setTimeout(() => {
    showStage(9); // Show main website
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

  navLinks.forEach(link
\<Streaming stoppped because the conversation grew too long for this model\>
