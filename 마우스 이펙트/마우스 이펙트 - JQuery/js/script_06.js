let pageX = 0,
    pageY = 0,
    standardX = 0,
    standardY = 0,
    maxX = 0,
    maxY = 0,
    angleX = 0,
    angleY = 0,
    softX = 0,
    softY = 0;

$(window).mousemove(function (e) {
    pageX = e.pageX;
    pageY = e.pageY;

    // 마우스 좌표값 가운데로 설정
    standardX = $(window).width() / 2 - pageX;    // 마우스 X좌표 값을 가운데로 설정
    standardY = $(window).height() / 2 - pageY;    // 마우스 Y좌표 값을 가운데로 설정

    // 마우스 좌표값을 최대값, 최소값 설정(50, -50)
    maxX = Math.max(-50, Math.min(50, standardX));
    maxY = Math.max(-50, Math.min(50, standardY));

    // 각도를 줄이는 설정
    angleX = maxX * 0.12;
    angleY = maxY * 0.12;

    // 부드럽게 설정
    softX += (angleX - softX) * 0.1;
    softY += (angleY - softY) * 0.1;

    // 움직이기
    $(".moveImage").css({ "transform": "translate(-50%, -50%) perspective(600px) rotateX(" + softY + "deg) rotateY(" + -softX + "deg)" });

    // 커서
    gsap.to(".cursor", {duration: 0.3, left: pageX, top: pageY});
    
    // 출력
    $(".pageX").text(pageX);
    $(".pageY").text(pageY);
    $(".standardX").text(standardX);
    $(".standardY").text(standardY);
    $(".maxX").text(maxX);
    $(".maxY").text(maxY);
    $(".angleX").text(parseInt(angleX));
    $(".angleY").text(parseInt(angleY));
})