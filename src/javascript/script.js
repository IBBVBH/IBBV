document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("mobile_btn").addEventListener("click", function () {
    document.getElementById("mobile_menu").classList.toggle("active");
    document.querySelector("#mobile_btn i").classList.toggle("fa-x");
  });

  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-item");

  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const scrollPosition = window.scrollY - header.offsetHeight;
    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
      header.style.boxShadow = "none";
    } else {
      header.style.boxShadow = "5px 1px 5px rgba(0,0,0,0.1)";
    }

    sections.forEach((section, i) => {
      const sectionTop = section.offsetTop - 96;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return;
      }
    });

    navItems.forEach((item) => item.classList.remove("active"));
    navItems[activeSectionIndex].classList.add("active");
  });

  ScrollReveal().reveal("#cta", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });

  ScrollReveal().reveal(".event", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });

  ScrollReveal().reveal("#testimonials_image", {
    origin: "left",
    duration: 1000,
    distance: "20%",
  });

  ScrollReveal().reveal(".feedback", {
    origin: "right",
    duration: 1000,
    distance: "20%",
  });
});
