const elMenu = document.getElementById('menu');
const elOpenMenu = document.getElementById('open-menu');
const elExit = document.getElementById('exit');

elMenu.addEventListener('click', function() {
    elOpenMenu.classList.remove('hidden')
    elOpenMenu.classList.add('block')
})

elExit.addEventListener('click', function() {
    elOpenMenu.classList.remove('block')
    elOpenMenu.classList.add('hidden')
})