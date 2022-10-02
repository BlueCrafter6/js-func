const sleep = (ms) => {
  return new Promise((r) => setTimeout(r, ms));
};

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navigation li ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active-inner");
    if (li.classList.contains(current)) {
      li.classList.add("active-inner");
    }
  });
};