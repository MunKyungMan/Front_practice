
// 버튼 클릭
document.querySelectorAll(".paraNav ul li a").forEach(li => {
    li.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// 변수, 배열, 객체
// 반복문 --> for문 --> forEach --> for in/for of

// 스크롤 했을 때
window.addEventListener("scroll", function () {
    // let scrollTop = window.pageYOffset;
    // let scrollTop = document.documentElement.scrollTop;
    // let scrollTop = this.window.scrollY;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || this.window.scrollY;

    // 번호에 불 들어오게 하는 코드
    // if(scrollTop >= document.getElementById("section1").offsetTop){
    //     document.querySelectorAll(".paraNav ul li").forEach(li => {
    //         li.classList.remove("active");
    //     });
    //     document.querySelector(".paraNav ul li:nth-child(1)").classList.add("active");
    // }

    // if(scrollTop >= document.getElementById("section2").offsetTop){
    //     document.querySelectorAll(".paraNav ul li").forEach(li => {
    //         li.classList.remove("active");
    //     });
    //     document.querySelector(".paraNav ul li:nth-child(2)").classList.add("active");
    // }

    // 번호에 불 들어오게 하는 코드 반복문
    document.querySelectorAll(".paraNav ul li").forEach((li, index) => {
        const section = document.getElementById(`section${index + 1}`); // 해당하는 section 요소 가져오기
        if (scrollTop >= section.offsetTop) {
            document.querySelectorAll(".paraNav ul li").forEach(li => li.classList.remove("active")); // 모든 li 요소의 active 클래스 제거
            li.classList.add("active"); // 현재 요소에 active 클래스 추가
        }
    });

    // info
    document.querySelector(".paraScroll span").innerText = parseInt(scrollTop);

    // 각 offset값 출력
    // document.querySelector(".offset1").innerText = (document.getElementById("section1").offsetTop) + "px";
    // document.querySelector(".offset2").innerText = (document.getElementById("section2").offsetTop) + "px";
    // document.querySelector(".offset3").innerText = (document.getElementById("section3").offsetTop) + "px";
    // document.querySelector(".offset4").innerText = (document.getElementById("section4").offsetTop) + "px";
    // document.querySelector(".offset5").innerText = (document.getElementById("section5").offsetTop) + "px";
    // document.querySelector(".offset6").innerText = (document.getElementById("section6").offsetTop) + "px";
    // document.querySelector(".offset7").innerText = (document.getElementById("section7").offsetTop) + "px";
    // document.querySelector(".offset8").innerText = (document.getElementById("section8").offsetTop) + "px";
    // document.querySelector(".offset9").innerText = (document.getElementById("section9").offsetTop) + "px";

    // 각 offset값 출력 반복문
    for (let i = 1; i <= 9; i++) {
        const sectionOffset = document.getElementById(`section${i}`).offsetTop; // section의 offsetTop 값 가져오기
        document.querySelector(`.offset${i}`).innerText = sectionOffset + "px";  // 해당 offset 클래스에 텍스트 설정
    }
});