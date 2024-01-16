const menu = document.querySelector('#mobile-menu'); //var controlling drop down menu
const menuLinks = document.querySelector('.navbar__menu'); //var controlling link buttons
const navLogo = document.querySelector('#navbar__logo');
const hero = document.querySelector('#home');

// Display Mobile Menu
const mobileMenu = () => { //arrow function
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling

const highlightMenu = () => {
    const element = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const missionMenu = document.querySelector('#mission-page');
    const designsMenu = document.querySelector('#designs-page');
    let scrollPos = window.scrollY
    console.log(scrollPos);

    // add highlight class to menu items
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        missionMenu.classList.remove('highlight');
        return; 
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        homeMenu.classList.remove('highlight');
        missionMenu.classList.add('highlight');
        designsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        designsMenu.classList.add('highlight');
        missionMenu.classList.remove('highlight');
        return;
    }

    if((element && window.innerWidth < 960 && scrollPos < 600) || element){
        element.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)


//close hamburger menu after clicking on item
const hideMobileMenu = () => {
    const menuBars = document.querySelector(".is-active") 
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
