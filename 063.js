// 정수 확인하기(isInteger)

console.log(Number.isInteger(0));
console.log(Number.isInteger(-1));
console.log(Number.isInteger(7777777777777777777));
console.log(Number.isInteger(null));
console.log(Number.isInteger(0/0));
console.log(Number.isInteger('Infinity'));
console.log(Number.isInteger(true));
console.log(Number.isInteger({}));

// Number내장객체의 isInteger()메소드는 값이 정수인지 아닌지 확인한다.
// 수삭적으로 정의된 정수에 대해서는 모두 true를 반환하고 정수가 아닌값은 false를 반환한다

// null은 정수가 아니기 때문에 false를 반환한다
// 수학적으로 정의하지 않는 산술 연산 결과는 false를 반환한다
// 양의 무한대, 음의 무한대 값은 정수가 아니므로 false이다
// 참/거짓을 의미하는 boolean자료는 정수가 아니므로 false를 반환한다
// 객체 또한 정수가 아니므로 false를 반환한다

