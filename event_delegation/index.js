const navbar = document.getElementById('navbar');

navbar.addEventListener('click', function(event) {
  if(event.target.tagName === 'LI') {
    console.log(event.target.textContent + ' clicked');
  }
});


