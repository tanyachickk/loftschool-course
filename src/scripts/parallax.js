import constants from '../styles/variables.json';

const mainParallax = document.querySelector('.parallax');
const mainLayers = mainParallax.children;

const leavesParallax = document.querySelector('.leaves-parallax');
const leaves = leavesParallax.children;

function moveLayersDependsOnScroll(layers, wScroll) {
  Array.from(layers).forEach((layer) => {
    const divider = layer.dataset.speed;
    const offset = -wScroll / divider;
    layer.style.transform = `translate3d(0, ${offset}px, 0)`;
  });
}

window.addEventListener('scroll', () => {
  if (window.innerWidth < parseInt(constants['bp-tablets'])) {
    return;
  }
  const wScroll = window.pageYOffset;

  const isMainParallax = window.innerHeight > wScroll;
  if (isMainParallax) {
    console.log('isMainParallax');
    moveLayersDependsOnScroll(mainLayers, wScroll);
    return;
  }

  const { top } = leavesParallax.getBoundingClientRect();
  const leavesParallaxOffset = window.innerHeight - top;
  const isLeavesParallax = leavesParallaxOffset > 0;
  if (isLeavesParallax) {
    console.log('isLeavesParallax', wScroll, top);

    moveLayersDependsOnScroll(leaves, leavesParallaxOffset);
    return;
  }
});
