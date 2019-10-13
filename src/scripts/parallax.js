import constants from '../styles/variables.json';

const parallax = document.querySelector('.parallax');
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {
  Array.from(layers).forEach((layer) => {
    const divider = layer.dataset.speed;
    const offset = -wScroll / divider;
    layer.style.transform = `translate3d(0, ${offset}px, 0)`;
  });
}

window.addEventListener('scroll', () => {
  if (window.innerWidth > parseInt(constants['bp-tablets']) + 1) {
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
  }
});
