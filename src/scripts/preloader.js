const preloader = document.querySelector('.preloader');

window.addEventListener("load", () => {  
  preloader.style.display = 'none';
  document.body.style.overflow = 'auto';
});