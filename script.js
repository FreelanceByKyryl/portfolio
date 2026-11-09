
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.getElementById("siteNav");

function closeMenu() {
    if (!menuToggle || !siteNav) return;

    siteNav.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
}

if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("open");

        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        document.body.classList.toggle("menu-open", isOpen);
    });

    siteNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", event => {
        if (
            siteNav.classList.contains("open") &&
            !siteNav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 980) {
            closeMenu();
        }
    });
}

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll("[data-category]");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach(item => {
            item.classList.toggle("active", item === button);
            item.setAttribute("aria-pressed", String(item === button));
        });

        projectCards.forEach(card => {
            const categories = (card.dataset.category || "")
                .split(" ")
                .filter(Boolean);

            const visible =
                filter === "all" || categories.includes(filter);

            card.hidden = !visible;
        });
    });
});

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        if (!contactForm.reportValidity()) {
            return;
        }

        const data = new FormData(contactForm);

        const name = String(data.get("name") || "").trim();
        const email = String(data.get("email") || "").trim();
        const projectType = String(data.get("projectType") || "").trim();
        const message = String(data.get("message") || "").trim();

        if (!name || !email || !projectType || !message) {
            if (formStatus) {
                formStatus.textContent = "Please complete all required fields.";
            }

            return;
        }

        const subject = `Project Inquiry - ${projectType}`;

        const body = [
            `Name: ${name}`,
            `Email: ${email}`,
            `Project type: ${projectType}`,
            "",
            "Project details:",
            message,
            "",
            "Sent from MyPortfolio contact page."
        ].join("\n");

        const mailto = "mailto:itjobfreelancer1@gmail.com" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        if (formStatus) {
            formStatus.textContent =
                "Your email app should open. Please review and send the prepared message. If nothing opens, use the email address on this page.";
        }

        window.location.href = mailto;
    });
}

const copyEmailButton = document.getElementById("copyEmail");
const copyStatus = document.getElementById("copyStatus");

if (copyEmailButton) {
    copyEmailButton.addEventListener("click", async () => {
        const email = "itjobfreelancer1@gmail.com";

        try {
            await navigator.clipboard.writeText(email);

            if (copyStatus) {
                copyStatus.textContent = "Email address copied!";
            }
        } catch {
            if (copyStatus) {
                copyStatus.textContent =
                    "Copy this address: " + email;
            }
        }
    });
}
