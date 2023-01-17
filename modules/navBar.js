// selecting buttons
const listbtn = document.querySelector('#link-list');
const addbtn = document.querySelector('#link-add');
const contactbtn = document.querySelector('#link-contact');
// slecting containers
const bc = document.querySelector('#list');
const ac = document.querySelector('#add-book');
const cc = document.querySelector('#contact');

// adding event listeners
addbtn.addEventListener('click', () => {
  bc.style.display = 'none';
  ac.style.display = 'flex';
  cc.style.display = 'none';
});

listbtn.addEventListener('click', () => {
  bc.style.display = 'flex';
  ac.style.display = 'none';
  cc.style.display = 'none';
});

contactbtn.addEventListener('click', () => {
  bc.style.display = 'none';
  ac.style.display = 'none';
  cc.style.display = 'flex';
});

// handle date