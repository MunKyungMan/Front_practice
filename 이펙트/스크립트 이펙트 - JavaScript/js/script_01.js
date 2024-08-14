// 출력용
window.addEventListener("mousemove", function (event) {
    document.querySelector(".clientX").innerText = event.clientX;
    document.querySelector(".clientY").innerText = event.clientY;
    document.querySelector(".offsetX").innerText = event.offsetX;
    document.querySelector(".offsetY").innerText = event.offsetY;
    document.querySelector(".pageX").innerText = event.pageX;
    document.querySelector(".pageY").innerText = event.pageY;
    document.querySelector(".screenX").innerText = event.screenX;
    document.querySelector(".screenY").innerText = event.screenY;
});

// 마우스 움직이기
window.addEventListener("mousemove", function (e) {
    // document.querySelector(".cursor").style.left = e.clientX - 25 + "px";
    // document.querySelector(".cursor").style.top = e.clientY - 25 + "px";

    let x = e.clientX - 25 + "px";
    let y = e.clientY - 25 + "px";
    this.document.querySelector(".cursor").style.cssText = "left:" + x + "; top:" + y;
});