'use strict';

// nav buttons variables
const hamburger = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

// navbar variables
const navBar = document.querySelector('.navbar-nav');

// navbar toggle function
const navBarToggle = () => navBar.classList.toggle('active');

hamburger.addEventListener('click', navBarToggle);
closeBtn.addEventListener('click', navBarToggle);

AOS.init({
  duration: 1000,
  offset: 150,
});
