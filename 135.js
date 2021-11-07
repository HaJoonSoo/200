// Set 객체 순환하기 (for-of, foreach)
// Set 객체에서 for-of를 통해 순환하는 방법은 Map객체와 유사하다
// 다만, 반복문을 통해 전달되는 값에서 차이가 있다.

const s = new Set();

s.add('one');
s.add('two');

console.log('키 정보만 출력합니다.');
for (let key of s.values()) {
    console.log(key);
}

console.log('값 정보만 출력합니다.');
for (let value of s.values()) {
    console.log(value);
}

console.log('[for...of, entries] 키, 값 정보를 동시에 출력합니다');
for(let [key, value] of s.entries()) {
    console.log(`키는 ${key}, 값은 ${value} 입니다`);
}
console.log('[forEach] 키, 값 정보를 동시에 출력한다');
s.forEach((value, key) => {
    console.log(`키는 ${key}, 값은 ${value} 입니다.`);
})

// 변수 s에 Set객체를 생성하고, 값 'one', 'two'를 추가한다

// kets, values, entries 메소드는 SetIterator 객체를 반환한다. 즉 반복 가능한 객체이므로 for...of를 통해 각 메소드 결과값을 순환한다

// forEach로 Set객체를 순환한다.