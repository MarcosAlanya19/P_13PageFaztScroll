import './style.css'

const menuBtn = document.querySelector<HTMLButtonElement>('.menu-btn');
const navMenu = document.querySelector<HTMLButtonElement>('.nav-menu');

menuBtn?.addEventListener('click', () =>{
    navMenu?.classList.toggle('show');
});


// ScrollReveal().reveal('.showcase');
// ScrollReveal().reveal('.news-cards',{delay : 500});
// ScrollReveal().reveal('.cards-banner-one',{delay : 500});
// ScrollReveal().reveal('.cards-banner-two',{delay : 500});


