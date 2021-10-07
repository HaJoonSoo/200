// 진수 변환하기 (toString)
// 일반적으로 toString 메소드는 지정된 객체의 문자열을 출력한다
// 이번 장에서는 toString 메소드의 다른 활용법을 알아보자
// Number 객체의 toString 메소드는 값을 특정 진법으로 표현하여 문자형으로 반환한다

const dec = 531;

const binByDex = dec.toString(2);
const octByDex = dec.toString(8);
const hexByDex = dec.toString(16);

console.log(binByDex);
console.log(octByDex);
console.log(hexByDex);

// Number 객체의 메소드 toString 숫자 2를 인자로 넣으면 2진수로 변환된다
// 8진수로 변환하려면 toString에 숫자 8을 인자로 넣으면 된다
// Number 객체의 메소드 toString에 숫자 16을 인자로 넣으면 16진수로 변환된다
// 변수 binByDex, octByDex, hexByDex를 콘솔출력하여 변환된 값을 확인한다

