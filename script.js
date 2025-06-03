// Typed Text Animation for hero header
const typedPhrases = [
  "Naveen Mani Sankar Reddy",
  "a Web Developer",
  "a Programmer",
  "a Tech Enthusiast"
];

const typedTextElem = document.querySelector(".typed-text");
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = "";
let isDeleting = false;
let typingSpeed = 150;

function type() {
  if (phraseIndex >= typedPhrases.length) phraseIndex = 0;
  currentPhrase = typedPhrases[phraseIndex];

  if (!isDeleting) {
    typedTextElem.textContent = currentPhrase.slice(0, letterIndex + 1);
    letterIndex++;

    if (letterIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at end
    } else {
      typingSpeed = 150;
    }
  } else {
    typedTextElem.textContent = currentPhrase.slice(0, letterIndex - 1);
    letterIndex--;

    if (letterIndex === 0) {
      isDeleting = false;
      phraseIndex++;
      typingSpeed = 500;
    } else {
      typingSpeed = 100;
    }
  }

  setTimeout(type, typingSpeed);
}
type();

// Fade-in on scroll effect
const sections = document.querySelectorAll(".section");

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
      section.classList.add("fade-in");
    }
  });
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", () => {
  sections.forEach(section => section.classList.add("fade-in"));
  checkVisibility();
});

// Smooth scrolling active link highlight
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetID = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetID);

    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Optionally: Update active nav link on scroll (bonus)
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});
