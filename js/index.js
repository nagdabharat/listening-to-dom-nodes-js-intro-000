// using this file is optional
// you can also load the code snippets in using your browser's console
console.log('JavaScript is loaded');

//Flashing an alert when Main is clicked on
const main = document.querySelector('#main');
main.addEventListener('click', (event) => {
  alert('I was clicked');
});

//Capturing the user input in input text field
const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
  if(e.key === 'g') {
    return e.preventDefault();
  } else {
    console.log(e.key);
  }
});
