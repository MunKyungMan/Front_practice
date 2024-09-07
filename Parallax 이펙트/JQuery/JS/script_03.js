$(".paraNav ul li").click(function (e) {
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    let section = $(".content__item").eq(index);
    let offset = section.offset().top;
    $("html, body").animate({ scrollTop: offset }, 600);
});

$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();

    // 메뉴
    if (scrollTop > 0) {
        $(".paraNav").addClass("show");
    } else {
        $(".paraNav").removeClass("show");
    }

    // 버튼
    $(".content__item").each(function (i) {
        if (scrollTop >= $(".content__item").eq(i).offset().top - 2) {
            $(".paraNav ul li").eq(i).addClass("active").siblings().removeClass("active");
        }
    });

    // 출력용
    $(".paraScroll span").text(parseInt(scrollTop));
});

