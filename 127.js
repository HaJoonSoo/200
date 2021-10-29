// Map 객체의 크기 확인하기 (size)

// 앞에서 Map 과 Object의 차이점을 설명했듯이, Map은 키(Key)에 어떤 종류의 자료형도 선언하는것이 가능하다.
// 예를 들어, 원시 자료형뿐만 아니라, 객체, 배열, 함수형 등 다양한 자료형으로 키를 선언할 수도 있다

const map = new Map();

map.set('one', 1);
map.set(2, 'two');
map.set([1, 2, 3 ], 'Three elements');
map.set({a: 'A', b: 'B'}, 'object element')
map.set(function() {}, 'funtion element');

console.log(map.size);

// Map을 생성하고 변수 map에 할당한다

// Map에 속성을 추가한다. 위에서부터 순서대로 문자형, 숫자형, 배열, 객체, 함수인 값을 키로 정의한다

// Map 객체의 size 속성으로 변수 map 요소 개수를 확인할 수 있다
// 추가한 요소는 모두 5개로 숫자 5가 콘솔로 출력된다.