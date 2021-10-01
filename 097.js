// 배열의 특정 조건을 충족하는 요소 찾기 (find)
// Array 객체의 find메소드는 인자로 대입된 callback함수를 통해 배열 내부를 순환하면서 특정조건을 만족하는 첫 번째 요소를 반환한다
// 확인하는 방식은 callback 함수 내부에 정의된 문장들을 통해 테스트하게 되는데
// callback함수의 반환값은 무조건 true 아니면 false를 반환해야한다

const arr = [
    {name: '우림', age: 2},
    {name: '현아', age: 5},
    {name: '탄이', age: 30},
    {name: '현일', age: 3},
    {name: '혜림', age: 6}
];

const myFriend = arr.find(a => a.age === 30);
console.log(myFriend);

// 변수 arr에 배열 리터럴을 대입한다. 배열에는 객체형 요소들을 정의한다

// arr 배열의 find로 호출한 결과값을 myFrind 변수에 할당한다.
// callback 함수에 정의된 조건식은 각 요소의 age속성이 숫자 30과 일치하는지 확인한다
// 즉, 내부 요소 중 age 속성이 30과 일치하는 첫 번째 요소가 myFriend 변수에 대입된다
