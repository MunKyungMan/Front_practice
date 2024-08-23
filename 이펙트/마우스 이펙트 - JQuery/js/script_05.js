$(".moveImage").mousemove(function (e) {
    gsap.to(".cursor", { duration: 0.2, left: e.pageX - 10, top: e.pageY - 10 });

    let pageX = e.pageX;
    let pageY = e.pageY;

    // 기준점을 가운대로 맞추기 위한 코드
    let standardX = $(window).width() / 2 - pageX;
    let standardY = $(window).height() / 2 - pageY;

    // 움직이기
    $(".mImg img").attr({ "style": "transform: translate(" + standardX/20 + "px," + standardY/20 + "px)" });

    // 출력
    $(".pageX").text(e.pageX + "px");
    $(".pageY").text(e.pageY + "px");
    $(".standardX").text(standardX + "px");
    $(".standardY").text(standardY + "px");
});