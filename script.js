document.addEventListener("DOMContentLoaded", function () {

  const roles = [
    "Software Developer – .NET",
    "Backend Engineer",
    "Azure DevOps Practitioner"
  ];

  const typingElement = document.getElementById("typing");

  if (typingElement) {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex++);
        if (charIndex > currentRole.length) {
          isDeleting = true;
          setTimeout(typeEffect, 1200);
          return;
        }
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex--);
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }

      setTimeout(typeEffect, isDeleting ? 40 : 80);
    }

    typeEffect();
  }

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));

  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });


const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (toggle) {
    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
});
