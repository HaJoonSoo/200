// NaN 값 확인하기 (Number.isNaN)

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN('Is it Number?'));
console.log(Number.isNaN(0));
console.log(Number.isNaN(null));
// Number 객체의 isNaN 메소드는 NaN을 구분한다.
// NaN이면 true를 반환하고 아니면 false를 반환한다 여기서 NaN이란 전역객체의 속성으로 Not a Number의 줄임말이다
console.log(Number.isNaN(-1));
console.log(Number.isNaN(0/0));
console.log(Number.isNaN(new Date()));
console.log(Number.isNaN(new Date().toString));
console.log(Number.isNaN('Infinity'));
// 음수는 숫자자료형이다 NaN이 아니기 때문에 false를 반환한다.
// 0과 0으로 나누는 것을 수학적으로 정의되지 않는 의미가 없는 연산이다
// 이 연산에 대한 결과값이 NaN이기 때문에 true를 반환한다
// new Date()가 실행되면 결과값은 현재 시간이 long 자료형의 값으로 변환된다
// 이는 NaN이 아닌 숫자형으로 false를 반환한다
// new Date()는 현재 시간을 long 자료혀으로 반환하지만, toString()을 통해 문자형으로 변환하면
//   ㄴ> 시간이 나오기 떄문에 NaN이 아니기 때문에 false를 반환한다
