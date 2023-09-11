let moveCounter = 0;
let isMoving = false;

function moveButton() {
    const nopeButton = document.querySelector('.nope');
    const randomX = Math.floor(Math.random() * (window.innerWidth - nopeButton.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - nopeButton.clientHeight));
    nopeButton.style.left = `${randomX}px`;
    nopeButton.style.top = `${randomY}px`;
    
    if (isMoving) {
        requestAnimationFrame(moveButton);
    }
}

function toggleMove() {
    if (moveCounter % 2 === 0) {
        isMoving = true;
        moveButton();
    } else {
        isMoving = false;
    }
    
    moveCounter++;
}

function rightChoice(){
    window.alert('Parabéns, escolha certa!!! Estamos casados! 😁❤😍')
}
