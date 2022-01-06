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

const data = [{
  id: 0,
  name: 'Moritz Baier-Lentz',
  image: './images/speaker1.jpg',
  description: 'Moritz Baier-Lentz is the Partner at BITKRAFT Ventures. Additionally, Moritz Baier-Lentz has had 3 past jobs including Vice President and Co-Head of Gaming and Esports at Goldman Sachs.',
  role: 'Investment Partner',
},
{
  id: 1,
  name: 'Jamison Selby',
  image: './images/speaker2.jpg',
  description: 'Jamison Selby is a dynamic, entrepreneurial, customer-focused, Gaming executive with many years’ experience leading cross-disciplinary design and production teams in the creation, marketing and live operation of multiplayer games and interactive entertainment',
  role: 'SVP, Games & Marketing',
},
{
  id: 2,
  name: 'Zai Ortiz',
  image: './images/speaker3.jpg',
  description: 'Zai Ortiz is the visionary entrepreneur-turned game maker who sits behind the wheel of multiple million-dollar creative projects. With a 20 year career defined by cutting-edge technology – whether in Hollywood visual effects or interactive game development',
  role: 'visionary entrepreneur',
},
{
  id: 3,
  name: 'Mariusz Gasiewski',
  image: './images/speaker4.jpg',
  description: 'Mariusz Gasiewski has 2 current jobs as CEE Mobile Gaming Lead at Google and Head of Mobile Gaming and Apps Poland at Google. Additionally, Mariusz Gasiewski has had 5 past jobs including CEE Performance Activation Lead at Google.',
  role: ' CEE Mobile Gaming Lead',
},
];

const cards = document.querySelector('.speakers');
for (let i = 0; i < data.length; i += 1) {
  const Card = document.createElement('div');
  Card.className = 'card';
  const datas = `
  <div>
  <img src="${data[i].image}" alt="speaker">
  </div>
  <div class="about-speakers">
    <h3>${data[i].name}</h3>
    <h4>${data[i].role}</h4>
    <p>${data[i].description}</p>
  </div>
  </div>
  `;
  Card.innerHTML = datas;
  cards.appendChild(Card);
}