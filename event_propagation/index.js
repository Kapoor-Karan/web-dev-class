const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent'); 
const child = document.getElementById('child');

grandparent.addEventListener('click', () => {
  console.log('Grandparent clicked');
});

parent.addEventListener('click', (event) => {
  console.log('Parent clicked');
  event.stopPropagation(); 
});

child.addEventListener('click', (event) => {
  console.log('Child clicked');
  event.stopPropagation();
});