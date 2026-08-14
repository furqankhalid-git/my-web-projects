/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-link");


/* Open / Close mobile menu */

menuToggle.addEventListener("click", function (event) {

    event.stopPropagation();

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* Close menu when navigation link is clicked */

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* Close menu when clicking outside navbar */

document.addEventListener("click", function (event) {

    if (!event.target.closest(".navbar")) {

        navLinks.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});


/* =========================
   ACTIVE NAVIGATION LINK
========================= */

const sections = document.querySelectorAll("section[id]");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                navItems.forEach(function (link) {
                    link.classList.remove("active");
                });

                const activeLink =
                    document.querySelector(
                        `.nav-link[href="#${entry.target.id}"]`
                    );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },

    {
        threshold: 0.25
    }

);


sections.forEach(function (section) {

    observer.observe(section);

});


/* =========================
   CLOSE MENU WITH ESCAPE
========================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        navLinks.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});