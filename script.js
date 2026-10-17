
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const searchBtn = document.getElementById("searchBtn");
const demoBtn = document.getElementById("demoBtn");

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Mobile navigation menu
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    });
});

// Search button
searchBtn.addEventListener("click", function () {
    const query = prompt("What are you looking for?");

    if (query && query.trim()) {
        const searchTerm = query.trim().toLowerCase();

        const cards = document.querySelectorAll(".product-card");

        let found = false;

        cards.forEach(function (card) {
            const content = card.textContent.toLowerCase();

            if (content.includes(searchTerm)) {
                card.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                card.style.outline = "3px solid #0875d1";

                setTimeout(function () {
                    card.style.outline = "";
                }, 2000);

                found = true;
            }
        });

        if (!found) {
            alert("No matching product found. Try Sales, Service, Marketing or Business.");
        }
    }
});

// Watch demo button
demoBtn.addEventListener("click", function () {
    alert(
        "Welcome to CloudSuite!\n\n" +
        "Our demo dashboard shows business revenue, customers, " +
        "and weekly growth. Explore the page to learn more."
    );
});

// Contact form demonstration
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const message = document.getElementById("userMessage").value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    formMessage.textContent =
        "Thank you, " + name +
        "! Your form has been validated successfully.";

    contactForm.reset();
});
