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
positionElements();

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

      updateResultText(element, randElement);
      updateScore(element, randElement);
    });
  });
}

function getRandomElement() {
  const elementLength = elements.length;
  const rand = Math.floor(Math.random() * elementLength);
  return elements[rand];
}

function positionElements() {
  const circleContainer = document.querySelector('.circle-container');
  const imgElements = document.querySelectorAll('.circle-container .circle');
  const numElements = imgElements.length;
  const startAngle = 270;
  const angleBetween = 360 / numElements;
  const radiusCircle = circleContainer.offsetWidth / 2;
  const radiusElement = imgElements[0].offsetWidth / 2;
  const x = radiusCircle - radiusElement;

  for (let i = 0; i < numElements; i++) {
    const angle = startAngle + angleBetween * i;
    imgElements[i].style.position = 'absolute';
    imgElements[i].style.top = '50%';
    imgElements[i].style.left = '50%';
    imgElements[i].style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateX(${x}px) rotate(-${angle}deg)`;
  }

  // Lines
  const line = document.querySelectorAll('.circle-container .line-segment');
  const radian = angleBetween / 180 * Math.PI;
  const lineTranslateX = x * Math.cos(radian / 2);
  const lineWidth = 2 * x * Math.sin(radian / 2);
  let rotate = startAngle + angleBetween / 2;
  
  for (let i = 0; i <= line.length; i++)
  {
    line[i].style.position = 'absolute';
    line[i].style.width = `${lineWidth}px`;
    line[i].style.top = '50%';
    line[i].style.left = '50%';
    rotate += angleBetween;
    line[i].style.transform = `translate(-50%, -50%) rotate(${rotate}deg) translateX(${lineTranslateX}px) rotate(90deg)`;
  }
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

function updateResultText(elementUser, elementComputer) {
  const currentWinLose = document.querySelector('.win-lose');
  let winLoseText = 'You ';

  switch(elementUser) {
    case 'water': 
      if (elementComputer == 'fire') {
        winLoseText += 'Win';
      } else if (elementComputer == 'earth') {
        winLoseText += 'Lose';
      } else {
        winLoseText = 'Neutral';
      };
      break;
    case 'fire':
      if (elementComputer == 'metal') {
        winLoseText += 'Win';
      } else if (elementComputer == 'water') {
        winLoseText += 'Lose';
      } else {
        winLoseText = 'Neutral';
      };
      break;
    case 'metal':
      if (elementComputer == 'wood') {
        winLoseText += 'Win';
      } else if (elementComputer == 'fire') {
        winLoseText += 'Lose';
      } else {
        winLoseText = 'Neutral';
      };;
      break;
    case 'wood':
      if (elementComputer == 'earth') {
        winLoseText += 'Win';
      } else if (elementComputer == 'metal') {
        winLoseText += 'Lose';
      } else {
        winLoseText = 'Neutral';
      };
      break;
    case 'earth':
      if (elementComputer == 'water') {
        winLoseText += 'Win';
      } else if (elementComputer == 'wood') {
        winLoseText += 'Lose';
      } else {
        winLoseText = 'Neutral';
      };
      break;
    default: 
      break;
  }

  currentWinLose.textContent = winLoseText;
}
