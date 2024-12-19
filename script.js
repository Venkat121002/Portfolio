var typed = new Typed(".auto-type", {
    strings: ["Fullstack Developer","Python Developer","Programmer"],
    typeSpeed: 150,
    backSpeed: 150,
    looped: true
})

// Select all section elements and menu links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

// Function to handle active link
const setActiveLink = () => {
  let currentSection = "";
  
  // Determine the section in the viewport
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  // Remove and set active class for menu links
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
};

// Listen for scroll events
window.addEventListener("scroll", setActiveLink);



document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const fields = [
      document.getElementById("name"),
      document.getElementById("email"),
      document.getElementById("phone"),
      document.getElementById("subject"),
      document.getElementById("message"),
  ];

  let isValid = true;

  // Validate each field
  fields.forEach((field) => {
      if (!field.value.trim()) {
          field.parentElement.classList.add("error"); // Add the error class
          isValid = false;
      } else {
          field.parentElement.classList.remove("error"); // Remove the error class
      }
  });

  if (isValid) {
      // Show a pop-up message
      alert("Your message has been sent successfully!");

      // Submit the form programmatically
      this.submit();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const btnMenu = document.getElementById('btn');
  const btnCancel = document.getElementById('cancel');

  btnMenu.addEventListener('click', () => {
      navbar.classList.add('active');
      btnMenu.style.display = 'none';
      btnCancel.style.display = 'block';
  });

  btnCancel.addEventListener('click', () => {
      navbar.classList.remove('active');
      btnMenu.style.display = 'block';
      btnCancel.style.display = 'none';
  });
});