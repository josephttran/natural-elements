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