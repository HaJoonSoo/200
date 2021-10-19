// 정규표현식으로 문자열 확인하기 (match)

// String객체의 match메소드는 정규 표현식에 맞는 부분을 검색해서 해당 값을 반환한다.
// 그리고 정규표현식이 맞는 값이 있는 경우 다음과 같은 문자열의 추가 정보와 함께 배열을 반환한다

// * 인자로 대입한 값과 일치하는 값
// * index 속성 : 대응된 부분의 첫 번째로 해당되는 인덱스
// * input 속성 : 원본 문자열

// 단, 정규표현식에 g플래그가 아닐 때에만 추가 정보가 반환된다.

const str = "To lose your path is the way to tind that path";

const sensitiveCaseRegex = /to/;
const ignoreAllCaseRegex = /to/gi;
const findRangeRegex = /([a-f])\w+/i;
const findAllRangeRegex = /([a-f])\w+/gi;

console.log(str.match(sensitiveCaseRegex));
console.log(str.match(ignoreAllCaseRegex));
console.log(str.match(findAllRangeRegex));
console.log(str.match(findAllRangeRegex));

// 변수 sensitiveCaseRegex 에 정규표현식 /to/를 대입한다.
// 아는 문자열 'to'와 대소문자까지 완전히 일치하는 문자열을 찾는 표현식이다.
// 따라서 인덱스 29번째에 위치하는 'to' 문자열 정보가 반환된다.

// 변수 ignoreAllCaseRegex에 정규표현식 /to/gi를 대입한다.
// 표현식에 i 플래그가 있으면 대소문자 구분은 무시한다.
// 따라서 알파벳 T와 t, 그리고 O와 o는 문자열로 인식하게 된다
// 따라서 대소문자 구분없이 일치하는 `to`를 찾아 배열로 반환한다.

// 변수 findAllRangeRegex에 정규표현식 /([a-f])\w+/i를 대입한다
// 여기서 [a-f]는 a부터 f사이의 문자를 찾는 range표현식이다.
// 그리고 w+플래그는 해당문자로 시작해서 whiteSpace가 나타날 때까지의 단어를 반환한다.
// g 플래그가 없기 때문에 첫 번째 일치하는 값만 찾아 추가정보와 함께 반환한다.
// 따라서 대소문자 구분없이 a부터 f까지의 알파벳으로 시작하는 첫 번째 단어 정보를 반환한다.

// 변수 findAllRangeRegex에 정규표현식 /([a-f])\w+/gi을 대입한다.
// g플래그가 있기 때문에 정규표현식에 맞는 모든 단어들을 반환한다.
// 따라서 대소문자 구분 없이 a부터 f사이의 알파벳으로 시작하는 모든 단어를 배열로 반환한다.