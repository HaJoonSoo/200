// 배열 요소 일괄 변경하기 (map)
// 배열의 요소를 일괄 변경해야 하는 경우, Array 객체의 map 메소드를 활용한다.
// callback 함수의 return으로 반환되는 값들을 재조합하여 새로운 배열에 만든다

const arr =[
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 2, name: '현아', age: 5},
    {id: 3, name: '우림', age: 2}
];

const arr2 = arr.map(el => {
    el.age = el.age + 1;
    return el;
});

const arr3 = arr.map(el => el.name);

console.log(arr2);
console.log(arr3);

// 객체인 요소들을 가진 배열을 변수 arr에 선언한다

// map 메소드를 통해 arr배열의 각 요소가 매개변수 el로 전달된다

// 각 요소의 age속성에 1을 더해서, 다시 속성 age에 대입한다

// map 메소드는 callback 함수의 리턴값에 따라 반환되는 배열값이 바뀐다.
// 여기서는 속성만 변경하여 다시 객체를 반환했기 때문에, arr2 변수에는 객체 요소로 구성된 배열이 할당된다

// callback함수는 전달된 요소의 name속성만 반환한다
// 따라서 arr3 변수에는 문자열로 구성된 새로운 배열이 할당된다
