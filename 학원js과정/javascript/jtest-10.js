var 전자제품 = {
    컴퓨터: {
        노트북: {
            삼성: "삼성 갤럭시북4",
            엘지: "엘지 그램 700",
            애플: "맥북 프로 100"
        },
        데스크탑: {
            삼성: "삼성 데스크탑 100",
            엘지: "엘지 데스크탑 100",
            애플: "애플 데스크탑 100"
        }
    },
    가전제품: {
        냉장고: {
            삼성: "삼성 냉장고 800",
            엘지: "엘지 냉장고 800",
            샤오미: "샤오미 냉장고 800"
        },
        텔레비전: {
            삼성: "삼성 TV 80인치",
            엘지: "엘지 TV 80인치",
            샤오미: "샤오미 TV 80인치"
        },
        공기청정기: {
            삼성: "삼성 공기청정기",
            엘지: "엘지 공기청정기",
            샤오미: "샤오미 공기청정기"
        }
    }
}


// if/else 조건문 기본
// if (false) {
//     document.write(`if문의 조건을 만족하면 이 문장이 출력됩니다.`)
// } else {
//     document.write(`if문의 조건이 거짓이면 이 문장이 출력됩니다.`)
// }

// if/else응용_1
// var number = prompt("숫자를 입력하세요.");
// if (number < 0) {
//     alert(`0 이상의 숫자를 입력하세요.`)
// } else {
//     document.write(`<br><hr>입력한 숫자는 : ${number}이다.`)
// }

// if/else응용_2
// var number = prompt("숫자를 입력하세요.");
// if (number < 0) {
//     alert(`0 이상의 숫자를 입력하세요.`)
// } else {
//     document.write(`<br><hr>당신이 입력한 숫자는 : <span style="color: blue; font-weight: bold;">${number}</span>이다.`)
// }

// if/else응용_3_1
// var number = prompt("나이를 입력하세요.");
// if (number < 18) {
//     alert(`미성년자 입니다.`)
// } else {
//     alert(`성인입니다.`)
// }

// if/else응용_3_2
// var age = parseInt(prompt("나이 입력: "));
// if (age >= 18) {
//     alert(`성인입니다.`)
// } else {
//     alert(`미성년자 입니다.`)
// }

// if/else응용_4
function showgender() {
    var 이름 = prompt("이름을 입력해주세요: ")
    var 주민번호 = prompt("주민번호 13자리를 입력하세요(-포함): ", "123456-0000000");
    var 나이 = parseInt(prompt("나이 입력: "));


    // 성별을 구분하는 조건식
    var gender;
    if (주민번호[7] == '2') {
        gender = "여성";
        // alert(`당신의 성별은 ${gender}입니다.`);
    } else if (주민번호[7] == '1') {
        gender = "남자";
        // alert(`당신의 성별은 ${gender}입니다.`);
    } else {
        alert("잘못 입력하셨습니다.");
    }

    // 나이를 구분하는 조건식
    if (나이 >= 18) {
        document.write(`${이름}은/는 성인 ${gender} 입니다.`);
    } else {
        document.write(`${이름}은/는 미성년자 ${gender} 입니다.`);
    }
}