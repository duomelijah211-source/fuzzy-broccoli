// =========================
// ELEMENTS
// =========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");
const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

// =========================
// MOBILE MENU
// =========================

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");

});

// =========================
// HEADER SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {

    header.classList.toggle("scrolled", window.scrollY > 40);

});

// =========================
// CLOSE MOBILE MENU
// =========================

navItems.forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        navLinks.classList.remove("active");

    });

});

// =========================
// ACTIVE LINK TRACKING
// =========================

function updateActiveLink() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.id;
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveLink);

updateActiveLink();