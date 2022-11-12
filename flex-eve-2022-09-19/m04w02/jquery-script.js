// $$$ talks
$ == jQuery

// select an element
console.log('vanilla JS h1 element:', document.querySelector('h1'))
console.log('jQuery h1 element:', $('h1'))

console.log($('h1').text())

// add an item into the list
// Note that $('<li>') creates a new <li> element, while $('li') selects all <li> elements
const $li = $('<li>').text('Five')
// main-list is an id so needs a # selector
const $list = $('#main-list')
$list.append($li)

$('h1').on('click', (event) => {
  window.alert('h1 is clicked')
})

$('body').on('click', 'li', (event) => {
  console.log(event.target)
});