// 정규표현식으로 특정 문자의 포함 여부 확인하기 (test)

// 그 동안 String 객체 메소드로 정규표현식을 활용했다면, 이번에는 RegEx 객체의 함수로 정규표현식을 통해 문자열 처리하는 방법을 알아본다
// 자바스크립트에서 정규표현식은 RegEx객체로 인식된다.
// RegEx 객체 test메소드는 대입된 문자열이 정규표현식에 맞으면 true, 아니면 false를 반환한다

const numRegExp = /[0-9]+/;
const phoneRegEx = /\d{3}-\d{3,4}-\d{4}$/;
const emailRegExp = 
/^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i;

console.log(numRegExp.test(12345));
console.log(numRegExp.test('test'));
console.log(phoneRegEx.test('010-2854-1193'));
console.log(phoneRegEx.test('02-8844-1234'));
console.log(emailRegExp.test('test123@javascript.org'));
console.log(emailRegExp.test('test-javascript'));