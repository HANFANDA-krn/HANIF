// PERBAIKAN TOTAL - Menggunakan metode yang lebih reliable
(function() {
    'use strict';
    
    // Fungsi untuk handle klik tombol MASUK
    function handleEnterButton() {
        const enterButton = document.getElementById('enterButton');
        const loadingScreen = document.getElementById('loadingScreen');
        const mainContent = document.getElementById('mainContent');
        
        if (!enterButton || !loadingScreen || !mainContent) {
            console.error('Error: Elemen tidak ditemukan!');
            return;
        }
        
        enterButton.addEventListener('click', function() {
            console.log('Tombol MASUK diklik!'); // Debug
            
            // Slide out loading screen
            loadingScreen.classList.add('slide-out');
            
            // Tampilkan main content setelah animasi
            setTimeout(function() {
                mainContent.classList.add('active');
                console.log('Main content ditampilkan!'); // Debug
            }, 800); // Sinkron dengan durasi transisi CSS
        });
        
        console.log('Event listener tombol MASUK berhasil ditambahkan!'); // Debug
    }
    
    // Fungsi untuk smooth scrolling navigation
    function setupSmoothScrolling() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active dari semua link
                document.querySelectorAll('.nav-link').forEach(l => {
                    l.classList.remove('active');
                });
                
                // Add active ke link yang diklik
                this.classList.add('active');
                
                // Scroll ke section target
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Fungsi untuk update active nav saat scroll
    function setupScrollSpy() {
        window.addEventListener('scroll', function() {
            let current = '';
            const sections = document.querySelectorAll('.section');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
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
    }
    
    // Fungsi untuk parallax effect
    function setupParallax() {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.home-section');
            
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });
    }
    
    // Inisialisasi semua fungsi setelah DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            console.log('DOM Content Loaded!'); // Debug
            handleEnterButton();
            setupSmoothScrolling();
            setupScrollSpy();
            setupParallax();
        });
    } else {
        // DOM sudah ready
        console.log('DOM sudah ready!'); // Debug
        handleEnterButton();
        setupSmoothScrolling();
        setupScrollSpy();
        setupParallax();
    }
    
})();

// Fungsi global untuk download CV
function downloadCV(e) {
    e.preventDefault();
    alert('Terima kasih atas ketertarikan Anda!
Untuk mendapatkan CV lengkap, silakan hubungi saya melalui:
Email: faqihhan123@gmail.com
WhatsApp: 0878 4870 7273
Saya siap berdiskusi lebih lanjut mengenai peluang kerja yang tersedia.');
}

// Fungsi global untuk send message
function sendMessage(e) {
    e.preventDefault();
    
    const form = e.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    
    alert(`Terima kasih ${name}!
Pesan Anda telah diterima.
Saya akan segera menghubungi Anda melalui ${email} untuk diskusi lebih lanjut.
Salam,
Hanif`);
    
    form.reset();
}
