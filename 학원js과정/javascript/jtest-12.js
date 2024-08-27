var sesstion = prompt("관심있는 세션을 선택하세요: \n1-마케팅 / 2-SW개발 / 3-Design", "");
switch (sesstion) {
    case "1":
        document.write(`<p><a href="https://www.daum.net" target="_blank" title="행사장이동">마케팅세션은</a> <strong>201호</strong>에서 진행합니다.</p>`);
        break;
    case "2":
        document.write(`<p class="p2"><a href="https://www.daum.net" target="_blank" title="행사장이동">SW개발은</a> <strong>301호</strong>에서 진행합니다.</p>`);
        break;
    case "3":
        document.write(`<p class="p3"><a href="https://www.daum.net" target="_blank" title="행사장이동">Design은</a> <strong>401호</strong>에서 진행합니다.</p>`);
        break;
    default:
        alert("잘못입력하셨습니다.");
        document.write(`<p>다시입력해주세요.</p>`);
}