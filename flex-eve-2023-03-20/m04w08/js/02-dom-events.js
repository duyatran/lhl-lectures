// When users click on my h1 heading, alert (like console.log) that 'h1 is clicked'

const h1 = document.querySelector('h1');

h1.addEventListener('click', (event) => {
  console.log(event);
  alert('h1 is clicked');
});




