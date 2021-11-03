// Set 객체의 크기 확인하기 (size)

const s = new Set();

s.add('one');
s.add(2);
s.add([1, 2, 3]);
s.add({a: 'A', b: 'B'});
s.add(function() {});

console.log(s.size);
s.clear();
console.log(s.size);

// Set 객체의 size 메소드를 통해 간단하게 값의 개수를 확인할 수 있다

// Set 객체에 문자형, 숫자형, 배열, 함수인 값을 추가한다

// size 메소드로 값의 개수를 확인한다

// Set 객체의 메소드로 값을 초기화한다. 모든 값이 삭제되어 set의 개수는 0을 반환한다.
