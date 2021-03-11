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
    imgElement.addEventListener('click', () => {
      const circle = chosen.querySelectorAll('.circle');
      let element = imgElement.className.split(' ')[1];
      let randElement = getRandomElement();

      circleContainer.style.display = 'none';
      resultContainer.style.display = 'flex';
      circle[0].setAttribute('src', `/images/${element}.svg`);
      circle[0].setAttribute('class', `circle ${element}`);
      circle[1].setAttribute('src', `/images/${randElement}.svg`);
      circle[1].setAttribute('class', `circle ${randElement}`);

      updateScore(element, randElement);
    });
  });
}

function getRandomElement() {
  const elementLength = elements.length;
  const rand = Math.floor(Math.random() * elementLength);
  return elements[rand];
}

function updateScore(elementUser, elementComputer) {
  let tempScore = 0;

  switch(elementUser) {
    case 'water': 
      if (elementComputer == 'fire') {
        tempScore += 1;
      };
      break;
    case 'fire':
      if (elementComputer == 'metal') {
        tempScore += 1;
      };
      break;
    case 'metal':
      if (elementComputer == 'wood') {
        tempScore += 1;
      };
      break;
    case 'wood':
      if (elementComputer == 'earth') {
        tempScore += 1;
      };
      break;
    case 'earth':
      if (elementComputer == 'water') {
        tempScore += 1;
      };
      break;
    default: 
      return;
  }

  const scoreText = score.querySelector('.value').textContent;
  const newScore = tempScore + parseInt(scoreText);
  score.querySelector('.value').textContent = newScore;
}