const warrior = document.querySelector('.warrior');
const zombie = document.querySelector('.zombie');

document.addEventListener('keydown', (e) => {
    jump();
})

function jump() {
    if (warrior !== 'jump') {
        warrior.classList.add('jump')
    };
    setTimeout(function () {
        warrior.classList.remove('jump')
    }, 300);
}

let isAllive = setInterval(function(){
    let warriorTop = parseInt(window.getComputedStyle(warrior).getPropertyValue("top"));
    let zombieLeft = parseInt(window.getComputedStyle(zombie).getPropertyValue("left"));
    console.log(warriorTop)

    if(zombieLeft<50&&zombieLeft>0&&warriorTop>=140){
        alert('GAME OVER')
    }
},10)