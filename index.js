const hamburger = document.querySelector('#hamburger');
const closetog = document.querySelector('#togclose');
const toggleMenu = document.querySelector('.toggle-menu');

function show() {
  toggleMenu.style.display = 'block';
}

function close() {
  toggleMenu.style.display = 'none';
}

hamburger.addEventListener('click', show);
closetog.addEventListener('click', close);

document.querySelectorAll('.menu-list').forEach((link) => link.addEventListener('click', close));
