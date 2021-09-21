// 모듈 기본값 정의하고 가져오기
// ES6 모듈 시스템에서는 defalut 키워드를 사용하여 모듈에서 기본으로 내보내는 값을 정의할 수 있다
// 숫자, 문자, 불리언과 같은 기본형 값과 객체, 함수, 클래스와 같은 참조형 모두 올 수 있다

export default 'hello';
export default function hello(name){
    console.log('hello' +  name);
};
export default class Hello {
    constructor(greeting) {
        this.greeting = greeting;
    }
    hi(name){
        console.log(`${this.greeting} ${name}`);
    }
}

// default 키워드 사용에 있어 중요한 점이 있는데, default 키워드는 하나의 모듈에서 한번만 사용할 수 있다
// 즉, 한 파일에서는 하나의 값만 default로 정의할 수 있음