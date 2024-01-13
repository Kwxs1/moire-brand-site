const menu = document.querySelector('#mobile-menu'); //var controlling drop down menu
const menuLinks = document.querySelector('.navbar__menu'); //var controlling link buttons

// Display Mobile Menu
const mobileMenu = () => { //arrow function
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);
