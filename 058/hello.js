// 모듈을 여러이름으로 내보내고 가져오기
// ES6 모듈 시스템에서는 이름있는 변수나 함수 혹은 클래스를 export 키워드를 사용하여 내보낼 수 있다
// 기본값(default)과 다르게 이름이 있기 때문에 중복되지 않는 한 여러 이름을 내보낼 수 있다

export const version = 'v1.0';

export var personA = {
    name: 'a'
};

export function add(a, b) {
    return a + b;
}

export class Person{
    constructor(name){
        this.name = name;
    }
}

// const 키워드 varsion이름으로 상수를 정의하였다.
// 그리고 export 키워드로 정의된 상수의 이름이 version으로 내보내었다

// personA 이름으로 정의된 변수에 객체를 할당하였다. 
// 이 변수또한 personA 이름으로 내보내었다

// add함수를 선언하고 선언된 함수의 이름으로 내보낸다
// person클래스를 선언하고 선언된 함수의 이름으로 내보낸다