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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const navList = document.querySelector("#navbar__list");


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
/** Navigation is built dynamically as an unordered list. 
Start with empty ul and dynamically build navigation using 
Append, appendChild, and innerHTML.*/

sections.forEach((section) => {
  // Create a list item for the section
  const listItem = document.createElement("ul");
  const link = document.createElement("a");
  link.setAttribute("class", "menu__link");
  link.textContent = section.dataset.nav;
  link.setAttribute("data-link",link.textContent)
  listItem.appendChild(link);
  navList.appendChild(listItem);
  link.addEventListener("click", (event) => {
    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', () => {
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.clientHeight;
  
      if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight >= window.innerHeight / 2) {
        currentSection = section.dataset.nav;
        
      }
    });
    const Listitem = document.querySelector("[data-link='"+currentSection+"']");
    let activeLink = document.querySelector('.menu__link_active');
   
    if (activeLink) {
      activeLink.classList.remove('menu__link_active');
    }
    activeLink = Listitem;
    if (activeLink) {
        activeLink.classList.add('menu__link_active');
    }
  });

 



/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// It should be clear which section is being viewed while scrolling through the page.
// Tip: Detect the element location relative to the viewport using .getBoundingClientRect() built-in function.

// When clicking an item from the navigation menu, the link should scroll to the appropriate section.
// You can use the following methods to fulfill this criterion:

// Use addEventListener('click',....) to listen to the click event.
// Use preventDefault() as if there is a default event occurring we need to stop that.
// There are several javascript methods for scrolling, scroll(), scrollBy(), and scrollIntoView() are all acceptable.
// A smooth scrolling behavior is expected in the project.

//See the "Suggested" items section in Development Strategy in the classroom.

// Add an active state to your navigation items when a section is in the viewport.
// Hide fixed navigation bar while not scrolling (it should still be present on page load).
// Hint: setTimeout can be used to check when the user is no longer scrolling.
// Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.
// Update/change the design/content.
// Make sections collapsible.

// navbar__menu ul
// .navbar__menu li
// .navbar__menu .menu__link {
// .navbar__menu .menu__link:hover {
