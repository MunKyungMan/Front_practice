// 1. 클릭하면 1회 색상 변하기
// var head = document.querySelector("#heading");
// head.onclick = function(){
//     head.style.color = "red";
// }

// var hr_line = document.querySelector("#line");
// hr_line.onclick = function(){
//     hr_line.style.border = "20px solid blue";
// }

// 2. 반복적인 클릭을 통해서 모양을 바꿔보는 코드
var head = document.querySelector("#heading");
var headOriginalColor = getComputedStyle(head).color; // 현재 스타일을 가져옴
var headRed = false;

head.onclick = function() {
    if (headRed) {
        head.style.color = headOriginalColor;
        headRed = false;
    } else {
        head.style.color = "red";
        headRed = true;
    }
}

