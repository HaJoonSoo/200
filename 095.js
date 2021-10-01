// 모든 배열 요소가 특정 조건을 만족하는지 확인하기 (every)
// Array 객체의 every 메소드는 배열의 모든 요소가 callback 함수 조건을 만족하는지 확인한다
// 따라서 callback 함수 조건이 한번이라도 false인 경우, false반환과 함께 실행이 종료된다
// 모든 조건결과가 true일 경우에만 every메소드는 true를 반환한다

const arr = [
    {id: 0, name:'혜림', age: 6},
    {id: 1, name:'현일', age: 3},
    {id: 2, name:'현아', age: 5},
    {id: 3, name:'우림', age: 2}
];

const isAllHyunA = arr.every(el => el.name == '현아');
const youngerThanSevenAll = arr.every(el => el.age < 7);

console.log(isAllHyunA);
console.log(youngerThanSevenAll);

// 객체 요소의 name속성값이 '현아'인지 확인한다. 
// arr 배열의 첫 번째 요소가 '혜림'이기 때문에 false를 반환한다
// 따라서 every 메소드 결과값도 false를 반환하며 실행이 종료된다

// 객체 요소의 age속성값이 모두 숫자 6보다 작은지 확인한다. 
// arr 배열 마지막까지 순환해야 모든 age는 6보다 작은값임을 알 수 있다
// 따라서 every값은 true를 반환한다