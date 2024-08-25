$(document).ready(function () {
    // $('*').css("border", "2px solid blue");
    // $('*').css("width", "400px").css("margin", "0px auto").css("margin-top", "30px");

    // 오브젝트 형태
    $('*').css({
        "border": "2px solid blue"
        // "width": "400px",
        // "margin": "0px auto",
        // "margin-top": "30px"
    });
});

// 1. 이벤트 리스너 선언하기
$(function () {
    $('*').css({
        "border": "1px solid blue",
        "color": "green",
        "width": "400px",        // 모든 요소의 너비를 400px로 제한함
        "margin-left": "auto",   // 가운데 정렬
        "margin-right": "auto"
    });

    // h2 요소에만 스타일 적용
    $('h2').css({
        "border": "2px dashed green",
        "color": "black",
        "width": "200px",
        "text-align": "center",
        "margin-top": "10px",
        "margin-bottom": "10px"
    });

    // 추가 연습 (응용)
    $("h3").css({
        "border": "3px dashed black",
        "color": "#ffffff",
        "width": "350px",
        "padding": "10px 0px 20px 0px",
        "background-color": "yellowgreen",
        "text-align": "center"
    })

    // 추가 연습 (응용)
    $("h3").mouseover(function () {
        this.style.color = "red";
        this.style.backgroundColor = "yellow";
        this.style.letterSpacing = "4px";
        this.style.cursor = "pointer";
    }).mouseleave(function () {
        this.style.color = "#ffffff";
        this.style.backgroundColor = "yellowgreen";
        this.style.letterSpacing = "";
        this.style.cursor = "";
    });

    // 추가 연습(응용/h1 요소에 대해서 다음 코드 적용하기)
    // 마우스오버시 배경색 검정, 글자색 흰색
    $("h1").mouseover(function () {
        this.style.backgroundColor = "black";
        this.style.color = "#fff";
    }).mouseleave(function () {
        this.style.backgroundColor = "";
        this.style.color = "";
    });
});
