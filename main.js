// Open & Close navbar list in phone size
const headerBurgerButton = document.querySelector(".header-burger-btn");
const headerNavbar = document.querySelector(".header-nav");
const headerCloseButton = document.querySelector(".header-close-btn");

// Open navbar list
headerBurgerButton.addEventListener("click", () => {
  headerNavbar.classList.add("show-menu");
});

// Close navbar list
headerCloseButton.addEventListener("click", () => {
  headerNavbar.classList.remove("show-menu");
});

// Set Progress Line Skills Dynamicly
const progressLines = document.querySelectorAll(".skill-line");

progressLines.forEach((line) => {
  const progressPercent = line.dataset.progress;
  const progressLine = line.firstElementChild;

  progressLine.style.width = `${progressPercent}%`;
});

// Go to spesific section dynamicly
const directLinks = document.querySelectorAll(".direct-link");

directLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // close menu list after clicking to link in phone size
    if (headerNavbar.classList.contains("show-menu")) {
      headerNavbar.classList.remove("show-menu");
    }

    // get active class from all links & set active class to clicked link
    directLinks.forEach((allLink) => {
      allLink.classList.remove("active");
    });
    link.classList.add("active");

    // get sections by helping href of links
    const href = e.currentTarget.getAttribute("href");
    const targetSection = document.getElementById(href.substring(1));

    // check if clicked link was Home Link or another links (href of Home Link is => #)
    if (href === "#") {
      window.scrollTo(0, 0);
    } else {
      const headerHeight = parseInt(window.getComputedStyle(mainHeader).height);

      //   check if it was first click or not (if it was first, it should scroll more)
      if (!mainHeader.classList.contains("fixed-header")) {
        window.scrollTo({
          top: targetSection.offsetTop - headerHeight - 125,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: targetSection.offsetTop - headerHeight - 15,
          behavior: "smooth",
        });
      }
    }
  });
});

// fix position of main header when scroll is more than 100px
const mainHeader = document.querySelector(".main-header-wrapper");

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset >= 100) {
    mainHeader.classList.add("fixed-header");
  } else {
    mainHeader.classList.remove("fixed-header");
  }
});
