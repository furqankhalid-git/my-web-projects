/* =========================
   MOBILE MENU
========================= */

const menuToggle =
    document.getElementById("menu-toggle");

const navLinks =
    document.getElementById("nav-links");


function closeMenu() {

    navLinks.classList.remove("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.textContent = "☰";

}


menuToggle.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        const isOpen =
            navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.textContent =
            isOpen ? "✕" : "☰";

    }
);


navLinks.querySelectorAll("a").forEach(
    function (link) {

        link.addEventListener(
            "click",
            closeMenu
        );

    }
);


document.addEventListener(
    "click",
    function (event) {

        if (!event.target.closest(".navbar")) {

            closeMenu();

        }

    }
);


window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 700) {

            closeMenu();

        }

    }
);


/* =========================
   GALLERY FILTER
========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const galleryItems =
    document.querySelectorAll(".gallery-item");


filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const filter =
                    button.dataset.filter;


                filterButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add("active");


                galleryItems.forEach(
                    function (item) {

                        const category =
                            item.dataset.category;


                        if (
                            filter === "all" ||
                            category === filter
                        ) {

                            item.classList.remove(
                                "hidden"
                            );

                        } else {

                            item.classList.add(
                                "hidden"
                            );

                        }

                    }
                );

            }
        );

    }
);


/* =========================
   LIGHTBOX
========================= */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");

const lightboxTitle =
    document.getElementById("lightbox-title");

const lightboxClose =
    document.getElementById("lightbox-close");

const lightboxBackground =
    document.getElementById("lightbox-background");


const imageTriggers =
    document.querySelectorAll(".image-trigger");


function openLightbox(image, title) {

    lightboxImage.src = image;

    lightboxImage.alt = title;

    lightboxTitle.textContent = title;

    lightbox.classList.add("active");

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

}


function closeLightbox() {

    lightbox.classList.remove("active");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    lightboxImage.src = "";

    document.body.style.overflow = "";

}


imageTriggers.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                openLightbox(
                    button.dataset.image,
                    button.dataset.title
                );

            }
        );

    }
);


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightboxBackground.addEventListener(
    "click",
    closeLightbox
);


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeLightbox();

        }

    }
);


/* =========================
   TESTIMONIALS
========================= */

const testimonials = [

    {
        text:
            "James made us forget the camera was even there. The photographs feel exactly like the day felt.",
        name:
            "Emma & Daniel",
        role:
            "Wedding Clients"
    },

    {
        text:
            "The entire experience felt relaxed and effortless. Every photograph looks beautiful.",
        name:
            "Olivia Parker",
        role:
            "Portrait Client"
    },

    {
        text:
            "James captured the atmosphere of our event perfectly. We loved every image.",
        name:
            "Michael Reed",
        role:
            "Event Client"
    }

];


let currentTestimonial = 0;


const testimonialText =
    document.getElementById(
        "testimonial-text"
    );

const testimonialName =
    document.getElementById(
        "testimonial-name"
    );

const testimonialRole =
    document.getElementById(
        "testimonial-role"
    );

const previousTestimonial =
    document.getElementById(
        "prev-testimonial"
    );

const nextTestimonial =
    document.getElementById(
        "next-testimonial"
    );


function showTestimonial(index) {

    const testimonial =
        testimonials[index];


    testimonialText.textContent =
        `“${testimonial.text}”`;

    testimonialName.textContent =
        testimonial.name;

    testimonialRole.textContent =
        testimonial.role;

}


previousTestimonial.addEventListener(
    "click",
    function () {

        currentTestimonial--;

        if (currentTestimonial < 0) {

            currentTestimonial =
                testimonials.length - 1;

        }

        showTestimonial(
            currentTestimonial
        );

    }
);


nextTestimonial.addEventListener(
    "click",
    function () {

        currentTestimonial++;

        if (
            currentTestimonial >=
            testimonials.length
        ) {

            currentTestimonial = 0;

        }

        showTestimonial(
            currentTestimonial
        );

    }
);


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById(
        "contact-form"
    );

const formMessage =
    document.getElementById(
        "form-message"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const service =
            document.getElementById(
                "service"
            ).value;


        const message =
            document.getElementById(
                "message"
            ).value.trim();


        if (
            !name ||
            !email ||
            !service ||
            !message
        ) {

            formMessage.textContent =
                "Please complete all fields.";

            return;

        }


        formMessage.textContent =
            `Thanks, ${name}. Your inquiry has been received.`;


        contactForm.reset();

    }
);