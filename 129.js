// Map 객체 순환하기 1 (for-of, foreach)

// 앞에서 학습한 keys, values, entries 함수를 활용하여, Map 객체 요소를 순회할 수 있다

const map = new Map();

map.set('one', 1);
map.set('two', 2);

console.log('키 정보만 출력합니다');
for (let key of map.keys()) {
    console.log(key);
}

console.log('값 정보만 출력합니다');
for(let value of map.values()) {
    console.log(value);
}

console.log(`[for...of, entries] 키, 값 정보를 동시에 출력합니다`);
for(let [key, value] of map.entries()) {
    console.log(`키는 ${key}, 값은 ${value} 입니다`);
}

console.log('[for..of] 키, 값 정보를 동시에 출력합니다');
for (let [key,value] of map) {
    console.log(`키는 ${key}, 값은${value} 입니다`);
}

console.log('[forEach] 키, 값 정보를 동시에 출력합니다');
map.forEach((value, key) => {
    console.log(`키는 ${key}, 값은 ${value} 입니다`);
})

// 변수 map에 Map 객체를 생성하여 대입한다

// for-of를 통해 Iterator를 순회할 수 있다.

// keys()로 반환된 Iterator 객체를 순회하여 변수 map의 키 정보들이 콘솔 출력된다

// values()로 반환된 Iterator객체를 순회하여 변수 map의 값 정보들만 콘솔 출력된다.

// 키, 값 정보를 동시에 반환하여 순회하는 방법도 있다.
// for...of에서 map.entries()함수를 활용할 수도 있지만, forEach도 키, 값 정보가 하나씩 전달되어 순회할 수 있다