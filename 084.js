// 배열 합치기 (concat)

const prevList = [1, 2, 3];
const currentList = [4, 5, 6];
const nextList = [7, 8, 9];

console.log(prevList.concat(currentList));
console.log(prevList.concat(currentList, nextList));

console.log(['배열'].concat('합치기'));
console.log(['배열'].concat('합치기', 'JavaScript200'));

// 배열 값을 각각 prevList, currentList, nextList 이름의 변수로 할당한다

// Array 내장객체의 concat 메소드를 사용하여 배열을 병합한다
// prevList 배열 요소 뒤에 currentList 배열 요소가 합쳐져 하나의 배열을 반환한다

// prevList 배열 변수의 concat함수를 호출한다. concat 함수는 여러 인자를 넣는 것이 가능하다
// 이때에도 하나의 배열을 반환하는데, 배열 내부에는 인자에 넣은 순서대로 요소가 나열된다

// 간단하게 인자에 직접 리터럴값을 넣을 수도 있다. 단 concat함수를 호출하는 첫 번째 리터럴이 배열 자료형이여야만
// Array 객체 메소드 concat이 실행된다
// 문자형의 concat함수와 헷갈리지 않도록 주의한다
