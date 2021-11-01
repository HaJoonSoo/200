// Map 객체 순환하기

const map = new Map();

for (let num of [1, 2, 3, 4, 5]) {
    map.set((value) => value * 2, num);
}

for (let [func, value]of map){
    console.log(func(value));
}

// 1부터 5의 값을 num변수에 전달한다

// map에 요소를 추가한다.
// 키(key)를 (value) => value * 2 함수로 정의하고, 값은 전달된 num을 할당한다.
// 따라서 map의 요소들은 함수형 키와 숫자형 값을 지닌다.

// map 변수를 for...of로 순환한다
// 순환할 때 매개변수 func 와 value변수를 전달받는다
// value 변수를 다시 인자로 넣어 함수 func를 실행한다