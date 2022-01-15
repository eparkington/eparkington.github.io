let toggleButton = document.querySelector(".menu-button__bar");
let mobileNav = document.querySelector(".mobile-nav");
let changeButton = window.getComputedStyle(toggleButton, '::after');
let wrappers = document.querySelectorAll('.wrapper');
let projectTypes = document.querySelectorAll('.project-type');
let projectExamples = document.querySelectorAll('.project-type__examples');

toggleButton.addEventListener("click", function() {
    mobileNav.classList.toggle("show");
    changeButton.classList.toggle("transform");

                                                   
                                                   
}
    );
/*

wrappers.forEach(wrapper => {
    wrapper.addEventListener("mouseover", (e) => {
        if(e.target.className === 'project-type') {
            e.target.classList.add("hide");
           
      
    }
})
    
});



wrappers.forEach(wrapper => {
   wrapper.addEventListener("mouseout", (e) => {
        if(e.target) {
           e.target.classList.remove("hide");
          
        }
    })
    
    
});
*/
