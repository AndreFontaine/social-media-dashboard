const darkMode = document.querySelector("#dark-switch");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  darkMode.setAttribute("checked", true);
  toggleDarkMode();
}

darkMode.addEventListener("change", () => {
  toggleDarkMode();
});

function toggleDarkMode() {
  if (darkMode.checked) {
    document.body.classList.remove("is-light-mode");
    document.body.classList.add("is-dark-mode");
  } else {
    document.body.classList.remove("is-dark-mode");
    document.body.classList.add("is-light-mode");
  }
}
