// variables
let closeBtn = document.getElementById('close-btn');
let openBtn = document.getElementById('open-btn');
let header = document.querySelector('.header')
let mobileNav = document.querySelector('.mobile-nav-link')

// event listeners

openBtn.addEventListener('click', showNav)
closeBtn.addEventListener('click', hideNav)

function showNav(){
    openBtn.style.display = "none"
    closeBtn.style.display = "block"
    header.classList.add("overlay")
    mobileNav.style.right = "20px"
}

function hideNav(){
    openBtn.style.display = "block"
    closeBtn.style.display = "none"
    header.classList.remove("overlay");
    mobileNav.style.right = "-900px"
}