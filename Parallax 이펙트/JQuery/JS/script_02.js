// 버튼 클릭해서 이동하기
$(".paraDot ul li").click(function (e) {
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    // alert(index);    정상 작동 확인 코드
    let section = $(".content__item").eq(index);
    let offset = section.offset().top;
    $("html, body").animate({ scrollTop: offset }, 600, "easeInQuint");
});

// 스크롤
$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();

    $(".paraScroll span").text(parseInt(scrollTop));

    // 스크롤 됐을 때 불 들어오기
    // if (scrollTop >= $(".content__item").eq(0).offset().top) {
    //     $(".paraDot ul li").eq(0).addClass("active").siblings().removeClass("active");
    // };
    // if (scrollTop >= $(".content__item").eq(1).offset().top) {
    //     $(".paraDot ul li").eq(1).addClass("active").siblings().removeClass("active");
    // };
    // if (scrollTop >= $(".content__item").eq(2).offset().top) {
    //     $(".paraDot ul li").eq(2).addClass("active").siblings().removeClass("active");
    // };
    // if (scrollTop >= $(".content__item").eq(3).offset().top) {
    //     $(".paraDot ul li").eq(3).addClass("active").siblings().removeClass("active");
    // };
    // if (scrollTop >= $(".content__item").eq(4).offset().top) {
    //     $(".paraDot ul li").eq(4).addClass("active").siblings().removeClass("active");
    // };
    // if (scrollTop >= $(".content__item").eq(5).offset().top) {
    //     $(".paraDot ul li").eq(5).addClass("active").siblings().removeClass("active");
    // };
    // if (scrollTop >= $(".content__item").eq(6).offset().top) {
    //     $(".paraDot ul li").eq(6).addClass("active").siblings().removeClass("active");
    // };
    // if (scrollTop >= $(".content__item").eq(7).offset().top) {
    //     $(".paraDot ul li").eq(7).addClass("active").siblings().removeClass("active");
    // };
    // if (scrollTop >= $(".content__item").eq(8).offset().top) {
    //     $(".paraDot ul li").eq(8).addClass("active").siblings().removeClass("active");
    // };

    // 스크롤 됐을 때 불 들어오기 for()문 반복문
    // for (let i = 0; i <= 8; i++) {
    //     if (scrollTop >= $(".content__item").eq(i).offset().top) {
    //         $(".paraDot ul li").eq(i).addClass("active").siblings().removeClass("active");
    //     };
    // };

    // 스크롤 됐을 때 불 들어오기 each()문 반복문
    $(".content__item").each(function (index) {
        if (scrollTop >= $(this).offset().top) {
            $(".paraDot ul li").eq(index).addClass("active").siblings().removeClass("active");
        }
    });
});