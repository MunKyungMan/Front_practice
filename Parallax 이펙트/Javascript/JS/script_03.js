document.querySelectorAll(".paraNav ul li a").forEach(li => {
    li.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

window.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;

    // 메뉴
    if (scrollTop > 0) {
        this.document.querySelector(".paraNav").classList.add("show");
    } else {
        this.document.querySelector(".paraNav").classList.remove("show");
    }

    // 버튼
    document.querySelectorAll(".content__item").forEach((item, index) => {
        if (scrollTop >= item.offsetTop) {
            document.querySelectorAll(".paraNav ul li").forEach(li => {
                li.classList.remove("active");
            });
            document.querySelector(".paraNav ul li:nth-child(" + (index + 1) + ")").classList.add("active");
        };
    });

    // 출력용
    document.querySelector(".paraScroll span").innerText = parseInt(scrollTop);
});