const elements = ['earth', 'fire', 'metal', 'water', 'wood'];

const score = document.querySelector('.score');
const circleContainer = document.querySelector('.circle-container');
const imgElements = document.querySelectorAll('.circle-container .circle');
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

addElementsClickEvent(imgElements);

function addElementsClickEvent(imgElements) {
  imgElements.forEach(imgElement => {
    let element = imgElement.className.split(' ')[1];
    imgElement.addEventListener('click', () => {
      let randElement = getRandomElement();
      const circle = chosen.querySelectorAll('.circle');

      circleContainer.style.display = 'none';
      resultContainer.style.display = 'flex';
      circle[0].setAttribute('src', `/images/${element}.svg`);
      circle[0].setAttribute('class', `circle ${element}`);
      circle[1].setAttribute('src', `/images/${randElement}.svg`);
      circle[1].setAttribute('class', `circle ${randElement}`);
    });
  });
}

function getRandomElement() {
  const elementLength = elements.length;
  const rand = Math.floor(Math.random() * elementLength);
  return elements[rand];
}