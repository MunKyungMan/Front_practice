// 1. 조건 : 사용자로부터 숫자 2개를 입력받는다.
// 2. 해당 값을 더하기 연산하여 웹 문서를 출력한다.
// 3. 기존에 만들어놨던 자바스크립트 코드를 활용한다.
// 4. 출력될 위치는 자바스크립트 코드에 적용되어 <p>태그를 활용한다.
// 5. 출력되는 모양은 jtest-13.html과 동일하게 출력된다.
var sum = 0;
for (var i = 1; i < 6; i++) {
    sum += i;
};
document.write(`<p id="title">1부터 5까지 더한 합은 ${sum}이다!</p>`);
document.write(`<button class="btn">사칙연산</button>`);

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