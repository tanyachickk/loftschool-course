document.body.addEventListener('mousedown', function() {
  document.body.classList.add('using-mouse');
});
document.body.addEventListener('keydown', function({ code }) {
  if (code === 'Tab') {
    document.body.classList.remove('using-mouse');
  }
});
