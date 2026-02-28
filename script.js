// ===============================
// DOM Ready Safety
// ===============================
document.addEventListener("DOMContentLoaded", function () {

  // ===============================
  // Typing Animation
  // ===============================
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

  // ===============================
  // Scroll Reveal Animation
  // ===============================
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));

  // ===============================
  // Smooth Scroll
  // ===============================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ===============================
  // Parallax Glow Effect
  // ===============================
  const glow = document.querySelector(".hero-glow");

  if (glow) {
    document.addEventListener("mousemove", (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 30;
      const y = (window.innerHeight / 2 - e.clientY) / 30;

      glow.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  // ===============================
  // Navbar Glass Effect
  // ===============================
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("mousemove", function (e) {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  button.addEventListener("mouseleave", function () {
    button.style.transform = "translate(0,0)";
  });
});

});
