// 객체에서 키만 추출하기 (keys)

const obj = {
    movie : 'Sunny',
    music : 'Like Sugar',
    style : 'Retro',
    price : Infinity
};

const arr = Object.keys(obj);

console.log(arr);

// obj 변수에 객체 리터럴을 대입한다. obj 객체에는 4개의 속성이 정의되어 있다

// Object 객체의 메소드 keys를 호출하고, 인자로 obj 변수를 넣는다.
// keys는 obj 변수에 정의된 속성 키 정보들만 추출한다
// 추출된 값들은 새로운 배열에 담아 변수 arr에 대입한다
