const links = document.querySelectorAll('a');
const inputs = document.querySelectorAll('input');
const cartIcons = document.querySelectorAll('.cart-icon');
const productsInCart = [];


function categoriesAddListener(){
  for(let link of links){
    link.addEventListener('click', linkClickHandler);
  }
}

function linkClickHandler(event){
  event.preventDefault();

  const clickedActive = document.querySelector('.active');
  if(clickedActive !==null){
    clickedActive.classList.remove('active');
  }

  const clickedElement = event.target;
  const href = clickedElement.getAttribute('href');
  const category = href.replace('#', '');
  const categoryName = document.querySelector(`[data-category=${category}]`);
  categoryName.classList.add('active');
}

function inputsListener(){
  for(let input of inputs){
    input.addEventListener('change', inputCheck);
  }
}

function inputCheck(event){
  const clickedElement = event.target;
  const oldValue = clickedElement.value;

  if(oldValue <= 0){
    clickedElement.value = 1;
  }
}

function cartIconListener(){
  for(let cartIcon of cartIcons){
    cartIcon.addEventListener('click', addToCart);
  }
}

function addToCart(event){
  const clickedElement = event.target;
  const cartElement = clickedElement.closest('li');
  const cartInput = cartElement.querySelector('input');
  const cartValue = cartInput.value;
  const cartName = cartElement.textContent;
  const newProduct = {};

  newProduct.value = cartValue;
  newProduct.name = cartName;
  productsInCart.push(newProduct);
  render();
  canIconListener();
}

function canIconListener(){
  const canIcons = document.querySelectorAll('.can-icon');
  for(let canIcon of canIcons){
    canIcon.addEventListener('click', removeFromCan);
  }
}

function removeFromCan(event){
  const clickedElement = event.target;
  const cartElement = clickedElement.closest('div');
  const textCartElem = cartElement.textContent;
  const productName = textCartElem.split(' ');
  const productIndex = productsInCart.findIndex(x => x.name === productName);
  productsInCart.pop(productIndex, 1);
  render();

}

function render(){
  const cart = document.querySelector('.cart');
  let HTML = '';
  for(let productInCart of productsInCart){
    const generated = `<div>${productInCart.name} ${productInCart.value} <i class="fa-regular fa-trash-can can-icon"></i></div>`;
    HTML = HTML + generated;
  }
  cart.innerHTML = HTML;
}

cartIconListener();
categoriesAddListener();
inputsListener();
render();

