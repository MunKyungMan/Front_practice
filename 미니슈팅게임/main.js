// 캔버스 세팅
let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");  // 'document.getContext' 오타 수정
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);

// 이미지 불러오기
let backgroundImage, spaceshipImage, bulletImage, enemyImage, gameoverImage;

// 우주선 좌표
let spaceshipX = canvas.width / 2 - 24;
let spaceshipY = canvas.height - 48;

function loadImage() {
    backgroundImage = new Image();
    backgroundImage.src = "images/background.gif";
    
    bulletImage = new Image();
    bulletImage.src = "images/bullet.jpg";
    
    enemyImage = new Image();
    enemyImage.src = "images/enemy.png";

    gameoverImage = new Image();
    gameoverImage.src = "images/gameover.gif";

    spaceshipImage = new Image();
    spaceshipImage.src = "images/spaceship.png";
    
    // 이미지를 로드한 후에 render 함수를 호출
    backgroundImage.onload = function() {
        render();
    };
}

// 이미지 보여주기
function render() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
}

function main() {
    render();
    // console.log("animation calls main function")
    requestAnimationFrame(main);
}

loadImage();
main();
