// ==================== INTRO TRANSITION CONTROL ====================
window.addEventListener('load', function() {
    const introOverlay = document.getElementById('introOverlay');
    const body = document.body;
    
    // Prevent scrolling during intro
    body.style.overflow = 'hidden';
    
    // Remove intro and enable scrolling after animation
    setTimeout(() => {
        if (introOverlay) {
            introOverlay.style.display = 'none';
        }
        body.style.overflow = 'auto';
    }, 5000);
});

// ==================== ROTATING MESSAGES ====================
const messages = [
    "Kamu itu cantik banget, tau gak? 💕",
    "Setiap hari makin cantik aja! ✨",
    "Cantiknya bikin jatuh cinta terus 💖",
    "Warning: Kecantikan level maksimal! 🌟",
    "Surgaku ada di tatapanmu 🌹",
    "Kecantikanmu menerangi hidupku 💫",
    "You're absolutely stunning! 👑",
    "Cantik. Selalu cantik. Forever. 💝",
    "Cantikmu nggak ada tandingannya! 🦋",
    "Setiap senyummu adalah keajaiban ✨"
];

let currentMessageIndex = 0;
const rotatingText = document.getElementById('rotatingText');

function rotateMessage() {
    if (!rotatingText) return;
    
    rotatingText.style.opacity = '0';
    rotatingText.style.transform = 'translateY(25px) scale(0.95)';
    
    setTimeout(() => {
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        rotatingText.textContent = messages[currentMessageIndex];
        rotatingText.style.opacity = '1';
        rotatingText.style.transform = 'translateY(0) scale(1)';
    }, 500);
}

// Set transition for smooth text change
if (rotatingText) {
    rotatingText.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
}

// Rotate message every 4.5 seconds
setInterval(rotateMessage, 4500);

// ==================== FLOATING HEARTS ANIMATION ====================
function createHeart() {
    const heartsContainer = document.getElementById('heartsContainer');
    if (!heartsContainer) return;
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Random heart emoji
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    
    // Random horizontal position
    heart.style.left = Math.random() * 100 + '%';
    
    // Random animation duration
    const duration = Math.random() * 5 + 8; // 8-13 seconds
    heart.style.animationDuration = duration + 's';
    
    // Random delay
    heart.style.animationDelay = Math.random() * 3 + 's';
    
    // Random size
    const size = Math.random() * 10 + 20;
    heart.style.fontSize = size + 'px';
    
    heartsContainer.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, (duration + 3) * 1000);
}

// Create hearts periodically
setInterval(createHeart, 1000);

// Create initial hearts
for (let i = 0; i < 8; i++) {
    setTimeout(createHeart, i * 400);
}

// ==================== PHOTO SPARKLE EFFECT ====================
function createSparkles(element) {
    const sparkleEmojis = ['✨', '⭐', '🌟', '💫'];
    
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
            sparkle.style.position = 'absolute';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.fontSize = (Math.random() * 15 + 18) + 'px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '10';
            
            // Add sparkle animation
            sparkle.style.animation = 'sparkleFloat 1.2s ease-out forwards';
            
            element.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1200);
        }, i * 120);
    }
}

// Add sparkle animation CSS dynamically
const styleSparkle = document.createElement('style');
styleSparkle.innerHTML = `
    @keyframes sparkleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: translateY(-40px) scale(1.3) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: translateY(-80px) scale(0.5) rotate(360deg);
        }
    }
`;
document.head.appendChild(styleSparkle);

// Add sparkle effect on photo hover
const photoFrames = document.querySelectorAll('.photo-frame');
photoFrames.forEach(frame => {
    frame.addEventListener('mouseenter', function() {
        createSparkles(this);
    });
});

// ==================== SMOOTH HOVER EFFECTS ====================
const complimentCards = document.querySelectorAll('.compliment-card');
complimentCards.forEach((card, index) => {
    // Stagger entrance animation
    card.style.animation = `slideUpFade 0.8s ease-out ${0.2 * index}s forwards`;
    card.style.opacity = '0';
});

// Add slideUpFade animation
const styleSlide = document.createElement('style');
styleSlide.innerHTML = `
    @keyframes slideUpFade {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(styleSlide);

// ==================== CONSOLE MESSAGE ====================
console.log('%c💖 Website Loaded Successfully! 💖', 'font-size: 20px; color: #ff69b4; font-weight: bold;');
console.log('%cMade with love by HANIF GANTENG ✨', 'font-size: 14px; color: #764ba2;');
