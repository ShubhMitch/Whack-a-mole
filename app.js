const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')

let start = document.querySelector('.start')
let result = 0;
let currentTime = timeLeft.textContent;

start.addEventListener('click', startGame)
function startGame(){
    start.classList.add('unclickable')
    function randomSquare(){

        square.forEach(className => {
            className.classList.remove('mole')
        })
    
        let randomPosition = square[Math.floor(Math.random() * 9)]
        randomPosition.classList.add('mole')
    
    
        hitPosition = randomPosition.id;
    }
    
    square.forEach(id =>{
        id.addEventListener('mouseup', ()=>{
            if(id.id === hitPosition){
                result = result+1
                score.textContent = result
            }
    
        })
    })
    
    function moveMole(){
        let timerId = null
        timerId = setInterval(randomSquare, 500)
    }
    
    moveMole();
    
    function countDown(){
        currentTime--
        timeLeft.textContent = currentTime
    
        if(currentTime === 0){
            clearInterval(timerId)
            alert('Game over! Your final score is: ' + result)
            setInterval(() => {
                location.reload();
                
            }, 800);
        }
    }
    let timerId = setInterval(countDown, 1000)
}
