function jumminNum() {
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