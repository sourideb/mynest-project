let selectedOption = 'a'; // Set Option A as the default selected option

document.addEventListener('DOMContentLoaded', function() {
  const defaultOption = document.getElementById('category-section-div1');
  defaultOption.classList.add('selected');
  showPictures('a');
});

function selectOption(event) {
  event.preventDefault();

  const currentElement = event.target;         //.parentElement.parentElement;
  const previousElement = document.querySelector('.category-section-div.selected');

  previousElement.classList.remove('selected');

  if (currentElement.classList.contains('category-section-div')){
    currentElement.classList.add('selected');
  }
  else if (currentElement.parentElement.classList.contains('category-section-div')){
    currentElement.parentElement.classList.add('selected');
  }
  else if (currentElement.parentElement.parentElement.classList.contains('category-section-div')){
    currentElement.parentElement.parentElement.classList.add('selected');
  }
  
  // currentElement.classList.add('selected');

  // if (currentElement.classList.contains('category-section') || (currentElement === document.body)) {
  //   // 'currentElement' is a <div> with class 'category-section'
  //   const categorySectionDiv = document.querySelector('.category-section-div');
  //   if (categorySectionDiv) {
  //     currentElement = categorySectionDiv;
  //   }
  // }
  
  // Perform additional actions based on the selected option
  // For example, display corresponding content in the main section
}
