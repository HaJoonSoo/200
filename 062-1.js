// 함수 verifyumber를 통해 NaN 여부를 검증하여 모든 값이 정상 숫자임을 확인한 후 안전한게 산술연산한다

function verityNumber(n) {
    if(!n || Number.isNaN(n)) return 0;
    return n;
}
const num1 = verityNumber(15); // 15
const num2 = verityNumber(undefined); // 0
const num3 = verityNumber(null); // 0
const num4 = verityNumber(NaN); // 0
console.log(num1 + num2 + num3 + num4);

// 함수에 대입된 값이 빈 값이거나 NaN이면서 산술처리 불가한 값으로 인식한다
// 이때 산술연산에서 에러가 발생하지 않도록 0을 리턴하며 함수를 빠져나온다

// 함수에 대입된 값이 정상 숫자형인 경우 그대로 값을 반환한다

// 숫자 15는 정상 숫자형이므로 값 그대로 num1 변수에 대입된다

// undefined, null, NaN은 verityNumber 함수의 2라인 조건문에 해당하여 결과값을 0을 반환한다
// 각 값을 변수에 대입한다

// 변수 num1, num2, num3, num4 모두 합산한 결과값 15가 반환된다