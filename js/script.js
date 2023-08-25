const marioJump = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');
let count = 0;

const jump = () => {
    marioJump.classList.add('jump');
    setTimeout(() => {
        marioJump.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(marioJump).bottom.replace('px', ' ');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <80){
        count = -1;

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        marioJump.style.animation = 'none';
        marioJump.style.bottom = `${marioPosition}px`;

        marioJump.src = './images/game-over.png';
        marioJump.style.width = '75px';
        marioJump.style.marginLeft = '50px';

    }

    
}, 10);

const scoreCount = setInterval(()=> {
    count++
    score.innerHTML = `SCORE: ${count}`;
},15)

document.addEventListener('keydown', (e) => {
    if((e.code === "ArrowUp") | (e.code === "Space")) {
        jump()
    }
});

    