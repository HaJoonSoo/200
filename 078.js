// 문자열 대소문자 변환하기(toLowerCase, toUpperCase)
// String 내장객체의 메소드 toLowerCase, toUpperCase를 사용하면 문자열의 대소문자를 일괄적으로 변환할 수 있다

console.log('Find Your Own Voice'.toLowerCase());
console.log('Find Your Own Voice'.toUpperCase());

const value = 'Find Your Own Voice';
console.log(value.toLowerCase() === value.toUpperCase());

// toLowerCase()는 해당 문자열을 모두 소문자로 변환하여 반환한다

// toUpperCase()는 해당 문자열을 모두 대문자로 변환하여 반환한다.

// 문자열 'Find Your Own Voice'를 value 변수에 대입한다

// 변수 value에 toLowerCase와 toUpperCase로 변환한 값을 비교 연산자로 확인한다