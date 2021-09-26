// 특정 문자열 포함 여부 확인하기 (includes)
// String 내장객체의 메소드 include는 일치하는 문자열이 있는 경우 true를 없는 경우 false를 반환한다

// 두번째 인자의 인덱스는 필수값이 아니다
// 추가로 두 번째 인자에 인덱스를 지정하면, 해당 인덱스 위치에서부터 문자열을 확인한다.
// 두 번째 인자가 없으면 기본값 0 인덱스부터 문자열을 확인한다

const str = 'Make your lives Extradordinary';

console.log(str.includes('Make'));
console.log(str.includes('Make', 1));

// 'Make'와 일치하는 문자열이 확인되면 true를 반환한다

// 두 번째 인자에 숫자 1을 대입한다. 인덱스 1부터 'Make'와 일치하는 문자열을 확인하면 동일한 문자열이 없기 때문에 false가 반환된다

