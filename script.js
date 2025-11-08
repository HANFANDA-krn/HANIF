// Loading Screen Animation
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('mainContent').classList.add('active');
    }, 3000);
});

// Smooth Scrolling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.remove('active');
        });
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Get target section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Smooth scroll to section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Change active nav on scroll
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Download CV Function
function downloadCV(e) {
    e.preventDefault();
    alert('Terima kasih atas ketertarikan Anda!
Untuk mendapatkan CV lengkap, silakan hubungi saya melalui:
Email: faqihhan123@gmail.com
WhatsApp: 0878 4870 7273
Saya siap berdiskusi lebih lanjut mengenai peluang kerja yang tersedia.');
}

// Send Message Function
function sendMessage(e) {
    e.preventDefault();
    
    const form = e.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // Simulate sending message
    alert(`Terima kasih ${name}!
Pesan Anda telah diterima.
Saya akan segera menghubungi Anda melalui ${email} untuk diskusi lebih lanjut.
Salam,
Hanif`);
    
    // Reset form
    form.reset();
}

// Parallax Effect on Scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.home-section');
    
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add animation to skills on scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease';
    observer.observe(item);
});

// Animate motivation items
document.querySelectorAll('.motivation-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'all 0.6s ease';
    observer.observe(item);
});
