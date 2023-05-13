const h1 = document.querySelector('h1');

const $h1 = $('h1'); // selecting an existing h1 element === document.querySelector

const $h1_a = $('<h1>'); // creating a new and empty h1 element === document.createElement('h1')

// Grab our form
const $form = $('form');
// Grab the ul to append a new to-do item
const $ul = $('ul');
// Grab user text input
const $input = $('#new-to-do');


// React to the submit event the form
// form.addEventListener('submit', //do sth)
$form.on('submit', (event) => {
  event.preventDefault(); // PLEASE DO NOT SUBMIT THE FORM, I'm doing some JS magic here

  // Add input value to li
  const li = '<li>' + $input.val() +  '</li>';

  //append li to ul
  $ul.append(li);

  // clear input
  $input.val('');
});