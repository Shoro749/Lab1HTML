const themeLinks = document.querySelectorAll('[href="#topics"]');

themeLinks.forEach(function (themeLink) {
  themeLink.addEventListener('click', function () {
    themeLink.textContent = 'Теми відкрито';
    console.log('Розділ "Теми" відкрито');
  });
});