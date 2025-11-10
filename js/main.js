function toggleMenu() {
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".nav-toggle");
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

document.addEventListener("DOMContentLoaded", () => {
  updateYear();
});
