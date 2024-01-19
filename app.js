const menu = document.querySelector('#mobile-menu'); //var controlling drop down menu
const menuLinks = document.querySelector('.navbar__menu'); //var controlling link buttons
const navLogo = document.querySelector('#navbar__logo');
const hero = document.querySelector('#home');
const navbarLinks = document.querySelectorAll('.navbar__links');
const navCont = document.querySelector('.navbar__container');
const navBtn = document.querySelector('.navbar__button a');
const magnifyer = document.querySelector('.fa-magnifying-glass');

// navbar hover 
const navHover = () => {
    navCont.classList.add('is-active');
    navLogo.classList.add('is-active');
    navbarLinks.forEach(navbarLinks => {
        navbarLinks.classList.add('is-active');
    });
    navBtn.classList.add('is-active');
    magnifyer.classList.add('is-active');
}

const navUnHover = () => {
    navCont.classList.remove('is-active');
    navLogo.classList.remove('is-active');
    navbarLinks.forEach(navbarLinks => {
        navbarLinks.classList.remove('is-active');
    });
    navBtn.classList.remove('is-active');
    magnifyer.classList.remove('is-active');
}

navCont.addEventListener('mouseover', navHover);
navCont.addEventListener('mouseout', navUnHover);

// craete navbar scroll animation
const stickyNav = () => {
    if (window.scrollY >= 100) {
        navHover();
        navCont.removeEventListener('mouseover', navHover);
        navCont.removeEventListener('mouseout', navUnHover);
    } else {
        navUnHover();
        navCont.addEventListener('mouseover', navHover);
        navCont.addEventListener('mouseout', navUnHover);

    }
}

window.addEventListener('scroll', stickyNav);


// Create main & features secitons scroll animations
const check = (entries) => entries.forEach(entry => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  });
  
  const Obs = new IntersectionObserver(check);
  document.querySelectorAll(".main__content").forEach((el) => Obs.observe(el));



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
