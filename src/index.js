const bruv = "maGuy";
console.log(`Hey there ${bruv}`);

const test = () => {};
export default test;

/**
 * toggles the navBar
 * @param {string} elementIdentifier  the identifier of an element. Can
 *                                    be an element id, class, or attribute
 * @param {string} classToToggle  the class name to toggle
 */
const toggleNav = (elementIdentifier, classToToggle) => {
  const element = document.querySelector(elementIdentifier);

  // Return false if no element is found
  if (!element) {
    console.log("Element not found");
  }

  console.log("toggle nav>>>>>>>");

  // Toggle open class
  element.classList.toggle(classToToggle);
};

// Add click event from navBtn
const navBtn = document.querySelector("#nav-toggle-btn");
navBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleNav("#nav-links", "nav__links--open");
  toggleNav("#nav-toggle-btn", "nav__toggle__btn--open");
});
