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
//store all sections
const allSections = document.querySelectorAll('section');
// create fragment for better perfomance
const docFragment = document.createDocumentFragment();
//store the navigation bar
const navBar = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// function to remove the active class
function removeActiveClass () {
    allSections.forEach(sec => {
        if (sec.classList.contains('your-active-class')) {
            sec.classList.remove('your-active-class');   
        }
    });
}

// function to add the active class
function addActiveClass(sec) {
        sec.classList.add('your-active-class');
    }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNavItems() {
    allSections.forEach(sec => {
        let newNavItem = document.createElement('li'); // create list item
        let newNavAnchor = document.createElement('a'); // create anchor element
        let navItemName = sec.getAttribute('data-nav'); // get list item name from data-nav
        let navItemLink = sec.getAttribute('id'); //get item link from id
        newNavAnchor.text = navItemName; // give new anchor it's text
        newNavAnchor.href = "#"+navItemLink; // give new anchoe it's link
        newNavAnchor.className = ('menu__link'); // add class to anchor
        newNavItem.className = ('navbar__menu li'); // add class to list item
        newNavItem.appendChild(newNavAnchor); // append anchors to lis items
        docFragment.appendChild(newNavItem); // append list items to fragment
    });
    navBar.appendChild(docFragment); // append created fragment to navigation bar
    navBar.className = ('navbar__menu ul'); // give class to navigation bar
}

// funtion to toggle the active class
function toggleActiveClass() {
    allSections.forEach(sec => {
        let location = sec.getBoundingClientRect(); // get the section dimensions
        let allAnchors = document.querySelectorAll('.menu__link'); // store all anchors
        if (location.top > -50 && location.top < 250) { // condition for selecting section in viewport
            removeActiveClass(); // remove active classs from sections
            addActiveClass(sec); // applying active class to the section in viewport
        }
        allAnchors.forEach(link => {
            link.classList.remove('active__class');
            if (sec.getAttribute('data-nav') == link.textContent ) {
                link.classList.add('active__class');
            }
        });
    });
}
    
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
window.addEventListener('scroll', toggleActiveClass);

// Build menu 
createNavItems();

// Scroll to section on link click


// Set sections as active

