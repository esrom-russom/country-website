// Main Navigation Toggle
const button = document.getElementById('main-nav-button')

const links = document.getElementById('main-nav-list')

button.addEventListener('click', function(){
     links.classList.toggle('toggled')
})

 

// Thumb Navigation Toggle
const ThumButton = document.getElementById('thumb-nav-button')

const thumbLinks = document.getElementById('thumb-nav-secondary')

ThumButton.addEventListener('click', function(){
     thumbLinks.classList.toggle('toggled')
})