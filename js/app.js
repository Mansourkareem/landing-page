//create and  Define a variable for navbar , section
const navbarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

const createNavbarList = () => {
    
    // loop through each section on the page
  for (const section of sections) {
    const sectionId = section.id;
    const sectionData = section.dataset.nav;
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a class="menu__link" herf="#${sectionId}">${sectionData}</a>`;

    // append the created li element to the navigation menu
    navbarList.appendChild(listItem);
    
    // add a click event listener to each of the links in the menu

    addClickEventListener(listItem, section);
  }
};
// call the function to create the navigation menu

createNavbarList();

function setActive() {
  const navItems = document.querySelectorAll("#navbar__list li a");
  for (const section of sections) {
    section.classList.remove("active");
    const pos = section.getBoundingClientRect().top;
    navItems.forEach((element) => {
      if (element.id.includes(section.id)) {
        element.classList.remove("active");
        if (pos >= 100 && pos <= 300) {
          element.classList.add("active");
          section.classList.add("activesection");
        } else {
          element.classList.remove("active");
          section.classList.remove("activesection");
        }
      }
    });
  }
}
document.addEventListener("scroll", setActive);
setActive();

function addClickEventListener(list, section) {
  list.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  });
}