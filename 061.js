// 자료형 확인하기 (typeof, instanceof)

const str = 'JavaScript';
const strObj = new String('JavaScript');
const num = 200;
const numObj = new Number(200);
const bool = true;
const boolObj = new Boolean(true);
const func = function(){};
const arr = [10, 200, 4000];
const obj = {a1 : 'test'};
const empty = null;
const notCalled = undefined;

console.log(typeof str === 'string');
console.log(typeof strObj === 'object');
console.log(typeof num === 'number');
console.log(typeof numObj === 'object');
console.log(typeof bool === 'boolean');
console.log(typeof boolObj === 'object');
console.log(typeof func === 'function');
console.log(typeof arr === 'object');
console.log(typeof obj === 'object');
console.log(typeof empty === 'object');
console.log(typeof notCalled === 'undefined');

// 자료형을 확인할 변수들을 선언한다. 이때 다양한 자료형을 확인해보기 위해 원시 자료형과 내장 객체값들을 변수에 대입한다
// typeof를 통해 자료형을 확인하면, 원시 자료형 값 중 문자형, 숫자형, 불린형, 언디파인은 예상한 그대로 출력된다
// 반대로 내장객체인 String, Number, Bollean, Function과 원시 자료형이 null일 때는 "object" 문자열을 반환한다

// 이를 통해 알 수 있듯 typeof는 특정 원시 자료형을 확인하거나, 원시자료형과 객체를 구분하기 위해 사용하는것이 좋다
// 만일 객체를 확인하고 싶다면 instanceof 를 사용하는것이 좋다
// instanceof는 원시타입을 확인하는데 적합하지는 않지만, 어떤 객체인지 구분하는데 용이하다
// 그렇기 때문에 instanceof는 어떤 종류의 객체인지 확인하는데 주로 사용한다

console.log(str instanceof String);
console.log(strObj instanceof String);
console.log(num instanceof Number);
console.log(numObj instanceof Number);
console.log(bool instanceof Boolean);
console.log(boolObj instanceof Boolean);
console.log(arr instanceof Array);
console.log(obj instanceof Object);
console.log(func instanceof Funtion);
console.log(empty instanceof Object);
console.log(notCalled instanceof undefined);

// 원시 타입에 대한 결과는 false를 반환하고, 내장 객체로 선언된 변수는 true를 반환한다
// 객체, 배열, 함수는 각각 Object를 상속받은 내장객체이다. 따라서 true를 반환한다
// 실제로 null은 Object를 상속받은 내장객체가 아니다. typeof에서는 자바스크립트 언어에서 의도한대로 object를 반환했지만
// instanceof에서는 false를 반환하여 객체가 아님을 확인할 수 있다
// instanceof 우측에 있는 undefined는 객체가 아니기 때문에 에러를 발생한다.