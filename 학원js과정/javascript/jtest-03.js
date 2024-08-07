// var user_name = prompt("이름 입력: ");
// alert(`${user_name}님 환영합니다.`);
// document.write(`<br><hr><span style = "color:blue;">${user_name}</span>님 환영합니다.`);
// console.log(`${user_name}님 환영합니다.`);

// var name_1 = prompt("이름:");
// var age = prompt("나이:");
// document.write(`<div style = 
//     "border: 5px solid black; 
//     text-align: center; 
//     border-radius: 10px; 
//     margin: 50px auto; 
//     width: 400px; 
//     height: auto; 
//     background-color: green; 
//     color: white; 
//     font-weight: 800; 
//     padding: 10px;"
//     >`
// );
// document.write(
//     `<br><br><p style = "
//     font-size: 3em; 
//     line-height: 1.5em;
//     ">${name_1}님 나이는 ${age}세 입니다.</p>`);
// document.write(`</div>`);


// 1. 자바스크립트 오류 찾기
var now = new Date();
var display = now.toLocaleTimeString();

// 일부러 틀리게 write를 writ로 적음. F12누르면 오류가 발생함.
// document.writ(`<span class="now_time">현재 시간은 #{display} 입니다.</span>`);
document.write(`<div class="container">`);
document.write(`<span class="now_time">현재 시간은 &nbsp;&nbsp;<span class="back1">${display}</span> 입니다.</span>`);
document.write(`</div><br><hr><br>`);

document.write(`<div class="container">`);
document.write(`<span class="now_time">현재 시간은 &nbsp;&nbsp;<span class="back1">${display}</span> 입니다.</span>`);
document.write(`</div><br><hr><br>`);

document.write(`<div class="container">`);
document.write(`<span class="now_time">현재 시간은 &nbsp;&nbsp;<span class="back1">${display}</span> 입니다.</span>`);
document.write(`</div><br><hr><br>`);
