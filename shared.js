let toggleButton = document.querySelector(".menu-button__bar");
let mobileNav = document.querySelector(".mobile-nav");
let changeButton = window.getComputedStyle(toggleButton, '::after');

toggleButton.addEventListener("click", function() {
    mobileNav.classList.toggle("show");
    changeButton.classList.toggle("transform");

                                                   
                                                   
}
    );





