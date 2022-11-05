
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const images = {};
images.player = new Image();
images.player.src = "karenSpritesTest.png";

const playerWidth = 237.71;
const playerHeight = 139.5;

let playerFrameX = 0;
let playerFrameY = 0;
let playerX = 50;
let playerY = 50;
const playerSpeed = 2;

let blink = 0;
let blinkOn = 9;
let getHit = 0;

function drawSprite(img, sX, SY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, SY, sW, sH, dX, dY, dW, dH);
}

function showtime(){
    ctx.clearRect(0,0,canvas.width, canvas.height);

    drawSprite(images.player, playerWidth * playerFrameX , playerHeight * playerFrameY, playerWidth, playerHeight, playerX, playerY, playerWidth, playerHeight);

    if (getHit == 1) {
        hurt();
    }

}


function wave() {
    if (playerFrameY != 0 && playerFrameY != 1) {
        playerFrameX = 1;
        playerFrameY = 0;
    }
    else {
        playerFrameX += 1;
    }


    if (playerFrameX > 6 && playerFrameY == 0) {
        playerFrameX = 0;
        playerFrameY = 1;
    }
    else if (playerFrameX > 6 && playerFrameY == 1) {
        playerFrameX = 0;
        playerFrameY = 0;
    }
    
}

function left() {
    if (playerFrameY != 14) {
        playerFrameY = 14;
        playerFrameX = 0;
    }
    else {
        playerFrameX += 1;
        playerX +=5;
    }

    if (playerFrameX > 3) {
        playerFrameX = 0;
    }
    

}

function right() {
    if (playerFrameY != 15) {
        playerFrameY = 15;
        playerFrameX = 0;
    }
    else {
        playerFrameX += 1;
        playerX -=5;
    }

    if (playerFrameX > 3) {
        playerFrameX = 0;
    }
}

function damage() {
    getHit = 1;
}

function hurt() {
    if (playerFrameY != 18 && playerFrameY != 19) {
        if (playerFrameX != 0) {
            playerFrameX = 0;
        }
        if (playerFrameY == 15) {
            playerFrameY = 19;
        }
        else {
            playerFrameY = 18;
        }
    }
    else {
        playerFrameX += 1;
    }
    if (playerFrameX >= 4) {
        getHit = 0;
        if (playerFrameY == 19){
            playerFrameY = 3;
            playerFrameX = 0;
        }
        else {
            playerFrameY = 2;
            playerFrameX = 0;
        }
    }
}



window.onload = setInterval(showtime, 100);

window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})