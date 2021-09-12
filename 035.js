// 예외 처리하기

// js코드는 실행하다 에러가 발생하면 그 즉시 중단된다. 
// 이를 대비하여 예외처리는 반드시 필요하다.
// 이를 처리할 수 있는 방법에는 throw문과 try-catch-finally문이 있다

function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인되었습니다.');
}

checkNumber(100);
checkNumber('wrong number');
console.log('완료');

// throw문은 예외사항을 미리 파악하고 에러를 발생시켜 이후 코드가 실행되지 않도록 한다.
// 이는 결국 에러를 발생시킨것이므로 프로그램이 중단되는것을 막을 수는 없다
// 이 에러 발생에 대한 해결책이 바로 트라이캐치문
