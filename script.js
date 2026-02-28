const roles = ["Software Engineer",".NET Developer"," Backend Engineer"," Cloud Enthusiast"];
let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
  currentRole = roles[i];
  
  if (!isDeleting) {
    document.getElementById("typing").innerHTML = currentRole.substring(0, j++);
    if (j > currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    document.getElementById("typing").innerHTML = currentRole.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
