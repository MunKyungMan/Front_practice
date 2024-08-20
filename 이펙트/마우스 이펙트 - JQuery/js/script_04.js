const width = $(".cursor").width() / 2;
const height = $(".cursor").height() / 2;

$(window).mousemove(function (e) {
    gsap.to(".cursor", { duration: 0.5, left: e.pageX - width, top: e.pageY - height });

    // 출력용
    $(".pageX").text(e.pageX + "px");
    $(".pageY").text(e.pageY + "px");
});