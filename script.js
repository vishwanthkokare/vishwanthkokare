// Initialize all animation libraries
gsap.registerPlugin(ScrollTrigger);

// Initialize AOS
AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    offset: 100
});

// Particle.js Configuration
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00ff88"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.3,
            random: false,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 3,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00ff88",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Loading Screen Animation
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    
    gsap.to(loadingScreen, {
        opacity: 0,
        duration: 1,
        delay: 2,
        onComplete: () => {
            loadingScreen.classList.add('hidden');
            loadingScreen.remove();
        }
    });

    // Trigger entrance animations
    gsap.from('.hero h1', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        delay: 2.5,
        ease: "power3.out"
    });

    gsap.from('.hero-badge', {
        scale: 0,
        rotation: 360,
        duration: 1,
        delay: 3,
        ease: "elastic.out(1, 0.5)"
    });
});

// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

// Enhanced Mobile Navigation with GSAP
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    if (navMenu.classList.contains('active')) {
        gsap.from('.nav-menu li', {
            x: -50,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        });
    }
});

// Navbar scroll effect with GSAP
gsap.to(navbar, {
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    backdropFilter: "blur(20px)",
    boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
    duration: 0.3,
    scrollTrigger: {
        trigger: "body",
        start: "100px top",
        end: "bottom bottom",
        toggleActions: "play none none reverse"
    }
});

// Hero Section Animations
gsap.timeline({ delay: 3 })
    .from('.hero-stats .stat', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    })
    .from('.cta-button', {
        scale: 0,
        rotation: 180,
        duration: 0.6,
        ease: "back.out(1.7)"
    })
    .from('.floating-card', {
        scale: 0,
        rotation: 360,
        duration: 1,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)"
    });

// Profile Image Morph Animation
gsap.to('.morphing-image', {
    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "power2.inOut"
});

// Glitch Text Setup
document.querySelectorAll('.glitch-text').forEach(element => {
    element.setAttribute('data-text', element.textContent);
});

// Floating Cards Animation
gsap.to('.floating-card', {
    y: -20,
    duration: 2,
    yoyo: true,
    repeat: -1,
    stagger: 0.5,
    ease: "power2.inOut"
});

// Icon Rotation Animations
gsap.to('.rotating-icon', {
    rotation: 360,
    duration: 3,
    repeat: -1,
    ease: "none"
});

// Pulsing Animations
gsap.to('.pulsing-icon', {
    scale: 1.2,
    duration: 1,
    yoyo: true,
    repeat: -1,
    ease: "power2.inOut"
});

// Service Cards Hover Animations
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -15,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });
        
        gsap.to(card.querySelector('.service-icon'), {
            rotation: 360,
            duration: 0.5,
            ease: "power2.out"
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Portfolio Items Animation
gsap.utils.toArray('.portfolio-item').forEach((item, index) => {
    gsap.fromTo(item, 
        {
            y: 100,
            opacity: 0,
            scale: 0.8
        },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Portfolio Hover Effects
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Testimonials Carousel with GSAP
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            gsap.to(testimonial, {
                scale: 1.05,
                y: -10,
                duration: 0.5,
                ease: "power2.out"
            });
            testimonial.classList.add('active');
        } else {
            gsap.to(testimonial, {
                scale: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            });
            testimonial.classList.remove('active');
        }
    });
}

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 4000);

