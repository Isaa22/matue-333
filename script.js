// Menu Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Efeito de scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header com efeito de transparência ao scrollar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
    } else {
        header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
    }
});

// Animação de contador para estatísticas (exemplo)
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if(start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

// Ativar contadores quando a seção estiver visível
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // Aqui você pode adicionar animações quando as seções ficarem visíveis
            console.log(`${entry.target.id} está visível`);
        }
    });
}, observerOptions);

// Observar todas as seções
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Simulação de player de música
document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const songItem = this.closest('.song-item');
        const songName = songItem.querySelector('h4').textContent;
        
        // Aqui você pode adicionar a lógica para tocar a música
        alert(`Tocando: ${songName}`);
        
        // Alternar ícone de play/pause
        const icon = this.querySelector('i');
        if(icon.classList.contains('fa-play')) {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        } else {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    });
});

// Efeito de digitação no hero
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Iniciar efeito de digitação quando a página carregar
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.textContent;
    
    // Apenas para demonstração, você pode ativar isso se quiser
    // typeWriter(heroTitle, originalText, 150);
});

// Galeria de imagens (para futuras expansões)
function initImageGallery() {
    // Esta função pode ser expandida para criar uma galeria de imagens
    console.log('Galeria de imagens inicializada');
}

// Inicializar galeria quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initImageGallery);

// Formulário de newsletter (para futuras expansões)
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Aqui você pode adicionar a lógica para enviar o email
    alert(`Obrigado por se inscrever com: ${email}`);
    e.target.reset();
}

// Adicionar evento de submit se houver um formulário de newsletter
const newsletterForm = document.querySelector('.newsletter-form');
if(newsletterForm) {
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
}

// Efeito de parallax no hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * 0.5;
    
    hero.style.transform = `translateY(${rate}px)`;
});

// Modal para imagens (para futuras expansões)
function initImageModal() {
    const images = document.querySelectorAll('.gallery-img');
    
    images.forEach(img => {
        img.addEventListener('click', function() {
            // Criar modal
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${this.src}" alt="${this.alt}">
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Fechar modal
            const closeBtn = modal.querySelector('.close');
            closeBtn.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
            
            modal.addEventListener('click', (e) => {
                if(e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
        });
    });
}

// Inicializar modal de imagens se houver galeria
const galleryImages = document.querySelectorAll('.gallery-img');
if(galleryImages.length > 0) {
    initImageModal();
}

// Atualizar ano no footer
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.querySelector('.current-year');
    if(yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
