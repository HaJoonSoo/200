// set 객체로 Array 중복요소 없애기

// Set 객체의 큰 특징 중 하나는 중복값을 허용하지 않는다는 것이다.
// 이러한 Set 객체의 특징을 활용하여 배열에서 중복값을 제거해보겠다

const arr = ['one', 'two', 'three', 'two', 'one', 'four'];
const s = new Set(arr);
console.log([...s]);

// 변수 arr에 배열 자료형을 대입한다. 값에는 'two'와 'one'요소가 중복되어 있다

// 먼저 배열을 Set으로 변환한다. new Set()의 인잘 arr변수를 넣으면 Set생성자를 통해 배열이 Set으로 변환된다.
// Set객체는 중복값을 허용하지 않는다. 따라서 Set으로 변환되면서 기존 배열의 중복값이 제거된다.

// 대괄호 [] 와 ...연산자를 통해 Set객체값들이 전개된 배열로 반환된다