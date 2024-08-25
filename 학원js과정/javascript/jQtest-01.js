// 1. JQuery 첫 번째 연습
$(document).ready(function(){
    $("#title").css('color','blue');
    $("#title").css('font-weight','bold');
    $("#title").mouseover(function(){
        this.style.color = "red";
    });
});