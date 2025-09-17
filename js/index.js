const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
	document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		document.body.classList.remove("nav-open");
	});
});

let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;

	if (currentScroll <= 0) {
		header.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
		header.classList.remove("scroll-up");
		header.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		header.classList.contains("scroll-down")
	) {
		header.classList.remove("scroll-down");
		header.classList.add("scroll-up");
	}

	lastScroll = currentScroll;
});

const textarea = document.getElementById("message");

textarea.addEventListener("input", function () {
	// Reset height to auto to shrink when deleting text
	this.style.height = "auto";

	// Set height to scrollHeight but max 300px
	this.style.height = Math.min(this.scrollHeight, 300) + "px";
});

const seeMoreBtn = document.getElementById("see-more-btn");
const portfolio = document.querySelector(".portfolio");

seeMoreBtn.addEventListener("click", () => {
	portfolio.classList.toggle("show-extra");

	// Change button text dynamically
	if (portfolio.classList.contains("show-extra")) {
		seeMoreBtn.textContent = "See Less";
	} else {
		seeMoreBtn.textContent = "See More";
	}
});
