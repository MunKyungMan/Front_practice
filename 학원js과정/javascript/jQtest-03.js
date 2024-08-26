$(document).ready(function () {
    // #tit 아이디 선택자로 스타일 적용하기
    $("#tit").css({
        "background-color": "lightgray",
        "font-size": "1.5em"
    });

    // #tit 아이디 선택자로 마우스오버 이벤트 추가 적용하기

    // this.style 코드 방식
    // $("#tit").mouseover(function() {
    //     this.style.backgroundColor = "yellow";
    //     this.style.color = "black";
    // }).mouseleave(function(){
    //     this.style.backgroundColor = "lightgray";
    //     this.style.color = "";
    // });


    // $("선택자")방식으로 이벤트 추가하기
    $("#tit").mouseover(function () {
        $(this).css({
            "background-color": "yellow",
            "color": "black",
            "border-radius": "10px"
        });
    }).mouseleave(function () {
        $(this).css({
            "background-color": "lightgray",
            "color": "",
            "border-radius": ""
        });
    });

    // #tit 아이디 선택자로 마우스 아웃 이벤트
    // this.style 코드 방식으로 원상 복귀
    // $("#tit").mouseout(function () {
    //     this.style.backgroundColor = "lighgray";
    //     this.style.color = "";
    // })

    $("#container").css({
        "border": "2px solid darkblue",
        "background-color": "aliceblue",
        "width": "700px",
        "height": "auto",
        "margin-left": "auto",
        "margin-right": "auto"
    });

    $("#tit3").css({
        "margin-top": "20px"
    });


    // container 아이디 선택자에 마우스 오버 되면,
    // 1. 테두리가 20px만큼 반지름 border-radius 적용
    // 2. 음영처리 2px 2px 4px black
    // 3. 마우스 아웃 시 원상 복귀

    $("#container").mouseover(function () {
        $(this).css({
            "border-radius": "20px",
            "box-shadow": "2px 2px 4px black"
        });
    }).mouseleave(function () {
        $(this).css({
            "border-radius": "",
            "box-shadow": ""
        });
    });
});



