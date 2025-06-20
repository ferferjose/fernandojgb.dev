const themeSwitch = document.getElementById("themeSwitch");

themeSwitch.addEventListener("change", () => {
    const isDark = document.body.getAttribute("data-theme") === "dark";
    document.body.setAttribute("data-theme", isDark ? "light" : "dark");

    localStorage.setItem("theme", isDark ? "light" : "dark");
});

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.setAttribute("data-theme", savedTheme);
    themeSwitch.checked = savedTheme === "dark";
});