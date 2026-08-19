/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-link");

function closeMenu() {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );
}

/* Open / Close menu */

menuToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    const isOpen =
        navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );
});

/* Close menu when link is clicked */

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        closeMenu();
    });
});

/* Close menu when clicking outside */

document.addEventListener("click", function (event) {
    const clickedInsideNavbar =
        event.target.closest(".navbar");
    if (!clickedInsideNavbar) {
        closeMenu();
    }
});

/* Close menu with Escape */

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});

/* =========================
   ACTIVE NAVIGATION LINK
========================= */

const sections =
    document.querySelectorAll("section[id]");
const observer =
    new IntersectionObserver(
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
            rootMargin: "-30% 0px -60% 0px"
        }
    );

sections.forEach(function (section) {
    observer.observe(section);
});

/* =========================
   RESERVATION
========================= */

const reservationForm =
    document.getElementById("reservation-form");
reservationForm.addEventListener(
    "submit",
    function (event) {
        event.preventDefault();
        const name =
            document.getElementById("name").value.trim();
        const date =
            document.getElementById("date").value;
        const time =
            document.getElementById("time").value;
        const guests =
            document.getElementById("guests").value;
        if (!name || !date || !time || !guests) {
            alert(
                "Please fill in all reservation details."
            );
            return;
        }
        const formattedDate =
            new Date(date + "T00:00:00")
                .toLocaleDateString(
                    "en-PK",
                    {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                    }
                );
        const message =
            `Hello Spice Garden!%0A%0A` +
            `I'd like to reserve a table.%0A%0A` +
            `Name: ${name}%0A` +
            `Date: ${formattedDate}%0A` +
            `Time: ${time}%0A` +
            `Guests: ${guests}%0A%0A` +
            `Thank you!`;
        /*
            Will replace this number with the restaurant
            owner's actual WhatsApp number.
        */
        const restaurantWhatsApp =
            "923001234567";
        const whatsappURL =
            `https://wa.me/${restaurantWhatsApp}?text=${message}`;
        window.open(
            whatsappURL,
            "_blank"
        );
    }
);

/* =========================
   DATE RESTRICTION
========================= */

const dateInput =
    document.getElementById("date");
const today =
    new Date();
const year =
    today.getFullYear();
const month =
    String(
        today.getMonth() + 1
    ).padStart(2, "0");
const day =
    String(
        today.getDate()
    ).padStart(2, "0");
const todayFormatted =
    `${year}-${month}-${day}`;
dateInput.setAttribute(
    "min",
    todayFormatted
);

/* =========================
   FULL MENU TABS
========================= */

const menuTabBtns =
    document.querySelectorAll(".menu-tab-btn");

const menuPanels =
    document.querySelectorAll(".menu-list-panel");

menuTabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const target = btn.dataset.menu;
        menuTabBtns.forEach(function (b) {
            b.classList.remove("active");
            b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
        menuPanels.forEach(function (panel) {
            panel.classList.toggle(
                "active",
                panel.dataset.panel === target
            );
        });
    });
});
document.querySelectorAll("*").forEach(el => {
    if (el.scrollWidth > document.documentElement.clientWidth) {
        console.log(el);
    }
});