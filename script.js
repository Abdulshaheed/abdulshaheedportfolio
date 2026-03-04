document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const header = document.querySelector('.header');
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const currentYear = document.getElementById('currentYear');
    const links = document.querySelectorAll('.nav-links a');

    // Set Current Year in Footer
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Scroll Header Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active Link Switching on Scroll
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close Mobile Menu on Link Click
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            if (icon.classList.contains('fa-times')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Form Submission Details Hook
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Construct Email Body
            const targetEmail = 'abdulshaheedabdullahi2@gmail.com';
            const subject = `Portfolio Contact from ${name}`;
            const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing Email...';
            btn.style.opacity = '0.7';
            btn.disabled = true;

            // Trigger mailto link behavior to open user's default email client
            setTimeout(() => {
                window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

                // Update UI state
                btn.innerHTML = '<i class="fas fa-check"></i> Redirecting to Email App';
                btn.classList.replace('btn-primary', 'btn-secondary');
                contactForm.reset();

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.replace('btn-secondary', 'btn-primary');
                    btn.style.opacity = '1';
                    btn.disabled = false;
                }, 4000);
            }, 800);
        });
    }
});
