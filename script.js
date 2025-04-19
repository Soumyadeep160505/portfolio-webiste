// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
          target.scrollIntoView({ behavior: "smooth" });
      }
  });
});

// Typing animation in hero section
const phrases = ["Web Developer", "Designer", "Programmer", "Learner"];
let currentPhrase = 0;
let currentChar = 0;
const heroText = document.querySelector(".hero-text p");

function typePhrase() {
  if (!heroText) return;
  let phrase = phrases[currentPhrase];
  if (currentChar <= phrase.length) {
      heroText.textContent = phrase.slice(0, currentChar++);
      setTimeout(typePhrase, 100);
  } else {
      setTimeout(() => {
          currentChar = 0;
          currentPhrase = (currentPhrase + 1) % phrases.length;
          typePhrase();
      }, 1500);
  }
}
typePhrase();

// Theme Toggle (Light/Dark Mode)
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌓";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.fontSize = "24px";
toggleBtn.style.padding = "5px 10px";
toggleBtn.style.border = "none";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.borderRadius = "5px";
toggleBtn.style.zIndex = "1000";
document.body.appendChild(toggleBtn);

let isDark = false;
toggleBtn.addEventListener("click", () => {
  isDark = !isDark;
  document.body.classList.toggle("dark-mode", isDark);
});

// Scroll-to-top button
const topButton = document.createElement("button");
topButton.innerText = "⬆️";
topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "20px";
topButton.style.padding = "10px";
topButton.style.border = "none";
topButton.style.borderRadius = "5px";
topButton.style.display = "none";
topButton.style.cursor = "pointer";
topButton.style.zIndex = "1000";
document.body.appendChild(topButton);

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
      topButton.style.display = "block";
  } else {
      topButton.style.display = "none";
  }
});

// Reveal elements on scroll
const revealElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("visible");
      }
  });
}, {
  threshold: 0.2
});

revealElements.forEach(section => {
  observer.observe(section);
});
