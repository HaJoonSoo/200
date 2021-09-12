// try-catch-finally 문은 try블록 안에서 발생된 에러를 잡아내고,
// catch 블록으로 제어권을 넘긴다. try블록에서 발생된 에러 정보는 catch문의 변수로 전달됨
// 해서 개발자는 프로그램 종료 없이 어떤 에러가 발생했는지 확인가능
// finally 블록은 에러발생의 여부와 상관없이 실행되는 블록이다

function checkNumber(val) { 
    if(typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인되었습니다');
}

try{
    checkNumber(100);
    checkNumber('wrong type');
}catch (e) {
    console.log(`에러가 발생했습니다. >>> ${e}`);
}finally{
    console.log('완료');
}

// 첫번째에서 사용된 예제 checkNumber 의 함수와 동일

// 첫번째 예제와 동일하게 에러가 발생됨
// 그러나 try문의 블록안에 있기 때문에 발생된 에러는 catch 블록으로 전달

// 변수 e에 에러정보가 전달된다
// e에 대입되어 있는 메세지 표시

// finally 블록은 코드가 모두 실행되고 난 뒤 마지막에 실행된다
// 에러여부와 상관없이 항상 실행되기 때문에 '완료' 문자열이 표시된다.