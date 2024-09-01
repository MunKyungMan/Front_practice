// 중첩 for(){} 학습하기

document.write(`<h1>구구단</h1>`);
document.write(`<div id="container">`);
for (var i = 2; i <= 9; i++) {  // 2단부터 9단까지
    document.write(`<div class="gugudan-block">`);
    document.write(`<h3><span class="title">${i}단</span></h3>`);  // 각 단의 제목 출력
    for (var j = 1; j <= 9; j++) {  // 각 단의 곱셈 출력
        document.write(`<div id="gugudan-item"><b>${i} x ${j} = ${i * j}</b></div>`);  // 구구단 계산 결과 출력
    }
    document.write(`</div>`);  // 각 단을 묶는 div 박스 닫기
}
document.write(`</div>`);