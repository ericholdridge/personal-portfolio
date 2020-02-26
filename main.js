const mobileNavIcon = document.querySelector(".mobileNavIcon");
const navItems = document.querySelector(".navItems");

mobileNavIcon.addEventListener("click", () => {
    navItems.classList.toggle("hidden");
})