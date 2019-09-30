const closedClass = 'hamburger_closed';
const menu = document.querySelector('.hamburger');

function onHamburgerClick() {
  if (menu.classList.contains(closedClass)) {
      menu.classList.remove(closedClass);
  } else {
      menu.classList.add(closedClass);
  }
}

menu.addEventListener('click', onHamburgerClick);