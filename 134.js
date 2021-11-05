// Set 객체 값 나열하기 (keys, values, entries)

const s = new Set();

s.add('one');
s.add('two');
s.add('three');

const keys = s.keys();
const value = s.values();
const entries = s.entries();

console.log(keys.next().value);
console.log(value.next().value);
console.log(entries.next().value);

console.log(keys);
console.log(value);
console.log(entries);

// Set 객체 생성자를 변수 s에 할당한다

// s 변수에 'one', 'two', 'three' 값을 추가한다

// Set 객체는 값의 집합이기 때문에, 키를 모으는 것은 의미가 없다.
// 따라서 Set 객체는 keys메소드와 values 메소드의 동작 방식을 동일하게 처리한다.
// values 메소드를 호출하면 Set객체의 값을 모아 SetIterator 객체로 반환한다.
// 즉, SetIterator 객체로 반환한다.