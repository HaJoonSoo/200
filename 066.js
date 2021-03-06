// 실수영 숫자로 변환하기 (parseFloat)
// parsrFloat 함수는 대입된 값을 부동 소수점 숫자로 변환한다. 만일 값에 숫자, 소수점, 지수기호가 아닌 다른 값이 들어오는 경우 생략된다
// parseFloat함수도 parseInt와 동일하게 어떤 내장 함수객체에도 속하지 않은 전역에서 사용 가능한 내장함수이다

console.log(parseFloat(5.55));
console.log(parseFloat('5.55'));
console.log(parseFloat('5.55 숫자의 결과값'))

// 숫자 5.55를 넣으면 소수점이 잇는 실수이기때문에 그대로 값을 반환한다
// 문자 5.55를 넣으면 소수점이 있는 숫자형으로 변환하여 반환한다
// 문자 5.55이외에 다른 문자 또는 공백은 생략되어 숫자 5.55만이 반환된다
