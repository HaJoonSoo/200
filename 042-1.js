const CONST_USER = {name : 'jay', age: '30'};
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER = {name: 'bbo'};

// const로 정의된 CONST_USER는 불변객체가 아니라서 name속성에 다른값을 할당할 수 있다.
// 마찬가지로 age 속성도 변경이 가능하다.
// 객채의 내부상태가 변경 가능하기 떄문에 const로 배열을 선언하여도 새로운 요소를 추가하거나 변경할 수 없다

// const로 정의되었기 때문에 재할당만 되지 않는다, 즉 새로운 객체로 할당을 할 수 없고 객체 내부의 상태만 변경할 수 있다.