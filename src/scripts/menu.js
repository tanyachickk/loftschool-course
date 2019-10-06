const closedClass = 'hamburger_closed';
const menu = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const anchors = document.querySelectorAll('a[href*="#"]');

function closeMenu() {
  document.body.style.overflow = 'auto';
  menu.classList.remove(closedClass);
}

function openMenu() {
  document.body.style.overflow = 'hidden';
  menu.classList.add(closedClass);
}

function isMenuOpened() {
  return menu.classList.contains(closedClass);
}

function onHamburgerClick(event) {
  event.stopPropagation();
  if (isMenuOpened()) {
    closeMenu();
  } else {
    openMenu();
  }
}

document.addEventListener('click', (event) => {
  const isClickInside = sidebar.contains(event.target);
  if (isMenuOpened() && !isClickInside) {
    closeMenu();
  }
});

menu.addEventListener('click', onHamburgerClick);

for (let anchor of anchors) {
  anchor.addEventListener('click', closeMenu);
}
