// const로 상수선언하기

// ES6에서 추가된 const키워드는 let키워드와 마찬가지로 블록 단위로 스코프를 정의할 수 있다.
// 하지만 let과의 큰 차이점은 선언 시 값을 할당해야하고, 이후에 재할당을 할 수 없다.

const URL = 'http://js.com';
URL = 'http://js.com';

if(true) {
    const URL2 = 'http://js.com';
}

console.log(URL2);

// const로 정의된 URL 상수에 새로운 문자열을 할당하면 TypeError: Assignment to constant variable.가 발생한다
// 그리고는 const는 관례적으로 변하지 않는 값을 정의하기 때문에 대문자로 작성한다.

// if 문 블록 안에서 const로 정의된 URL2 변수는 블록 밖에서 접근할 경우 에러가 발생한다

// const 키워드로 정의된 상수에 객체를 할당하면 불변 객채가 되지는 않는다
// 불변 객체는 정의된 후에 그 상태를 바꿀 수 없는 객체를 의미한다.
