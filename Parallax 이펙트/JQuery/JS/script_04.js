$(".paraNav ul li").click(function (e) {
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    let section = $(".content__item").eq(index);
    let offset = section.offset().top;
    $("html, body").animate({ scrollTop: offset }, 400, "easeInOutCirc");
});

// $(window).scroll(function(){
//     let scrollTop = $(this).scrollTop();
//     let lastScrollTop = 0;

//     if( scrollTop > lastScrollTop ){
//         $(".paraNav").addClass("hide");
//     } else {
//         $(".paraNav").removeClass("hide");
//     }

//     lastScrollTop = scrollTop;

//     console.log("scrollTop : " + scrollTop);
//     console.log("lastScrollTop : " + lastScrollTop);

//     $(".paraScroll span").text(parseInt(scrollTop));
// });

let nowScrollTop;
let lastScrollTop = 0;

$(window).scroll(function () {
    nowScrollTop = true;

    setInterval(function () {
        if (nowScrollTop) {
            nowScrollTop = false;
            hasScroll();
        }
    }, 1000);
});

function hasScroll() {
    let scrollTop = $(this).scrollTop();

    if (scrollTop > lastScrollTop) {
        $(".paraNav").addClass("hide");
    } else {
        $(".paraNav").removeClass("hide");
    }

    lastScrollTop = scrollTop;

    console.log("scrollTop : " + parseInt(scrollTop));
    console.log("lastScrollTop : " + parseInt(lastScrollTop));

    //출력용
    $(".paraScroll span").text(parseInt(scrollTop));

    //메뉴
    $(".content__item").each(function (index) {
        if (scrollTop >= $(".content__item").eq(index).offset().top - 2) {
            $(".paraNav ul li").eq(index).addClass("active").siblings().removeClass("active");
        }
    })
}