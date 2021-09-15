// 객체 속성 기술자 이해하기

let user = {
    name: "jeado"
};
let descritor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descritor);

let user2 = {};
Object.defineProperty(user2, "name", {
    value : "jesdo",
    enumerable : true,
    configurable : true,
    writable : false
});
console.log(user2.name);
user2.name = "bbo";
console.log(user2.name);

let user3 = {
    name : "jeado",
    toString(){
        return this.name
    }
};
Object.defineProperty(user3, "toString", {
    enumerable : false
});
for (let key in user3){
    console.log(key)
}

let user4 = {};
Object.defineProperty(user4, "name", {
    value : "jeado",
    configurable : false
});
delete user4.name
console.log(user4);
Object.defineProperty(user4, "name",{
    writable : true
});

// 자바스크립트의 모든 객체 속성은 자기 자신에 대한 정보를 담고 있는 속성 기술자를 가지고있다.
// 이 속성 기술자는 객체로 표현된다. Object.getOwnPropertyDescriptor를 통해 속성 기술자 객체를 가지고 올 수 있다.

// user2 객체를 선언하고 Object.defineProperty를 통해 해당 객체의 속성을 정의한다.
// 첫 번째 인자는 속성을 정의할 객체이고 두 번째 인자는 속성명, 그리고 세번째 인자는 속성 기술자이다.
// 속성 기술자는 객체로서 다음과 같은 속성을 가진다.
/*
- value : 값을 나타낸다
- enumerable : for..in 루프나 Object.keys 메소드같이 속성을 나열할 때 나열 가능 여부를 정의한다. false일 경우 나열되지 않는다
- writable : 값을 변경할 수 있는 여부를 정의한다. false일 경우 값이 변하지 않는다
- configurable : 속성 기술자를 변경할 수 있는 여부를 정의한다. false일 경우 속성 기술자를 다시 변경할 수 없다
*/
// user2 속성 기술자에 writable 속성을 false로 주고 value를 jeado로 주었다. 해서 bbo로 값을 재할당해도 바뀌지않는것을 알 수 있다.

// user3 객체에 toString 메소드로 정의학 속성 기술자를 통해 이 메소드 enumerable을 false로 재정의한다.
// 그런 후 for..in루프로 모든 속성에 접근하여 속성이름을 콘솔에 출력한다
// 하지만 toString 속성은 enumerable를 false로 정의하여 출력하지 않는다.