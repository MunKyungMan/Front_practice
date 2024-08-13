let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);

let backgroundImage, spaceshipImage, bulletImage, enemyImage, gameOverImage;
let gameOver = false; // true 이면 게임이 끝남, false이면 게임이 안끝남
let score = 0;

//우주선 좌표 구하기
let spaceshipX = canvas.width / 2 - 32;
let spaceshipY = canvas.height - 64;

let bulletList = [] //총알들을 저장하는 리스트
function Bullet() {
    this.x = 0;
    this.y = 0;
    this.init = function () {
        this.x = spaceshipX + 19;  //총알 가운데 
        this.y = spaceshipY;
        this.alive = true // true면 살아있는 총알 false면 죽은 총알
        bulletList.push(this);
    };
    this.update = function () {
        this.y -= 3; //총알 발사
    };

    this.checkHit = function () {
        //총알.y <= 적군.y And
        //총알.x >= 적군.x and 총알.x <= 적군.x + 적군의 넓이
        for (let i = 0; i < enemyList.length; i++) {
            if (
                this.y <= enemyList[i].y &&
                this.x >= enemyList[i].x &&
                this.x <= enemyList[i].x + 40
            ) {
                //총알이 죽게됨 적군의 우주선이 없어짐, 점수 휙득
                score++;
                this.alive = false; //죽은 총알
                enemyList.splice(i, 1);
            };
        }

    }
}

function generateRandomValue(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

let enemyList = []

function Enemy() {
    this.x = 0;
    this.y = 0;
    this.init = function () {
        this.y = 0;
        this.x = generateRandomValue(0, canvas.width - 48);
        enemyList.push(this);
    };
    this.update = function () {
        this.y += 1; //적 우주선 속도 조절

        if (this.y >= canvas.height - 48) {
            gameOver = true;
            console.log("gameover");
        }
    };
}

function loadImage() {
    backgroundImage = new Image();
    backgroundImage.src = "images/background.gif";

    spaceshipImage = new Image();
    spaceshipImage.src = "images/spaceship.png";

    bulletImage = new Image();
    bulletImage.src = "images/bullet.png";

    gameOverImage = new Image();
    gameOverImage.src = "images/gameover.png";

    enemyImage = new Image();
    enemyImage.src = "images/enemy.png";
}

let keysDown = {}
function setupKeyboardListener() {
    document.addEventListener("keydown", function (event) {
        keysDown[event.keyCode] = true;
    });
    document.addEventListener("keyup", function () {
        delete keysDown[event.keyCode];

        if (event.keyCode == 32) {
            createBullet(); //총알 생성 
        }
    });
}

function createBullet() {
    console.log("총알 생성!");
    let b = new Bullet(); // 총알 하나 생성
    b.init();
    console.log("새로운 총알 리스트", bulletList);
}

function createEnemy() {
    const interval = setInterval(function () {
        let e = new Enemy();
        e.init();
    }, 1000)  //setInterval(호출하고 싶은 함수, 시간)
}

function update() {
    if (39 in keysDown) {
        spaceshipX += 3;  // 오른쪽
    }
    if (37 in keysDown) {
        spaceshipX -= 3; // 왼쪽
    }

    if (spaceshipX <= 0) {
        spaceshipX = 0;
    }
    if (spaceshipX >= canvas.width - 64) {
        spaceshipX = canvas.width - 64;
    }

    //총알의 y좌표 업데이트 하는 함수 호출
    for (let i = 0; i < bulletList.length; i++) {
        if (bulletList[i].alive) {
            bulletList[i].update();
            bulletList[i].checkHit();
        }
    }
    for (let i = 0; i < enemyList.length; i++) {
        enemyList[i].update();

    }
}

function render() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
    ctx.fillText(`Score:${score}`, 20, 20);
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    for (let i = 0; i < bulletList.length; i++) {
        if (bulletList[i].alive) {
            ctx.drawImage(bulletImage, bulletList[i].x, bulletList[i].y);
        }

    }

    for (let i = 0; i < enemyList.length; i++) {
        ctx.drawImage(enemyImage, enemyList[i].x, enemyList[i].y);
    }
}

function main() {
    if (!gameOver) {
        update(); //좌표값을 업데이트
        render(); //그리기
        requestAnimationFrame(main);
    } else {
        ctx.drawImage(gameOverImage, 10, 100, 380, 380);
    }
}

loadImage();
setupKeyboardListener();
createEnemy();
main();