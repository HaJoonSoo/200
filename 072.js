// 문자열로 반환하기(toString)
// 자바스크립트의 모든 객체는 Object를 상속받기 때문에, 다른 모든 객체는 protorype을 통해 Object의 내장 메소드
// toString()을 상속받은 것과 다르다

const num = 5;
const bool = "true";
const str = "문자열 값";
const arr = [1, 2, 3];
const obj = {a: 15};

console.log(num.toString());
console.log(bool.toString());
console.log(str.toString());
console.log(arr.toString());
console.log(obj.toString());

num.__proto__.toString = () =>{
    return 'toString 덮어쓰기';
};
console.log(num.toString());

// 숫자, 불린, 문자, 배열, 객체 자료형의 값을 각각 변수로 대입한다
// 선언한 변수의 toString()을 호출하여 console.log로 출력한다
// 변수 중에서 num변수의 __proto__를 통해 toString 메소드를 직접 재정의한다
// 새로 정의한 함수는 고정된 문자열 'toString 덮어쓰기'를 반환한다
// 여기서 호출된 toString() 메소드는 재정의한 toString이 호출되며 console.log로 출력한다