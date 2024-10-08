// 1. for (var i =?; i <???; i++) { } 연습
// 2. 내부 스크립트 활용 / 인라인스타일 적용
var sum = 0;
for (var i = 1; i < 6; i++) {
    sum += i;
};
document.write(`<p id="title">1부터 5까지 더한 합은 ${sum}이다!</p>`);

// 3. JQuery 방식으로 표현
$(document).ready(function () {
    $("#title").css({
        "color": "blue",
        "font-size": "2em",
        "font-weight": "bold",
        "text-align": "center",
        "background-color": "yellow",
        "width": "500px",
        "height": "auto",
        "border": "1px solid black",
        "margin": "30px auto",
        "line-height": "2em"
    });

    // p태그 테두리선에 마우스오버가 되면 스타일 적용
    // 테두리선은 3px, 모따기(dashed) 10px 코드 수정
    $("#title").mouseenter(function () {
        $(this).css({
            "border": "3px solid black",
            "border-radius": "20px",
            "box-shadow": "1px 2px 3px white"
        });
    });

    // p태그 테두리선 마우스오버 효과 해지
    $("#title").mouseout(function () {
        $(this).css({
            "border": "1px solid black",
            "border-radius": "0px",
            "box-shadow": ""
        });
    });
});