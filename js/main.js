/* ============================================================
   DR. MITESH NEMADE — MAIN JAVASCRIPT
   Handles: Preloader, Navigation, Smooth Scroll, Counter,
            Testimonial Slider, FAQ, Form, Animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ---- PRELOADER ----
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 800);
    });
    // Fallback: hide preloader after 3s
    setTimeout(() => preloader.classList.add('hidden'), 3000);

    // ---- AOS INIT ----
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 700,
            easing: 'ease-out-cubic',
            once: true,
            offset: 60,
            disable: window.innerWidth < 768 ? 'phone' : false
        });
    }

    // ---- STICKY HEADER ----
    const header = document.getElementById('header');
    let lastScroll = 0;

    function handleScroll() {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = scrollY;
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // ---- MOBILE NAVIGATION ----
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
        document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('open') &&
            !navLinks.contains(e.target) &&
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    // ---- ACTIVE NAV LINK ON SCROLL ----
    const sections = document.querySelectorAll('section[id]');
    function updateActiveNav() {
        const scrollPos = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (navLink) {
                if (scrollPos >= top && scrollPos < top + height) {
                    navLinkItems.forEach(l => l.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    }
    window.addEventListener('scroll', updateActiveNav, { passive: true });

    // ---- SMOOTH SCROLL FOR ANCHOR LINKS ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.offsetTop - offset;
                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ---- COUNTER ANIMATION ----
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-count]');
        counters.forEach(counter => {
            if (counter.dataset.animated) return;
            const target = parseInt(counter.dataset.count);
            const duration = 2000;
            const start = performance.now();

            function updateCounter(timestamp) {
                const elapsed = timestamp - start;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * target);

                if (target >= 1000) {
                    counter.textContent = current.toLocaleString() + '+';
                } else {
                    counter.textContent = current + (target < 100 ? '+' : '%');
                }

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    if (target >= 1000) {
                        counter.textContent = target.toLocaleString() + '+';
                    } else if (target === 98) {
                        counter.textContent = target + '%';
                    } else {
                        counter.textContent = target + '+';
                    }
                    counter.dataset.animated = 'true';
                }
            }
            requestAnimationFrame(updateCounter);
        });
    }

    // Intersection Observer for counter
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        counterObserver.observe(heroStats);
    }

    // ---- TESTIMONIAL SWIPER ----
    if (typeof Swiper !== 'undefined') {
        new Swiper('.testimonial-swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                },
            },
        });
    }

    // ---- FAQ ACCORDION ----
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all others
            faqItems.forEach(other => {
                other.classList.remove('active');
            });

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Open first FAQ by default
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }

    // ---- APPOINTMENT FORM ----
    const appointmentForm = document.getElementById('appointmentForm');
    const formSuccess = document.getElementById('formSuccess');

    if (appointmentForm) {
        // Set min date to today
        const dateInput = document.getElementById('appointmentDate');
        if (dateInput) {
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const dd = String(today.getDate()).padStart(2, '0');
            dateInput.setAttribute('min', `${yyyy}-${mm}-${dd}`);
        }

        appointmentForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitBtn = appointmentForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitBtn.disabled = true;

            // Collect form data
            const formData = {
                name: document.getElementById('patientName').value,
                phone: document.getElementById('patientPhone').value,
                email: document.getElementById('patientEmail').value,
                date: document.getElementById('appointmentDate').value,
                time: document.getElementById('appointmentTime').value,
                type: document.getElementById('consultationType').value,
                message: document.getElementById('patientMessage').value,
            };

            // Try saving to table API
            try {
                const response = await fetch('tables/appointments', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                if (response.ok) {
                    console.log('Appointment saved successfully');
                }
            } catch (err) {
                console.log('Table API not available, form submission visual only');
            }

            // Simulate processing delay for UX
            setTimeout(() => {
                appointmentForm.style.display = 'none';
                formSuccess.classList.remove('hidden');

                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1200);
        });
    }

    // Reset form function (global)
    window.resetForm = function() {
        if (appointmentForm && formSuccess) {
            appointmentForm.style.display = 'block';
            formSuccess.classList.add('hidden');
            appointmentForm.reset();
        }
    };

    // ---- NEWSLETTER FORM ----
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            const submitBtn = this.querySelector('button');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;

            // Try saving to table API
            try {
                await fetch('tables/newsletter', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: email })
                });
            } catch (err) {
                console.log('Newsletter subscription visual only');
            }

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
                submitBtn.style.background = '#10B981';
                submitBtn.style.borderColor = '#10B981';
                emailInput.value = '';

                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.borderColor = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1000);
        });
    }

    // ---- BACK TO TOP ----
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ---- GALLERY STATS ANIMATION ----
    const galleryStats = document.querySelector('.gallery-stats-visual');
    if (galleryStats) {
        const bars = galleryStats.querySelectorAll('.gs-bar');
        const barObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bars.forEach((bar, i) => {
                        setTimeout(() => {
                            bar.style.height = bar.style.getPropertyValue('--height');
                        }, i * 150);
                    });
                    barObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        // Initially set bars to 0 height
        bars.forEach(bar => {
            const targetHeight = bar.style.getPropertyValue('--height');
            bar.style.setProperty('--height', targetHeight);
            bar.style.height = '0%';
        });
        barObserver.observe(galleryStats);
    }

    // ---- PARALLAX SUBTLE EFFECT ----
    const heroImage = document.querySelector('.hero-image-wrapper');
    if (heroImage && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY < 800) {
                heroImage.style.transform = `translateY(${scrollY * 0.05}px)`;
            }
        }, { passive: true });
    }

    // ---- PHONE NUMBER FORMATTING ----
    const phoneInput = document.getElementById('patientPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            // Allow only numbers, +, spaces, hyphens
            this.value = this.value.replace(/[^0-9+\-\s()]/g, '');
        });
    }

    // ---- FORM INPUT VALIDATION STYLING ----
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.required && !this.value.trim()) {
                this.style.borderColor = '#EF4444';
            } else {
                this.style.borderColor = '';
            }
        });
        input.addEventListener('focus', function() {
            this.style.borderColor = '';
        });
    });

    // ---- MOBILE OVERLAY ----
    // Prevent body scroll when mobile nav is open
    const mobileOverlay = document.createElement('div');
    mobileOverlay.className = 'mobile-overlay';
    mobileOverlay.style.cssText = `
        position: fixed; top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(15,23,42,0.5); z-index: 999; display: none;
        backdrop-filter: blur(4px);
    `;
    document.body.appendChild(mobileOverlay);

    const observeNavOpen = new MutationObserver(() => {
        mobileOverlay.style.display = navLinks.classList.contains('open') ? 'block' : 'none';
    });
    observeNavOpen.observe(navLinks, { attributes: true, attributeFilter: ['class'] });

    mobileOverlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
    });

}); // End DOMContentLoaded