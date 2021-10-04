// 객체 변경되지 않도록 하기 (freeze)

// Object객체의 메소드 freeze는 단어 그대로 객체를 동결한다.
// freeze 메소드로 객체를 동결한 이후에는 다른 속성을 추가하거나 제거할 수 없다

let obj = {};

obj.title = 'IDOL';
obj = Object.freeze(obj);
obj.title = 'Euphoria';

console.log(obj);

const changeUnitNum = (obj, num) => {
    'use strinct';

    while(true){
        console.log(obj);

        if (obj.age >= num){
            obj = Object.freeze(obj);
        }
        obj.age += 1;
    }
}

let profile = {name : '지연', age : 25};
changeUnitNum(profile, 30);

// 변수 obj에 빈 객체를 할당한다
// 나중에 freeze 메소드를 실행한 뒤 다시 obj 변수로 할당하기 때문에 obj변수는 let으로 선언한다

// 객체 obj에 키가 title, 값은 'IDOL'인 속성을 추가한다.
// freeze 메소드를 실행하기 전에는 얼마든지 객체를 수정할 수 있다

// Object.freeze(obj)로 동결한 객체 obj를 다시 변수에 대입한다.

// 객체 obj에 속성 title을 수정해본다. 그러나 freeze를 실행한 뒤라서 객체가 변경되지 않는다
// 이때 함수안에 'use strict'를 선언한다

// while(true)로 반복문이 내부가 true인 경우에만 순환한다
// 즉, 반복문 내부에 에러가 발생하면 반복문은 멈춘다

// 객체 obj의 age속성값이 num보다 같거나 큰지 확인한다
// 확인 결과가 true면 Object.freeze(obj)로 객체를 동결하고 obj로 재할당한다

// obj의 age속성값에 1을 더해서 수정한다
// use strict 선언 이후에 객체 obj를 수정하게 되면 에러가 발생한다

