// ==================== SPLASH SCREEN ANIMATION ====================
document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splashScreen');
    const mainContent = document.getElementById('mainContent');

    // Hide splash screen after 4 seconds
    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 4000);
});

// ==================== NAVBAR FUNCTIONALITY ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
});

// Close mobile menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.display = 'none';
        hamburger.classList.remove('active');
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        link.classList.add('active');
    });
});

// Update active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== FORM HANDLING ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validasi
        if (!name || !email || !message) {
            alert('Silakan isi semua field!');
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Format email tidak valid!');
            return;
        }

        // Simulasi pengiriman (dalam praktik nyata, kirim ke backend)
        console.log({
            name: name,
            email: email,
            message: message,
            timestamp: new Date()
        });

        // Tampilkan pesan sukses
        alert(`Terima kasih ${name}! Pesan Anda telah dikirim. Saya akan merespon segera.`);
        
        // Reset form
        contactForm.reset();
    });
}

// ==================== SMOOTH SCROLL ANIMATION ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==================== INTERSECTION OBSERVER UNTUK ANIMASI ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeInUp 0.8s ease-out forwards`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe semua project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// ==================== CV DOWNLOAD ====================
document.querySelector('.cv-button').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Buat link download
    const link = document.createElement('a');
    // Ganti dengan path file CV Anda
    link.href = '#'; // URL CV
    link.download = 'CV_Hanif.pdf';
    
    // Alternatif: buka di tab baru
    alert('File CV akan diunduh. (Setup path file di kode untuk menjalankan unduhan sebenarnya)');
    
    // Untuk testing, bisa buka di tab baru:
    // window.open('#', '_blank');
});

// ==================== PARALLAX EFFECT ====================
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.profile-img');
    
    parallaxElements.forEach(element => {
        element.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });
});

// ==================== DARK MODE TOGGLE (OPSIONAL) ====================
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
};

// Check localStorage untuk dark mode
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ==================== TYPING EFFECT (OPSIONAL) ====================
function typeWriter(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';
    
    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    };
    
    type();
}

// ==================== COUNTER ANIMATION (JIKA DIPERLUKAN) ====================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ==================== LOAD MORE PROJECTS (OPSIONAL) ====================
let projectsCount = 3;
const loadMoreBtn = document.querySelector('.load-more');

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
        // Tambah project lebih banyak
        projectsCount += 3;
        console.log(`Loaded ${projectsCount} projects`);
        alert(`Sudah menampilkan ${projectsCount} projects`);
    });
}

// ==================== SEND MESSAGE DENGAN EMAIL (OPSIONAL) ====================
async function sendEmailMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Gunakan service seperti EmailJS untuk mengirim email
    // Contoh: https://www.emailjs.com/
    
    try {
        // Contoh pengiriman dengan fetch
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        });

        if (response.ok) {
            alert('Email berhasil dikirim!');
        } else {
            alert('Gagal mengirim email.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// ==================== SCROLL TO TOP BUTTON ====================
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    background: linear-gradient(135deg, #6366f1, #ec4899);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    font-size: 1.5rem;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
        scrollToTopBtn.style.justifyContent = 'center';
        scrollToTopBtn.style.alignItems = 'center';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== ADD TO STYLESHEET ====================
const style = document.createElement('style');
style.textContent = `
    .scroll-to-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(99, 102, 241, 0.5);
    }
`;
document.head.appendChild(style);

console.log('Portfolio website loaded successfully!');
