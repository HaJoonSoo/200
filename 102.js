// 객체에서 값만 추출하기 (values)

const obj = {
    movie : 'Sunny',
    music : 'Like Sugar',
    style : 'Retro',
    price : Infinity
};

const arr = Object.values(obj);
console.log(arr);

// obj 변수에 객체 리터럴을 대입한다

// Object 객체의 메소드 values를 호출하고, 인자로 obj 변수를 넣는다
// values는 obj 변수에 정의된 속성값들만 추출한다
// 따로 추출된 속성값들은 새로운 배열에 담아 변수 arr에 대입한다
