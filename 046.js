// Get, Set을 통한 속성 접근 관리하기

let user = {};
Object.defineProperty(user, "age", {
    get : function () {
        return this._age;
    },
    set : function(age) {
        if (age < 0) {
            console.error('0보다 작은값은 올 수 없습니다.');
        }else {
            this._age = age;
        }
    },
    enumerable : true
});
user.age = 10;
console.log(user.age);
user.age = -1;

let user2 = {
    get name() {
        return this._name;
    },
    set name(val) {
        if (val.length < 3) {
            throw new Error('3자 이상이여야합니다.')
        }
        this._name = val;
    }
}
user2.name = 'harin';
console.log(user2.name);
user2.name = 'ha';

// 속성 기술자를 통해 user객체의 age속성을 정의한다.
// 이때 값에 접근하는 방식을 정의하는 객체를 전달하는데 이 객체를 접근 기술자라고 하고, get과 set을 메소르로 가진다
// age 속성의 접근 기술자인 get메소드는 속성에 접근할 때 호출 된다. 그리고 set메소드는 속성에 값을 대입할 때 호출

// get메소드는 속성에 접근할 때 호출 해서 user.age에 접근하면 user._age의 결과를 반환한다.

// set메소드는 속성에 값을 대입할때 호출된다. 그래서 user.age에 값을 할당할 때 0보다 작은 값을 주면 에러 로그를 출력하고
// 0보다 큰 값을 주었을 때 user객체의 _age 속성에 값을 대입한다.

// user.age에 값 10을 대입한다. 그러면 age속성 접근 기술자의 set메소드가 호출되고, 
// user객체의 _age속성에 값 10이 할당된다.
// 그리고 user.age 결과를 콘솔에 출력하는데 이때 접근 기술자의 get메소드가 호출되면서 _age 속성값인 10을 반환한다.

// user2 객체를 정의할 때 name속성의 접근 기술자를 정의합니다. 객체를 정의할 때 메소드를 정의하는 메소드명 앞에
// get과 set으로 각각의 get메소드와 set메소드를 정의할 수 있다.

// user2 객채의 name속성에 값을 할당할 때 접근 기술자의 set메소드가 호출된다.
// 마지막 라인에서 "ha"를 할당하면 ㄱㄹ자수가 3자 이상이 되지 않아 콘솔에 에러가 출력된다.