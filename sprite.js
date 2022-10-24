
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// load images

const images = {};
images.player = new Image();
images.player.src = 'testSheet2.png';

const playerWidth = 63;
const playerHeight = 62.5;

let playerFrameX = 0;
let playerFrameY = 11;
let playerX = 50;
let playerY = 50;
let slow = 0;
const playerSpeed = 2;

function drawSprite(img, sX, SY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, SY, sW, sH, dX, dY, dW, dH);
}

function showtime(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawSprite(images.player, playerWidth * playerFrameX, playerHeight * playerFrameY, playerWidth, playerHeight, playerX, playerY, playerWidth, playerHeight);

}

function leftMove() {
    playerX -= 1;
    if (playerFrameX <= 1) {
        playerFrameX = 7;
    }
    else if (playerFrameX == 7) {
        playerFrameX -=3;
    }
    else {
        playerFrameX -=1;
    }
    play
}

function rightMove() {
    if (playerFrameX > 7) {
        playerFrameX = 1;
    }
    else if (playerFrameX == 4) {
        playerFrameX +=3;
    }
    else {
        playerFrameX +=1;
    }

}   

function upMove() {
    playerY -= 10;
}

function downMove() {
    playerY += 10;
}

window.onload = setInterval(showtime, 60);

//resizing 
window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})
