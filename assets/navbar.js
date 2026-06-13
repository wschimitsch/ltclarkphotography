const nav = document.querySelector(".navbar");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    let current;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
            current = section;
        }
    });

    if (current) {
        if (current.classList.contains("bg-dark")) {
            nav.classList.remove("navbar-light");
            nav.classList.add("navbar-dark");
        } else {
            nav.classList.remove("navbar-dark");
            nav.classList.add("navbar-light");
        }
    }
});