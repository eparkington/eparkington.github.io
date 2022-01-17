let toggleButton = document.querySelector("#menu-button");
let mobileNav = document.querySelector(".mobile-nav");

toggleButton.addEventListener("click", () => {
    mobileNav.classList.toggle("show");                                          
}
    );

mobileNav.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
    
})
