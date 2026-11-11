
/* ALCOR TRADING WEBSITE */

// Automatically update copyright year


const currentYear = new Date().getFullYear();

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = currentYear;
}


// MOBILE NAVIGATION MENU

const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("main-nav");

// Open and close the menu

menuButton?.addEventListener("click", function () {


    const isOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.textContent = isOpen ? "✕ Close" : "☰ Menu";

});

// Close menu when a link is clicked

const navigationLinks = navigation?.querySelectorAll("a") || [];


navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰ Menu";

    });

});

/* DOWNPIPE BRAND FILTERING */

document.addEventListener("DOMContentLoaded", function () {

    const brandSections = {
        bmw: "bmw-products",
        vw: "vw-products",
        audi: "audi-products",
        ford: "ford-products"
    };

    const sections = Object.values(brandSections)
        .map(id => document.getElementById(id))
        .filter(section => section !== null);

    // Hide all downpipe products when the page opens
    sections.forEach(section => {
        section.style.display = "none";
    });

    // Detect clicks on manufacturer blocks
    document.querySelectorAll("[data-brand]").forEach(link => {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const selectedBrand = this.dataset.brand;
            const selectedSection = brandSections[selectedBrand];

            // Show only the selected manufacturer's products
            sections.forEach(section => {

                if (section.id === selectedSection) {
                    section.style.display = "";
                } else {
                    section.style.display = "none";
                }

            });

            // Scroll to the selected products
            const target = document.getElementById(selectedSection);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

});
