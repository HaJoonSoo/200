// Map 객체에 요소 추가/삭제/확인하기 (set, get, delete, has)

// Map은 ES6부터 추가된 데이터 집합체의 한 종류이다
// 키와 값을 한 쌍으로 저장하고, 중복된 키는 허용하지 않는다
// 또한 반복가능한 객체로써 Iterator를 통하여 Map 객체 내부를 순환할 수 있다

// 키와 값의 쌍으로 이루어진 특징으로 인해 Object와 유사하게 여길 수도 있다
// 그러나 Map 객체만의 몇가지 특징이 Object와 다른 부분임을 보여준다

// - Map 객체 키는 다양한 자료형 값으로 정의할 수 있다.
// 이와 다르게 Object는 문자 Symbol은 자료형만 가능하다

// - Map 객체는 반복 가능한 객체로 Symbol.iterator이 기본적으로 정의되어 있다
// 이에 반해 Object는 없다

const map = new Map();

map.set('one', 1);
map.set('two', 2);

console.log(map.get('one'));
console.log(map.has('one'));
map.delete('one');

console.log(map.has('one'));
console.log(map.has('two'));

// Map 객체 생성자에 변수를 대입한다.

// Map 객체의 set메소드를 통해 요소를 추가한다

// 키가 'one'인 요소 값을 가져온다. Map 객체의 get 메소드에 키 정보를 넣으면 해당 키에 대한 요소값을 반환한다

// 키가 'one'인 요소를 확인한다. Map 객체의 has 속성을 통해 해당 키 정보가 있는지 확인한다.
// 있으면 true, 없으면 false를 반환한다.

// 키가 'one'인 요소를 삭제한다

// 'one' 요소를 삭제한 후 해등 키 정보가 있는 다시 확인한다.
// 코드의 8 라인에서 정상적으로 삭제 되었기 때문에 false를 반환한다

// 'two' 요소를 확인한다. 추가한 이후 어떠한 삭제도 이루어지지 않아, has 속성을 실행한 결과값으로 true를 반환한다
