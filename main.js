const elements = ['earth', 'fire', 'metal', 'water', 'wood'];

const score = document.querySelector('.score');
const water = document.querySelector('#water');
const fire = document.querySelector('#fire');
const metal = document.querySelector('#metal');
const wood = document.querySelector('#wood');
const earth = document.querySelector('#earth');
const circleContainer = document.querySelector('.circle-container');
const resultContainer = document.querySelector('.result-container');
const chosen = document.querySelector('.chosen');
const winLose = document.querySelector('.win-lose');
const buttonPlay = document.querySelector('.btn-play');
const info = document.querySelector('.info');
const buttonInfo = document.querySelector('.btn-info');
const buttonInfoClose = document.querySelector('.btn-info-close');

buttonInfo.addEventListener('click', () => {
  console.log('hey');
  info.style.display = 'flex';
});

buttonInfoClose.addEventListener('click', () => {
  info.style.display = 'none';
});

buttonPlay.addEventListener('click', () => {
  resultContainer.style.display = 'none';
  circleContainer.style.display = 'flex';
});

water.addEventListener('click', (e) => {
  const randElement = getRandomElement();
  const circle = chosen.querySelectorAll('.circle');

  circleContainer.style.display = 'none';
  resultContainer.style.display = 'flex';
  circle[0].setAttribute('src', '/images/water.svg');
  circle[1].setAttribute('src', `/images/${randElement}.svg`);
});

fire.addEventListener('click', () => {
  const randElement = getRandomElement();
  const circle = chosen.querySelectorAll('.circle');
 
  circleContainer.style.display = 'none';
  resultContainer.style.display = 'flex';
  circle[0].setAttribute('src', '/images/fire.svg');
  circle[1].setAttribute('src', `/images/${randElement}.svg`);
});

metal.addEventListener('click', () => {
  const randElement = getRandomElement();
  const circle = chosen.querySelectorAll('.circle');
 
  circleContainer.style.display = 'none';
  resultContainer.style.display = 'flex';
  circle[0].setAttribute('src', '/images/metal.svg');
  circle[1].setAttribute('src', `/images/${randElement}.svg`);
});

wood.addEventListener('click', () => {
  const randElement = getRandomElement();
  const circle = chosen.querySelectorAll('.circle');

  circleContainer.style.display = 'none';
  resultContainer.style.display = 'flex';
  circle[0].setAttribute('src', '/images/wood.svg');
  circle[1].setAttribute('src', `/images/${randElement}.svg`);
});

earth.addEventListener('click', () => {
  const randElement = getRandomElement();
  const circle = chosen.querySelectorAll('.circle');
  
  circleContainer.style.display = 'none';
  resultContainer.style.display = 'flex';
  circle[0].setAttribute('src', '/images/earth.svg');
  circle[1].setAttribute('src', `/images/${randElement}.svg`);
});

function getRandomElement() {
  const elementLength = elements.length;
  const rand = Math.floor(Math.random() * elementLength);
  return elements[rand];
}