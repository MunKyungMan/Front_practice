// 움직임 효과
document.addEventListener("mousemove", (e) => {
    gsap.to(".cursor", {duration: 0.5, left: e.pageX, top: e.pageY});

    // 출력
    document.querySelectorAll(".pageX").innerText = e.pageX + "px";
    document.querySelectorAll(".pageY").innerText = e.pageY + "px";
});

// 오버효과
document.querySelectorAll(".mouseCont em").forEach(em => {
    em.addEventListener("mouseenter", () => {
        document.querySelector(".cursor").classList.add("active");
    });
    em.addEventListener("mouseleave", () => {
        document.querySelector(".cursor").classList.remove("active");

    });
});

document.querySelectorAll(".info").forEach(em => {
    em.addEventListener("mouseenter", () => {
        document.querySelector(".cursor").classList.add("show");
    });
    em.addEventListener("mouseleave", () => {
        document.querySelector(".cursor").classList.remove("show");

    });
});