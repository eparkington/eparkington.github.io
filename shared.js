var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var backdrop = document.querySelector('.backdrop');


toggleButton.addEventListener("click", function() {
       mobileNav.classList.add("show");
       backdrop.classList.add("show");
}
    );

backdrop.addEventListener("click", function() {
        mobileNav.classList.remove("show");
        backdrop.classList.remove("show");
    })
                              
/*
window.onclick = function(e) {
    if(!e.target.matches('.mobile-nav')) {
        if(mobileNav.classList.contains("show")) {
            
        }
}
}

                              
*/
