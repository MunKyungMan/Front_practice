var name = prompt("이름을 입력하세요: ", "홍길동")
// document.write("<b><big>" + name + "</big></b>님, 환영합니다.<br>")
document.write(`<b><big> ${name} </big></b>님, 환영합니다.<br>`)

var text1 = prompt("별명을 입력하세요: ", "베트맨")
// document.write("<b><big>" + text1 + "</big></b>님으로 <span class='text1'>회원가입</span> 되었습니다.")
document.write(`<b><big> ${text1} </big></b>님으로 <span class='text1'>회원가입</span> 되었습니다.`)

// 외부 파일형식으로 호출되었을 때 스타일 유지하는 코드
