// 문자열 순환하기 (for-of)

// String 객체는 반복 가능한 객체로서(Iterable)로써, for...of문을 통해 순회하며 각 요소를 반복 실행할 수 있다.
// for...of문은 순환할 때 반복 가능한 객체가 반환하는 반복자의 next를 호출한다
// next 호출결과로 반횐된 객체 done 속성이 true가 될때까지 반복한다.

// for(변수 of 반복 가능한 객체){
//     실행할 문장
// }

const str = "hello";

for (const items of str) {
    console.log(items);
}

const iter = str[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// hello 문자열을 for...of문을 통해 각 문자를 콘솔로 출력한다
// String 객체는 반복 가능한 객체이기 때문에 Symbol.iterator 메소드를 갖고 있다.
// Symbol.iterator 메소드를 호출하면 반복자가 반환된다.
// 이 반복자의 next메소드를 호출하면 반환된 value값이 콘솔로 출력된다
