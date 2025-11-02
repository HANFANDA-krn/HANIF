// ========== TOMBOL MASUK: Skip intro langsung ke website ==========
const btnMasuk = document.getElementById('btnMasuk');
if (btnMasuk) {
  btnMasuk.addEventListener('click', () => {
    document.body.classList.add('page-ready');
  });
}

// ========== INTRO: Auto hide setelah animasi ==========
window.addEventListener('load', () => {
  // Auto masuk setelah 3 detik (atau klik tombol MASUK)
  setTimeout(() => {
    if (!document.body.classList.contains('page-ready')) {
      document.body.classList.add('page-ready');
    }
  }, 3000); // 3 detik
});

// ========== TAHUN DINAMIS ==========
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ========== TOGGLE MOBILE NAV ==========
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (navToggle) {
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

window.addEventListener('scroll', setActiveLink);

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navList) navList.classList.remove('show');
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

    const body = `Halo Hanif,%0D%0A%0D%0ANama: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0APesan:%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0ATerkirim dari halaman portofolio.`;
    const subject = `Portofolio — Pesan dari ${encodeURIComponent(name || 'Pengunjung')}`;
    const mailto = `mailto:faqihhan123@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  });
}
