const links = document.querySelectorAll('a');

function categoriesAddListener(){
  for(let link of links){
    link.addEventListener('click', linkClickHandler);
  }
}

function linkClickHandler(event){
  event.preventDefault();
  const clickedElement = event.target;
  const href = clickedElement.getAttribute('href');
  const category = href.replace('#', '');
  const dataCategory = document.querySelector(`[data-category=${category}]`);
  dataCategory.classList.add('active');
}


categoriesAddListener();
