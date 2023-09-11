let mobile_nav  = document.querySelector(".mobile-navbar-btn")

let nav_header  = document.querySelector("header")

const toggleNavbar = () => {
    // console.log("hahia is")
    nav_header.classList.toggle("active")
}

mobile_nav.addEventListener  ("click", () => toggleNavbar())