const links = document.querySelectorAll('a');

function categoriesAddListener(){
  for(let link of links){
    link.addEventListener('click', linkClickHandler);
  }
}

function linkClickHandler(event){
  event.preventDefault();
  const clickedElement = event.target;
  console.log('ddd', clickedElement)
  const href = clickedElement.getAttribute('href');
  const category = href.replace('#', '');
  const categoryName = document.querySelector(`[data-category=${category}]`);
  categoryName.classList.add('active');
  console.log('categoryName', categoryName);

}

categoriesAddListener();
