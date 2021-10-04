// 객체를 배열로 변환하기 (entries)

const obj = {
    movie : 'Sunny',
    music : 'Like Sugar',
    style : 'Retro',
    price : Infinity
};

const modifiedObj = Object.entries(obj);
console.log(modifiedObj);

// entrise 메소드에 변수 obj를 인자로 넣어 호출한다.
// obj 객체가 배열로 변환된다

// modifiedObj를 콘솔출력하여 결과를 확인한다.
