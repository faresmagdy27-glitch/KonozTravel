const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

});

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    header.classList.toggle("scrolled",window.scrollY>40);

});