
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const images = {};
images.player = new Image();
images.player.src = "mainSpriteSheet.png";

const playerWidth = 78.57;
const playerHeight = 140.25;

let playerFrameX = 1;
let playerFrameY = 0;
let playerX = 50;
let playerY = 50;
const playerSpeed = 2;

function drawSprite(img, sX, SY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, SY, sW, sH, dX, dY, dW, dH);
}

function showtime(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawSprite(images.player, playerWidth * playerFrameX , playerHeight * playerFrameY, playerWidth, playerHeight, playerX, playerY, playerWidth, playerHeight);   
}

function wave() {
    playerFrameX += 3;

    if (playerFrameX > 20) {
        playerFrameX = 1;
    }
    /*
    if (playerFrameX > 19 && playerFrameY == 2) {
        playerFrameX = 1;
        playerFrameY = 3;
    }
    else if (playerFrameX > 19 && playerFrameY == 3) {
        playerFrameX = 1;
        playerFrameY = 2;
    }
    */
}

window.onload = setInterval(showtime, 60);

window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})