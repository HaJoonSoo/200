// Map 객체 요소 나열하기(keys, values, entries)

const map = new Map();

map.set('one', 1);
map.set('two', 2);
map.set('three', 3);

const keys = map.keys();
const values = map.values();
const entries = map.entries();

console.log(keys.next().value);
console.log(values.next().value);
console.log(entries.next().value);

console.log(keys);
console.log(values);
console.log(entries)

// Map 객체를 생성하고 변수 map에 할당한다.

// map 변수에 요소를 추가한다.

// keys() 함수를 호출하여 키 정보들을 모아 MapIterator 객체로 반환한다.
// MapIterator {'one', 'two', 'three'}를 변수 keys에 할당한다

// values()함수를 호출하여 값 정보들을 모아, MapIterator 객체로 반환한다.
// MapIterator {1, 2, 3}를 변수 values에 할당한다

// entrise() 함수를 호출하여 [키, 값] 형태의 정보들을 모아 MapIterator 객체로 반환한다
// mapIterator {['one", 1], ['two', 2], ['three', 3]}을 변수 entries에 할당한다.

// iterator의 next() 함수를 통해 첫 번째 요소가 반환된다.
// 변수 Keys, values, entries 첫번재 요소가 반환되고, value속성을 호출하여 각각 'one',1,['one', 1]값이 출력된다.

// next()로 반환된 요소를 제외하고, 남은 요소들을 확인할 수 있다

/*
Map에서는 저장한 순서대로 요소가 정렬되어 저장된다. 이 Map 객체의 요쇼들을 확인하기 위한 방법으로 Map 객체의 내장 함수 Keys, Values, entries가 있다

- keys() : Map 객체 요송의 키 정보만 모아 Iterator 객체로 반환한다.
- values() : Map 객체 요소의 값 정보만 모아 Iterator 객체로 반환한다.
- entries() : Map 객체 요소의 키와 값 을 한쌍으로 배열로 만든다.
배열 순서는 키가 0 인덱스이고, 값ㅂ이 1 인덱스에 대입되고, 이 배열들을 모아 Iterator 객체로 나열하여 반환한다.
*/