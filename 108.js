// 10진수 아닌 진법을 다른 진법으로 변환하기 (parseInt)
// parseInt 함수를 활용하여 숫자의 진법을 변환해 보겠다
// parseInt를 활용하여 특정 진법의 숫자를 10진수로 변환할 수 있다

const bin = 1000010011;
const oct = 1023;
const hex = 213;

const dexByBin = parseInt(bin, 2);
const dexBtOct = parseInt(oct, 8);
const dexByhex = parseInt(hex, 16);
const hexByOct = parseInt(oct, 8).toString(16);

console.log(dexByBin);
console.log(dexBtOct);
console.log(dexByhex);
console.log(hexByOct);

// bin 변수 2진수 1000010011을 대입한다

// oct 변수에 8진수 1023을 대입한다

// hex 변수에 16진수 213을 대입한다

// 글로벌로 어디서든 호출 가능한 parseInt 변수와 숫자 2를 넣는다.
// 이는 bin변수가 2진수라는 의미로, 2진수 값을 10진수로 변환한다
// 변환된 결과값은 dexByBin변수에 할당하여 선언한다

// 8진수 oct변수값을 10진수로 변환하여 dexByOct 변수에 할당 선언한다

// 16진수 hex변수값을 10진수로 변환하여 dexByhex 변수에 할당 선언한다

// 8진수 값인 oct 변수를 10진수로 변환한다
// 그리고 나서 toString(16)을 통해 10진수의 값을 16진수로 연달아 변환한다
// 변환된 결과값은 hexByOct 변수에 할당하여 선언한다

