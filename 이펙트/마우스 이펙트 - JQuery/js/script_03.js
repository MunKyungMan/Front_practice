// 움직임 효과
$(window).mousemove(function(e){
    gsap.to(".cursor", {duration: 0.4, left: e.pageX, top: e.pageY});
});

// 오버효과
$(".mouseCont em").hover(function(){
    $(".cursor").addClass("active");
}, function(){
    $(".cursor").removeClass("active");
});