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
  name: 'Bilal Çinarli',
  image: 'images/speaker1.png',
  description: 'Bilal is Head of Frontend Architecture for adidas and Google Developer Expert on Web Technologies. He focuses on performance, optimization and code scalability.',
  role: 'Frontend Web Developer',
},
{
  id: 1,
  name: 'Christian Liebel',
  image: 'images/speaker2.png',
  description: 'Christian Liebel is a cross-platform development enthusiast thrilled by the opportunities offered by modern web technologies.',
  role: 'cross-platform development enthusiast',
},
{
  id: 2,
  name: 'Joel Lord',
  image: 'images/speaker3.png',
  description: 'Joel Lord is passionate about the web and technology in general. He likes to learn new things, but most of all, he wants to share his discoveries.',
  role: 'Developer advocate with MongoDB',
},
{
  id: 3,
  name: 'Tamar Stern',
  image: 'images/speaker4.png',
  description: 'She has a decade of software engineering experience in various technologies: Server side, big data, mobile, web technologies, and security.',
  role: 'Full-stack Software Developer',
},
{
  id: 4,
  name: 'Anuradha Kumari',
  image: 'images/speaker5.png',
  description: 'Anuradha is a frontend developer passionate about exploring new technologies and sharing knowledge through tech articles and talks.',
  role: 'Frontend Web Developer',
},
{
  id: 5,
  name: 'Syneva Runyan',
  image: 'images/speaker6.png',
  description: 'Syneva is an engineering manager based out of Atlanta, Georgia. She is passionate about people, processes, and JavaScript-powered projects.',
  role: 'Software engineer at MailChimp',
},
];


const cards = document.querySelector('.speakers');
for (let i = 0; i < data.length; i ++) {
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