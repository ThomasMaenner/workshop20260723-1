console.log("Website läuft.");

// Mobile-Menü auf-/zuklappen (Button nur auf schmalen Bildschirmen sichtbar, siehe styles.css)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    mobileMenuBtn.setAttribute('aria-expanded', isOpen);
  });
}

// Mobile-Menü schließen, sobald ein Link angeklickt wurde
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileMenuBtn?.setAttribute('aria-expanded', 'false');
  });
});

// Smooth Scrolling für Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
