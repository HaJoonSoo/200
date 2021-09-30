// 배열 순환하기 (forEach)
// Array 내장 객체의 forEach 메소드는 배열 내부 요소를 순환하며,각 요소에 대해 callback함수를 실행한다

const arr =[
    {id : 0, name: '혜림', age: 6},
    {id : 1, name: '현일', age: 3},
    {id : 2, name: '현아', age: 5},
    {id : 3, name: '우림', age: 2}
];

arr.forEach((el) => {
    console.log(el.name);
});

// 배열 arr의 forEach를 호출한다.
// 뱌열의 내부요소는 callback 함수의 변수 el로 전달된다

// 배열 arr의 요소들은 객체 자료형으로 통일되어 있다. 객체의 el의 속성 name을 콘솔출력한다