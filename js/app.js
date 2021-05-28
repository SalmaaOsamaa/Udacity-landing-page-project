



/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//Navbar global variables
const nav = document.getElementById('navbar__list');
const allSections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navMenu = () => {
    let navBuilder = '';
    //looping
    allSections.forEach((section,i) => {
        const sectionId = section.id;
        const sectionDataNav = section.dataset.nav;
        if(i == 0 ){
            navBuilder += `<li><a class="active__link menu__link" id="${section.id}-link">${sectionDataNav}</a></li>`
        }else{

            navBuilder += `<li><a class="menu__link" id="${section.id}-link">${sectionDataNav}</a></li>`
        }
    });
    //APPEND
    nav.innerHTML = navBuilder;

}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
const linksEvents = () => {
    const sectionLinks = document.querySelectorAll('.menu__link')
    sectionLinks.forEach(el => {
        
        el.addEventListener('click', (e) => {
            let elementToScrollTo = document.querySelector(`#${el.id.slice(0,el.id.length-5)}`)

            const y = elementToScrollTo.getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });
        })
    })
    
}

/**
 * End Main Functions
 * Begin Events
 * 
*/
window.addEventListener('scroll', e => {
    let activeSection = document.querySelector('.your-active-class')
    let activeLink = document.querySelector('.active__link')
    allSections.forEach(s => {
        if(Math.abs(s.getBoundingClientRect().top) < Math.abs(activeSection.getBoundingClientRect().top)){
            activeSection.classList.remove('your-active-class')
            s.classList.add('your-active-class')
            activeSection = s
            activeLink.classList.remove('active__link')
            activeLink = document.querySelector(`#${activeSection.id}-link`)
            activeLink.classList.add('active__link')
        }
    })
})

// Build menu 
navMenu()
linksEvents()

// Scroll to section on link click

// Set sections as active

