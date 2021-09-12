// 심볼형 이해하기

const symbol = Symbol();
const hello = Symbol('hello');

console.log(Number(3) === Number(3));
console.log(Symbol('symbol') === Symbol('symbol'));
console.log(Symbol() === Symbol());
console.log(typeof Symbol());

const nationility = Symbol('nationility');
const user = {
    name : 'jay'
};
user[nationility] = 'korean';
console.log(user[nationility]);

for (let key in user){
    console.log(key);
}
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));

const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties);
console.log(user[symbolProperties[0]]);

// 심볼은 함수 호출을 통해 생성 가능하다. new 키워드를 통한 호출을 할 경우 에러가 발생한다.

// Symbol을 함수 호출 시 값을 전달할 수 있는데 이 값은 디버깅 용도이며, 고유한 symbol값은 만들어지지 않는다.
// 즉 Symbol()은 늘 고유한 값을 반환한다.

// 심볼은 객체의 키로 사용이 가능하다. 
// 객체의 키로 사용하기 위해서는 Symbol에 대한 래퍼런스를 변수에 담고 있다가 접근때마다 사용해야 한다.

//심볼이 객체의 키로 사용되면 for-in 루프를 통해 심볼키를 가져올 수 없다

// 그렇기 때문에 Object의 키를 반환하는 메소드를 사용해도 가져올 수 없고, json 문자열을 사용해도 해당키는 빠진다.

// 심볼을 객체의 키로 사용할 떄 해당 키를 가져올 방법이 없지는 않다.
// Object.getOwnPropertySymbol 메소드를 통해 해당 객체의 키에 해당하는 심볼들을 가져올 수 있다.

