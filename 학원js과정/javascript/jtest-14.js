// 1부터 100까지 더하는 코드 연습
var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum += i;
};

document.write(`<p id="title">1부터 100까지 더한 합은 ${sum}이다!</p>`);

$(document).ready(function () {
    $("#title").css({
        "color": "blue",
        "font-size": "2em",
        "font-weight": "bold",
        "text-align": "center",
        "background-color": "yellow",
        "width": "600px",
        "padding": "5px 10px",
        "height": "auto",
        "border": "1px solid black",
        "margin": "30px auto",
        "line-height": "2em"
    });
});

var seasons = ["봄", "여름", "가을", "겨울", "한국은 4계절 국가다!"];
var colors = ["red", "blue", "green", "orange", "yellowgreen"];  // 각 항목에 대한 색상 배열

for (var j = 0; j < 4; j++) {  // j는 반복 횟수를 의미
    document.write("<hr>");

    // 배열의 각 요소를 한 줄씩 출력
    for (var i = 0; i < seasons.length; i++) {
        var text = seasons[i]; // 현재 계절 이름
        var color = colors[i]; // 해당 계절에 맞는 색상

        // 첫 번째 글자에만 색상 적용
        var coloredText = `<span style="color: ${color}">${text}</span>`;

        document.write(`${coloredText}<br>`);
    }

    document.write("<hr><br>");
}


// 중첩 for(){} 학습하기
for (var i = 2; i <= 9; i++) {  // 2단부터 9단까지
    document.write(`<h3>${i}단</h3>`);  // 각 단의 제목 출력
    for (var j = 1; j <= 9; j++) {  // 각 단의 곱셈 출력
        document.write(`${i} x ${j} = ${i * j}<br>`);  // 구구단 계산 결과 출력
    }
    document.write("<br>");  // 각 단 사이에 빈 줄 추가
}
