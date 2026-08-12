// Configuración de WhatsApp
const WHATSAPP_NUMBER = '59157373076'; // Número boliviano: +591 57373076

// Función para generar enlace de WhatsApp
function generateWhatsAppLink(message) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

// Función para manejar selección de sabor
function handleFlavorSelection(modelName, flavor) {
    const message = `Hola, quiero pedir el ${modelName} sabor ${flavor} de Megatrade Vapes. ¿Me podrías dar más información?`;
    const whatsappLink = generateWhatsAppLink(message);
    window.open(whatsappLink, '_blank');
    
    // Cerrar modal
    document.getElementById('flavor-modal').classList.remove('active');
}

// Función para manejar clic en botones de pedido
function handleOrderClick(modelName) {
    const message = `Hola, estoy interesado en el ${modelName} de Megatrade Vapes. ¿Me podrías dar más información?`;
    const whatsappLink = generateWhatsAppLink(message);
    window.open(whatsappLink, '_blank');
}

// Función para manejar clic en botón de contacto general
function handleContactClick() {
    const message = 'Hola, vi el catálogo de Megatrade Vapes y me gustaría obtener más información.';
    const whatsappLink = generateWhatsAppLink(message);
    window.open(whatsappLink, '_blank');
}

// Inicializar eventos cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script cargado correctamente');

    // Configurar botones de sabores principales
    const showFlavorButtons = document.querySelectorAll('.show-flavors');
    const modal = document.getElementById('flavor-modal');
    const closeModal = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalProduct = document.getElementById('modal-product');
    const flavorGrid = document.getElementById('flavor-grid');

    console.log('Botones de sabores encontrados:', showFlavorButtons.length);
    console.log('Modal encontrado:', modal !== null);
    console.log('Modal title encontrado:', modalTitle !== null);
    console.log('Modal product encontrado:', modalProduct !== null);
    console.log('Flavor grid encontrado:', flavorGrid !== null);

    if (!modal || !modalTitle || !modalProduct || !flavorGrid) {
        console.error('Error: No se encontraron todos los elementos del modal');
        return;
    }

    let currentProduct = '';

    showFlavorButtons.forEach((button, index) => {
        console.log(`Configurando botón ${index}:`, button.getAttribute('data-model'));
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Clic en botón de sabores');
            
            try {
                const modelName = this.getAttribute('data-model');
                const flavors = JSON.parse(this.getAttribute('data-flavors'));
                
                console.log('Producto:', modelName);
                console.log('Sabores:', flavors);
                
                currentProduct = modelName;
                modalTitle.textContent = 'Selecciona tu Sabor';
                modalProduct.textContent = modelName;
                
                // Limpiar grid anterior
                flavorGrid.innerHTML = '';
                
                // Crear botones de sabores
                flavors.forEach(flavor => {
                    const flavorBtn = document.createElement('button');
                    flavorBtn.className = 'flavor-btn';
                    flavorBtn.innerHTML = `
                        <i class="fas fa-ice-cream"></i>
                        <span>${flavor}</span>
                    `;
                    flavorBtn.addEventListener('click', function() {
                        handleFlavorSelection(modelName, flavor);
                    });
                    flavorGrid.appendChild(flavorBtn);
                });
                
                // Mostrar modal
                console.log('Mostrando modal...');
                modal.classList.add('active');
                console.log('Modal activo:', modal.classList.contains('active'));
                
            } catch (error) {
                console.error('Error al procesar sabores:', error);
            }
        });
    });

    // Cerrar modal
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });

    // Configurar botones de pedido de cada vape (si quedan algunos)
    const orderButtons = document.querySelectorAll('.order-btn:not(.flavor-btn)');
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modelName = this.getAttribute('data-model');
            handleOrderClick(modelName);
        });
    });

    // Configurar botón de contacto principal
    const contactButton = document.getElementById('whatsapp-contact');
    if (contactButton) {
        contactButton.addEventListener('click', function(e) {
            e.preventDefault();
            handleContactClick();
        });
    }

    // Configurar botón flotante de WhatsApp
    const floatButton = document.getElementById('whatsapp-float');
    if (floatButton) {
        floatButton.addEventListener('click', function(e) {
            e.preventDefault();
            handleContactClick();
        });
    }

    // Smooth scroll para navegación
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animación de aparición al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar todas las tarjetas de vape
    const vapeCards = document.querySelectorAll('.vape-card');
    vapeCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Efecto hover en tarjetas
    vapeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Header sticky con cambio de estilo al hacer scroll
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });

    // Validación de número de WhatsApp (opcional)
    function validateWhatsAppNumber(number) {
        // Eliminar caracteres no numéricos
        const cleanNumber = number.replace(/\D/g, '');
        
        // Verificar que tenga entre 10 y 15 dígitos
        if (cleanNumber.length < 10 || cleanNumber.length > 15) {
            console.warn('El número de WhatsApp debe tener entre 10 y 15 dígitos');
            return false;
        }
        
        return true;
    }

    // Verificar que el número de WhatsApp esté configurado
    if (!validateWhatsAppNumber(WHATSAPP_NUMBER) || WHATSAPP_NUMBER === '521234567890') {
        console.warn('⚠️ Por favor, configura tu número de WhatsApp en el archivo script.js');
        console.warn('Cambia la constante WHATSAPP_NUMBER por tu número real');
    }
});

// Función para prevenir el comportamiento por defecto en enlaces vacíos
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
        e.preventDefault();
    }
});