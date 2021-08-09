const warrior = document.querySelector('.warrior');
const zombie = document.querySelector('.zombie');

document.addEventListener('keydown', (e) => {
    jump();
})

function jump(){
warrior.classList.add('jump')
}