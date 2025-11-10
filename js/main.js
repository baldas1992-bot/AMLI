function toggleMenu() {
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".nav-toggle");
  if (!menu) return;
  const isOpen = menu.classList.toggle("open");

  if (toggle) {
    toggle.setAttribute("aria-expanded", String(isOpen));
  }
}

function updateYear() {
  const yearPlaceholder = document.getElementById("year");
  if (!yearPlaceholder) return;

  const currentYear = new Date().getFullYear();
  yearPlaceholder.textContent = currentYear;
}

function closeMenuOnNavigate() {
  const menu = document.getElementById("menu");
  if (!menu) return;

  const links = menu.querySelectorAll("a");
  const toggle = document.querySelector(".nav-toggle");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (!menu.classList.contains("open")) return;
      menu.classList.remove("open");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateYear();
  closeMenuOnNavigate();
});
