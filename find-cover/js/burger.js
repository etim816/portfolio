'use strict';

(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerContain = document.getElementsByClassName('b-container')[0];
  var burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);
})();

document.body.addEventListener('click', function (e) {
  if (e.target === document.body) {
    [document.body, document.querySelector('.b-container'), document.querySelector('.b-nav')]
      .forEach(el => el.classList.remove('open'));
  }
});