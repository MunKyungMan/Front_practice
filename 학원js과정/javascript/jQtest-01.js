// 1. JQuery 첫 번째 연습
$(document).ready(function () {
    // 초기 스타일 적용
    $("#title").css('color', 'blue');
    $("#title").css('font-weight', 'bold');

    // 마우스 오버 이벤트
    $("#title").mouseover(function () {
        this.style.color = "red";
    }).mouseleave(function () {
        this.style.color = "blue"; // 원래 색상으로 복원
    });
});

$(function () {
    // div 컨텐츠 스타일 적용
    $("#contents1").css({
        "border": "4px solid green",
        "width": "auto",
        "box-shadow": "3px 2px 5px black",
        "padding": "10px 0px",
        "margin-top": "40px",
        "background": "url('./image/베스트2.gif')"
    });

    // #title 스타일 적용
    $("#title").css({
        'margin-right': 'auto',
        'margin-left': 'auto',
        'width': '200px',
        'text-align': 'center',
        'border': '2px solid black',
        'padding': '10px 20px',
        'box-sizing': 'content-box'
    });

    // 마우스 오버 이벤트 적용
    $("#title").mouseover(function () {
        this.style.color = "#ffffff";
        this.style.fontSize = "2em";
        this.style.backgroundColor = "yellowgreen";
        this.style.cursor = "pointer";
    }).mouseleave(function () {
        this.style.color = "blue"; // 색상 복원
        this.style.fontSize = "";  // 폰트 크기 복원 (기본값)
        this.style.backgroundColor = ""; // 배경색 복원
    });

    // 클릭 이벤트 적용
    $("#title").click(function () {
        window.location.href = "https://www.naver.com/";
    });
});
