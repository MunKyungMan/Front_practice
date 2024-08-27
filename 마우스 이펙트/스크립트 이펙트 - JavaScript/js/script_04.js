const cursor = document.querySelector(".cursor");
const Owidth = cursor.offsetWidth;
const Cwidth = cursor.clientWidth;

const Oheight = cursor.offsetHeight;
const Cheight = cursor.clientHeight;

const circle = cursor.getBoundingClientRect();

// alert(Owidth);
// alert(Cwidth);

// alert(Oheight);
// alert(Cheight);

function follow(e) {
    gsap.to(cursor, { duration: 0.3, left: e.pageX - circle.width / 2, top: e.pageY - circle.height / 2 });

    //출력용
    document.querySelector(".pageX").innerText = e.pageX;
    document.querySelector(".pageY").innerText = e.pageY;
};

window.addEventListener("mousemove", follow);