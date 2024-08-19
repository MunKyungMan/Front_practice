// var 너비 = parseFloat(prompt("너비값 입력: "));
// var 높이 = parseFloat(prompt("높이값 입력: "));
// var 결과 = 너비 * 높이;

// alert(`넓이는 ${너비} * ${높이} = ${결과}m2 입니다.`);

let key_In = prompt("3의 배수 찾기: yes or 종료: no", "yes");
var result = 1;

if ((key_In == `yes`) || (key_In == `YES`)) {
    let result_1 = 100;
    for (var i = 1; i <= result_1; i++) {
        if (i % 3 === 0) {
            result++
            document.write(`${i}, `);
        }
        document.querySelector("#bord_1").innerHTML = `<p>3의 배수의 갯수는: ${result}개다</p>`;
    }
} else {
    alert("종료합니다.");
}