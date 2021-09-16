// 생성자 함수 이해하기
// 자바스크립트 함수는 재사용 가능한 코드의 묶음으로 사용하는 것 외에 객체를 생성하기 위한 방법으로도 사용된다.
// 객체를 생성하기 위해 직접적으로 객체를 반환해도 되지만, new 키워드를 사용하여 함수를 호출하게 되면 return문이 없어도
// 새로운 객체가 반환된다.
// 또한 함수 바디에서 this키워드를 사용하여 반환되는 객체의 초기상태와 행위를 정의할 수 있다

// 이렇게 객체를 생성하는 역할을 하는 함수를 생성자 함수라고 하는데
// 생성자 함수는 new 키워드를 사용하지 않으면 일반적인 함수와 동일하게 동작하며 새로운 객체를 반환하지 않는다.
// 그렇기 때문에 함수명을 대문자로 시작하는 관례를 가진다.

function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function (student) {
        console.log(student + ' 에게' + this.subject + ' 를 가르칩니다');
    };
}

const jay = new Teacher('jay', 30, 'JavaScript');
console.log(jay)
jay.teach('bbo');

console.log(jay.constructor);
console.log(jay instanceof Teacher);

const jay2 = Teacher('jay', 30, 'JavaScript');
console.log(jay2);
console.log(age);

// Teacher 생성자 함수를 정의한다.
// 매개변수로 name, age, subject를 정의하고 전달받은 매개변수들의 값을 this속성으로 대입한다.
// 그리고 teach 메소드를 정의한다

// new 키워드와 함께 생성자 함수를 호출하면 생성자 함수 블록이 실행되고 별도의 return문이 없어도 새로운 객체가 반환된다.
// 이때 반환되는 새로운 객체를 가리키는 것이 this이다. 그래서 jay변수에 반환된 객체가 할당된다

// Teacher 타입의 객체를 콘솔에 출력한다
// 그리고 해당 객체의 teach 메소드를 호출한다.
// 콘솔에 "bbo에게 자바스크립트를 가르칩니다"가 출력되는것을 알 수 있다

// 모든 객체는 constructor 속성을 가진다. 이 속성은 객체를 만든 생성자 함수를 가리킨다
// 그렇기 때문에 jay객체의 constructor 속성은 Teacher 생성자 함수를 가리키고 콘솔에 해당 내용이 출력된다.
// 그리고 instanceof 연산자를 이용하여 jay객체가 Teacher 생성자 함수의 인스턴스 여부를 확인할 수 있다

// new 키워드를 배고 Teacher 생성자 함수를 호출한다. 이때 생성자 함수의 this는 전역 객체를 가리키게 된다.
// 전역 객체에 name과 age 그리고 subject 속성으로 전달받은 매개변수가 할당된다
// 그래서 전역변수의 age를 참조해 콘솔에 30이 출력된다
// 그리고 새로운 객체가 반환되자 않아 jay2는 undefiened가 출력된다