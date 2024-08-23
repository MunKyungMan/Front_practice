document.querySelector(".moveImage").addEventListener("mousemove", function (e) {
    // 커서
    gsap.to(".cursor", { duration: 0.2, left: e.pageX - 10, top: e.pageY - 10 });

    // 기준점을 가운대로 설정
    let standardX = window.innerWidth / 2 - e.pageX;
    let standardY = window.innerHeight / 2 - e.pageY;

    // 이미지 움직임
    const move = document.querySelector(".mImg img");
    move.style.transform = "translate(" + standardX/20 + "px, " + standardY/20 + "px)";

    // 출력
    document.querySelector(".pageX").textContent = e.pageX;
    document.querySelector(".pageY").textContent = e.pageY;
    document.querySelector(".standardX").textContent = standardX;
    document.querySelector(".standardY").textContent = standardY;
});