// 문자열을 숫자형 정수로 변환하기(parsrInt)
// parseInt()는 어떤 내장함수 객체에도 속하지 않은, 전역에서 사용할 수 있는 내장함수이다
// parseInt()를 활용하여 문자열 자료형을 숫자로 변환할 수 있다
// parseInt()는 두개의 인자를 받는다
// 첫번째 인자에는 숫자로 변환하고 싶은 값을 넣고, 
// 두번째 인자는 특정 진수를 나타내는 정수값을 넣는다

console.log(parseInt('15'));
console.log(parseInt('15', 10));
console.log(parseInt('15', 2));
console.log(parseInt(5.15));
console.log(parseInt('5.15'));

// parseInt 함수는 두번째 인자가 없는 경우 기본값이 10진수로 숫자를 변환한다.
// 두 번째 인자에 숫자 10을 넣어 사용할 수도 있다
// 두 번째 인자에 2를 넣으면 문자 '15'를 2진수 숫자로 변환한다. 따라서 숫자 1을 반환한다
// 실수인 숫자 또는 문자를 정수로 변환하는데 parsrInt를 사용할 수 있다