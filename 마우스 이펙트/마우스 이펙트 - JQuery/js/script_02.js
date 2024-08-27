const cursor = $(".cursor");
const follower = $(".cursor-follower");

//움직임 효과
$(window).mousemove(function (e) {
    // cursor.css({ left: e.pageX - 5, top: e.pageY - 5 });
    // follower.css({ left: e.pageX - 15, top: e.pageY - 15 });
    gsap.to(cursor, { duration: 0.3, left: e.pageX - 5, top: e.pageY - 5 });
    gsap.to(follower, { duration: 0.3, left: e.pageX - 15, top: e.pageY - 15 });
});

// 오버효과
$(".mouseCont em").hover(function () {
    cursor.addClass("active");
    follower.addClass("active");
}, function () {
    cursor.removeClass("active");
    follower.removeClass("active");
});

$(".info").hover(function () {
    cursor.addClass("show");
    follower.addClass("show");
}, function () {
    cursor.removeClass("show");
    follower.removeClass("show");
});

// 출력용
$(window).mousemove(function (e) {
    $(".pageX").text(e.pageX + "px");
    $(".pageY").text(e.pageY + "px");
});