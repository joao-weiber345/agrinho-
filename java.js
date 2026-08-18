// ==============================
// MENU MOBILE
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


// Fecha o menu ao clicar em um link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// ==============================
// ANO AUTOMÁTICO NO RODAPÉ
// ==============================

document.getElementById("year").textContent = new Date().getFullYear();


// ==============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ==============================

const animatedElements = document.querySelectorAll(
    ".card, .future-box, .balance-item, .about-content, .about-image"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach(element => {
    observer.observe(element);
});


// ==============================
// HEADER AO ROLAR
// ==============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.08)";
    } else {
        header.style.boxShadow = "none";
    }

});

