//출력용
$(window).mousemove(function (event) {
    $(".clientX").text(event.clientX);  //브라우저 X좌표
    $(".clientY").text(event.clientY);  //브라우저 Y좌표
    $(".offsetX").text(event.offsetX);  //요소 X좌표
    $(".offsetY").text(event.offsetY);  //요소 Y좌표
    $(".pageX").text(event.pageX);      //페이지 X좌표
    $(".pageY").text(event.pageX);      //페이지 X좌표
    $(".screenX").text(event.screenX);  //디바이스 X좌표
    $(".screenY").text(event.screenY);  //디바이스 Y좌표
});

//마우스 움직이기
$(window).mousemove(function (e) {
    // $(".cursor").css("left", "100px");
    // $(".cursor").css("top", "100px");
    //$(".cursor").css({"left":"100px", "top":"100px"});
    //$(".cursor").css({ left:"100px", top:"100px"});
    //$(".cursor").css({ left: 100, top: 100});

    $(".cursor").css({ left: e.clientX - 25, top: e.clientY - 25 });
});

// 마우스 오버효과
// $(".mouseCont .style1").hover(function(){
//     $(".cursor").addClass("style1");
// }, function(){
//     $(".cursor").removeClass("style1");
// });
// $(".mouseCont .style2").hover(function(){
//     $(".cursor").addClass("style2");
// }, function(){
//     $(".cursor").removeClass("style2");
// });
// $(".mouseCont .style3").hover(function(){
//     $(".cursor").addClass("style3");
// }, function(){
//     $(".cursor").removeClass("style3");
// });
// $(".mouseCont .style4").hover(function(){
//     $(".cursor").addClass("style4");
// }, function(){
//     $(".cursor").removeClass("style4");
// });
// $(".mouseCont .style5").hover(function(){
//     $(".cursor").addClass("style5");
// }, function(){
//     $(".cursor").removeClass("style5");
// });
// $(".mouseCont .style6").hover(function(){
//     $(".cursor").addClass("style6");
// }, function(){
//     $(".cursor").removeClass("style6");
// });

// for문
// for (let i = 1; i <= 6; i++) {
//     $(".mouseCont .style" + i).hover(function () {
//         $(".cursor").addClass("style" + i);
//     }, function () {
//         $(".cursor").removeClass("style" + i);
//     });
// }

// each()문
$(".mouseCont span").each(function (index, element) {
    $(element).hover(function () {
        $(".cursor").addClass("style" + (index + 1));
    }, function () {
        $(".cursor").removeClass("style" + (index + 1));
    });
});

