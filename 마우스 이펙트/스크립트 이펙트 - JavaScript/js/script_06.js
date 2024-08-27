function mouseMove(e) {
    let pageX = 0,
        pageY = 0,
        standardX,
        standardY,
        maxX = 0,
        maxY = 0,
        angleX = 0,
        angleY = 0,
        softX = 0,
        softY = 0;

    // 마우스 좌표 값 설정
    pageX = e.pageX;
    pageY = e.pageY;

    // 기준점을 가운데로 설정
    standardX = window.innerWidth / 2 - pageX;
    standardY = window.innerHeight / 2 - pageY;

    // 최소값, 최대값 설정
    maxX = Math.max(-850, Math.min(850, standardX));
    maxY = Math.max(-250, Math.min(250, standardY));

    // 각도를 줄이는 설정
    angleX = maxX * 0.12;
    angleY = maxY * 0.12;

    // 부드럽게 설정
    softX += (angleX - softX) * 0.4;
    softY += (angleY - softY) * 0.4;

    // 이미지 움직임 설정
    const move = document.querySelector(".moveImage");
    move.style.transform = "translate(-50%, -50%) perspective(600px) rotateX(" + softY + "deg) rotateY(" + -softX + "deg)";

    // 커서 표시
    gsap.to(".cursor", { duration: 0.3, left: pageX, top: pageY });

    // 출력
    document.querySelector(".pageX").textContent = pageX;
    document.querySelector(".pageY").textContent = pageY;
    document.querySelector(".standardX").textContent = standardX;
    document.querySelector(".standardY").textContent = standardY;
    document.querySelector(".maxX").textContent = maxX;
    document.querySelector(".maxY").textContent = maxY;
    document.querySelector(".angleX").textContent = parseInt(angleX);
    document.querySelector(".angleY").textContent = parseInt(angleY);
}

document.addEventListener("mousemove", mouseMove);