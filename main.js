

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const sidebar = document.querySelector('.sidebar');

menuIcon.addEventListener('click', function() {
  sidebar.classList.add('show');
  menuIcon.classList.add('close');
  menuIcon.style.transform = "translateX(0)";
});

closeIcon.addEventListener('click', function() {
  sidebar.classList.remove('show');
  menuIcon.classList.remove('close');
  menuIcon.style.display = 'block';
});
