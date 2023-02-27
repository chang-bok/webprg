function multiply(x, y) {
  //
  return x * y;
}
function printSquare(x) {
  var s = multiply(x, x); // 함수 호출 -> [스텝 2] -> 실행
  console.log(s); // 함수 호출 -> [스텝 3] -> 실행
}
printSquare(5); // 함수 호출 -> [스텝 1] / [스텝 4] -> [스텝 5]
