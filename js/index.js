// using this file is optional
// you can also load the code snippets in using your browser's console
console.log('JavaScript is loaded');

const a = document.querySelector('#main');
console.log(a);
a.addEventListener('click', (event) => {
  alert('I was clicked');
});