// Counter Animation with GSAP
function animateCounter(element, target, duration = 2) {
    gsap.to({ val: 0 }, {
        val: target,
        duration: duration,
        ease: "power2.out",
        onUpdate: function() {
            element.textContent = Math.floor(this.targets()[0].val);
        },
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
}

// Initialize counters
document.querySelectorAll('.counter').forEach(counter => {
    const target = parseInt(counter.textContent);
    animateCounter(counter, target);
});

// Form Animations
document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('focus', () => {
        gsap.to(input, {
            scale: 1.02,
            boxShadow: "0 5px 15px rgba(0, 255, 136, 0.3)",
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    input.addEventListener('blur', () => {
        gsap.to(input, {
            scale: 1,
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Button Hover Animations
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.05,
            y: -2,
            duration: 0.2,
            ease: "power2.out"
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            y: 0,
            duration: 0.2,
            ease: "power2.out"
        });
    });
});

// Scroll Animations for Sections
gsap.utils.toArray('section').forEach(section => {
    gsap.fromTo(section.children,
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Text Reveal Animation
gsap.utils.toArray('.text-reveal').forEach(text => {
    gsap.fromTo(text,
        {
            backgroundPosition: "-200% 0"
        },
        {
            backgroundPosition: "200% 0",
            duration: 3,
            repeat: -1,
            ease: "none"
        }
    );
});

// Parallax Effect
gsap.to('.hero-image', {
    y: -50,
    scrollTrigger: {
        trigger: '.hero',
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});

// Mouse Cursor Trail Effect
const cursor = document.createElement('div');
cursor.className = 'cursor-trail';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, rgba(0, 255, 136, 0.8) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1,
        ease: "power2.out"
    });
});

// Interactive Elements Hover Effects
document.querySelectorAll('a, button, .service-card, .portfolio-item').forEach(element => {
    element.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 2,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    element.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Scroll Progress Indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, #00ff88, #00cc6a);
    z-index: 10000;
    transform-origin: left;
    transform: scaleX(0);
`;
document.body.appendChild(progressBar);

gsap.to(progressBar, {
    scaleX: 1,
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
    }
});

// Form Submission with Animation
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Button loading animation
        gsap.to(submitBtn, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
        });
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.textContent = '✓ Sent!';
            submitBtn.style.background = '#00ff88';
            
            // Reset after delay
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                form.reset();
            }, 2000);
            
            // Show success notification
            showNotification('Message sent successfully!', 'success');
        }, 1500);
    });
});

// Notification System with Animation
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    gsap.fromTo(notification,
        {
            x: 300,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out"
        }
    );
    
    // Auto hide
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        hideNotification(notification);
    });
}

function hideNotification(notification) {
    gsap.to(notification, {
        x: 300,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }
    });
}

// Scroll to Top Button with Animation
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #00ff88;
    color: #333;
    border: none;
    font-size: 20px;
    cursor: pointer;
    z-index: 1000;
    transform: scale(0);
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
gsap.to(scrollTopBtn, {
    scale: 1,
    scrollTrigger: {
        trigger: "body",
        start: "500px top",
        end: "bottom bottom",
        toggleActions: "play none none reverse"
    }
});

scrollTopBtn.addEventListener('click', () => {
    gsap.to(window, {
        scrollTo: 0,
        duration: 1,
        ease: "power2.inOut"
    });
});

// Background Animation on Scroll
gsap.to('.animated-bg::before', {
    x: -100,
    y: -100,
    duration: 20,
    repeat: -1,
    ease: "none"
});

// Initialize typing effect for specific elements
function typeWriter(element, text, speed = 50) {
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

// Reveal animations for text elements
gsap.utils.toArray('.text-fade-in').forEach(text => {
    gsap.fromTo(text,
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: text,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Enhanced Three.js Scene (optional - can be expanded)
// This creates a subtle 3D background effect
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.position = 'fixed';
renderer.domElement.style.top = '0';
renderer.domElement.style.left = '0';
renderer.domElement.style.zIndex = '-2';
renderer.domElement.style.opacity = '0.1';
document.body.appendChild(renderer.domElement);

// Add some floating geometries
const geometry = new THREE.SphereGeometry(0.5, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff88, wireframe: true });

for (let i = 0; i < 50; i++) {
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = (Math.random() - 0.5) * 20;
    sphere.position.y = (Math.random() - 0.5) * 20;
    sphere.position.z = (Math.random() - 0.5) * 20;
    scene.add(sphere);
}

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    
    scene.children.forEach(child => {
        if (child instanceof THREE.Mesh) {
            child.rotation.x += 0.01;
            child.rotation.y += 0.01;
        }
    });
    
    renderer.render(scene, camera);
}

animate();

// Resize handler for Three.js
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

console.log('🎉 Enhanced Portfolio with multiple animation libraries loaded successfully!');