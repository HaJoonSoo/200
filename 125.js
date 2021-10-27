// 배열 순환하기 (for-of)

const products = [{name: "가방"}, {name: "노트북"}];

for (const item of products){
    console.log(item.name);
}

const iter = products[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// 상품 객체 배열을 for...of 문을 사용하여 각 객체의 name 속성값을 콘솔로 출력한다

// Array 객체는 반복 가능한 객체이기 때문에 Symbol.iterator 메소드를 지닌다.
// Symbol.iterator 메소드를 호출하여 반환된 반복자 iter 변수를 통해 next 메소드를 호출한다.
// 각 value 값이 콘솔로 출력된다
