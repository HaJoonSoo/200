// 배열 요소를 분할/변환하기 (from)
// Array 내장객체의 메소드 from은 대입된 문자열 값을 구분자 없이 분할한다
// 그리고 분할된 문자는 배열 요소에 각각에 대입되어, 결과값으로 배열을 반환한다
// 첫번째 인자는 배열요소로 분할 변환된 문자열을 대입한다
// 두번째 인자는 필수값은 아니지만, callback함수를 대입하면 분할함과 동시에 각 값을 변환시킬 수 있다

const str = '12345678';

const distributedArr = Array.from(str);
console.log(distributedArr);

const modifiedArr = Array.from(distributedArr, e1 => e1 * 2);
console.log(modifiedArr);

// 변수 str을 Array.from에 대입하여 호출한다. 호출한 결과값은 distributedArr에 다시할당한다
// Array.from문자열을 대입하면 구분자없이 문자열을 하나씩 쪼개서 배열을 반환한다
// '12345678' 문자열이 분할되어, 배열['1', '2', '3',,,,,,'8']이 distributedArr 변수에 대입된다

// Array.from의 두번째 인자로 callback 함수를 넣을 수 있다
// 이때에는 분할된 배열값의 내부 요소들이 하나씩 callback함수로 전달된다.
// 전달된 요소들은 callback함수에 따라 처리되고 처리된 이후 최종 결과값으로 변환된다
