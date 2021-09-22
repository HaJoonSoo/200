// 표준 내장 객체 이해하기
// 자바스크립트에는 ECMAScript 구현 명세에 의해 정의된 표준 내장 객체가 있다
// 표준 내장 객체는 전역 스코프 안에 있는 객체들을 참조하고 있어, 자바스크립트를 실행할 때 어떤 환경에서라도 사용이 가능

// 몇몇 표준 내장객체는 객체임에도 불구하고 함수처럼 호출할 수 있다
// 여느 다른 함수처럼 매개변수를 받고, 함수 몸통에 내장 함수 객체의 행위를 특정화 하는 코드들이 있다
// 이러한 형태를 내장 함수 객체라고 한다
// new지시자를 사용하여 함수형태로 호출하며, 생성자를 생성한다

const str = new String('자바스크립트');
const num = new Number(200);
const bool = new Boolean(true);
const date = new Date();
const map = new Map();
const set = new Set();

console.log(Math.PI);
console.log(Date.parse('2019-01-01'));
console.log(JSON.parse('{}'));

// 표준 내장 객체에 new를 이용하여 생성자를 만들고 변수에 선언한다
// 어떤 객체는 선언없이 객체의 메소드와 속성을 바로 가져다 사용할 수 있다

