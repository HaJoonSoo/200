// 객체지향에서는 무수히 많은 객체들을 공통적인 득성을 기준으로 객체를 묶어서 하나의 타입으로 정의한다
// 이렇게 타입을 정의하는 작업을 분류라고 하며 , 이는 일종의 추상화를 하는 것이다.
// 자바스크립트는 프로토타입 기반으로 객체지향 프로그래밍을 지원한다. 자바의 클래스 기반과의 큰 차이점으로
// 프로토타입으로 객체에 공통 사항을 적용할 수 있다.
// 즉, 모든 객체는 다른 객체의 원형이 될 수 있다

const studentProto = {
    gainExp : function() {
        this.exp++;
    }
}

const harin = {
    name : '하린',
    age : 10,
    exp : 0,
    __proto__: studentProto
};

const bbo ={
    name : "뽀",
    age : 20,
    exp : 10,
    __proto__ : studentProto
};

bbo.gainExp();
harin.gainExp();
harin.gainExp();
console.log(harin);
console.log(bbo);

// 학생의 경험치를 얻는 행위를 gainExp 메소드로 작성한 원형 객체를 정의힌다

// 이름이 하린이고 나이와 경험치를 가지는 harin 객체를 정의한다.
// 그리고 자바스크립트에서는 __proto__ 속성으로 원형 객체를 정의할 수 있다,
// 모든 자바스크립트 객체는 __proto__ 속성을 가지는데 예제코드에서처럼 별도로 __proto__ 속성에 다른 객체를 할당하지 않으면
// 기본적으로 Object.prototype 객체가 연결되어 있다.
