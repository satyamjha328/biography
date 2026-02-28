// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple reveal on scroll (optional)
const reveal = (entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
      obs.unobserve(e.target);
    }
  });
};
document.querySelectorAll('.section').forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(20px)';
  const io = new IntersectionObserver(reveal, { threshold: 0.15 });
  io.observe(sec);
});
