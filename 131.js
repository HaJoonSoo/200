// Set 객체의 값 추가/삭제/확인하기 (add, delete, has)

const s = new Set();

s.add('one');
s.add('two');
s.add('three');

console.log(s.has('one'));
s.delete('one');
console.log(s.has('one'));
console.log(s.has('two'));

// Set은 ES6부터 표준으로 추가된 값의 집합체이다.
// Set은 값으로만 이루어진 데이터 구조를 가진다.
// 또한 Set 객체 안에서 중복값은 허용하지 않는다

// Set 객체 생성자를 변수에 대입한다.

// 변수 s에 값을 추가한다. 순서대로 'one', 'two', 'three' 값이 Set 추가된다

// Set 객체의 has 메소드를 통해 'one'값이 있는지 확인한다.
// 값이 확인되면 true를 반환한다

// Set에서 'one'값을 삭제한다

// 'one' 값을 삭제한 후 해당 값이 있는지 확인한다. 정상적으로 삭제되어 false를 반환한다

// 'two'값이 있는지 확인한다. 추가한 이후 어떠한 삭제도 이루어지지 않아 true를 반환한다.
