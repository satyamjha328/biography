
// Typing Animation
const roles = [
  "Software Developer – .NET",
  "Backend Engineer",
  "Azure DevOps Practitioner"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

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


// Scroll Reveal using Intersection Observer

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 100);
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// Smooth Scroll Enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});


const glow = document.querySelector(".hero-glow");

document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;

    if (glow) {
        glow.style.transform = `translate(${x}px, ${y}px)`;
    }
});


window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
