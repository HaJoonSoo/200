// 활용예제에서 isInteger를 사용해 보겠다

function verifyInteger(n) {
    if (!Number.isInteger(n)) return 0;
    return n;
}
const num1 = verifyInteger(15);
const num2 = verifyInteger(Infinity);
const num3 = verifyInteger(0.05);
console.log(num1, num2, num3);

// 함수에 대입된 값이 정수가 아니면 산술 처리 불가로 인식한다. 따라서 바로 0을 리턴하며 함수를 빠져나온다

// 함수에 대입된 값이 정수인 경우 함수에 대한 결과값으로 반환한다.

// 숫자 15는 바로 반환되어 num1에 대입된다

// 'Infinity'는 사실 무한대수를 뜻하는 숫자형이지만, Integer의 byte 크기를 뛰어넘는 큰 수이다
// 따라서 isInteger 결과값은 0을 반환한다

// 0.05는 실수형 값이기 때문에 결과값 0을 반환한다
