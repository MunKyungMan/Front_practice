const width = $(".cursor").width() / 2;
const height = $(".cursor").height() / 2;

// 움직임 효과
$(window).mousemove(function (e) {
    gsap.to(".cursor", { duration: 0.4, left: e.pageX, top: e.pageY });
});

// 오버효과
$(".mouseCont em").hover(function () {
    $(".cursor").addClass("active");
}, function () {
    $(".cursor").removeClass("active");
});

$(".info").hover(function () {
    $(".cursor").addClass("show");
}, function () {
    $(".cursor").removeClass("show");
})

// 출력용
$(window).mousemove(function (e) {
    $(".pageX").text(e.pageX + "px");
    $(".pageY").text(e.pageY + "px");
});