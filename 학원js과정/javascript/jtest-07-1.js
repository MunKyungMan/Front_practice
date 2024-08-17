// document.querySelector("#result")

// 1. 값이 정해진 상태에서 onclick이라는 이벤트가 발생이 되면, 
// calc3()라는 사용자 함수를 호출해서 결과값을 표시하는 코드
function calc3() {
    var CurrentYear = parseInt(prompt("계산하려고 하는 연도: ", "YYYY"));
    var BirthYear = parseInt(prompt("생년월일 입력: ", "20xx 혹은 19xx"));
    var age;
    age = CurrentYear - BirthYear + 1;

    // 웹문서형식(글자+이미지 등...)으로 값을 전달할때에는 .innerHTML 코드를 사용한다.
    // document.querySelector("#result").innerHTML = `당신의 나이는 ${age}세 입니다.`;

    // 만약 오로지 텍스트 형식으로 값만 전달하고 싶을 때는 .innerHTML대신에 .innerText값을 넣는 것이 더 좋을 수도 있다.
    document.querySelector("#result").innerText = `당신의 나이는 ${age}세 입니다.`;
};

// 아이디선택자 #result 결과값을 삭제하는 코드 작성하기
document.write(`<button onclick='textclear()' class='btn'>Clear Button</button>`);
function textclear(){
    document.querySelector("#result").innerText = ``;
};
