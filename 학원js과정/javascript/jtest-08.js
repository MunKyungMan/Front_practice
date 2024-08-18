// 1. 첫 번째 연습 (가격, 할인율이 고정되어 있고, 결과만 출력하는 코드)
// 함수 선언 하기
// function showPrice() {
//     var originPrice = 10000;
//     var rate = 25;

//     document.querySelector("#showResult").innerHTML = `상품의 원래 가격은 ${originPrice}이고 할인률은 ${rate}%입니다.`
// };

// 2. 두 번째 연습 (가격, 할인율을 입력 받고, 계산하는 코드)
// function showPrice() {
//     var originPrice = document.querySelector("#oPrice").value;
//     var rate = document.querySelector("#rate").value;

//     document.querySelector("#showResult").innerHTML = `상품의 원래 가격은 ${originPrice}이고 할인률은 ${rate}%입니다.`
// };

// 3. 세 번째 연습 (가격, 할인율을 입력 받고, 계산 값을 출력하는 코드)
// function showPrice() {
//     var originPrice = parseFloat(document.querySelector("#oPrice").value);
//     var rate = parseFloat(document.querySelector("#rate").value);
//     var saveResult = originPrice * (rate / 100);
//     var resultPrice = originPrice - saveResult;

//     document.querySelector("#showResult").innerHTML = `상품의 원래 가격은 ${originPrice}원 이고, 할인률 ${rate}%을 적용받아 ${resultPrice}원으로 구매 가능합니다.`;
// }

// 4. 네 번째 연습 (가격, 할인율을 입력 받고, 계산 값에 세자리마다 쉼표, 를 찍어서 출력하는 코드)
function showPrice() {
    var originPrice = parseFloat(document.querySelector("#oPrice").value);
    var rate = parseFloat(document.querySelector("#rate").value);
    var savePrice = originPrice * (rate / 100);
    var resultPrice = originPrice - savePrice;

    var fomattedOriginPrice = originPrice.toLocaleString();
    var fomattedSavePrice = savePrice.toLocaleString();
    var fomattedResultPrice = resultPrice.toLocaleString();

    document.querySelector("#showResult").innerHTML = `상품의 원래 가격은 ${fomattedOriginPrice}원 이고, 할인률 ${rate}%을 적용받아 ${fomattedResultPrice}원으로 구매 가능합니다.`;
}