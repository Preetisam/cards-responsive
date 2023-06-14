let red = document.getElementById('red')
let black = document.getElementById('black')
let orange = document.getElementById('orange')
let productImage = document.getElementsByTagName('img')[0];
let btnColor = document.querySelector('.buy-btn');

red.addEventListener('click', () => {
  productImage.setAttribute('src', './assets/red.jpg');
  btnColor.style.backgroundColor = '#E64040';
});

orange.addEventListener('click', () => {
  productImage.setAttribute('src', './assets/orange.jpg');
  btnColor.style.backgroundColor = '#FE72427';
});

black.addEventListener('click', () => {
  productImage.setAttribute('src', './assets/black.jpg');
  btnColor.style.backgroundColor = 'black';
});