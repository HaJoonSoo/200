function greeting(){
    "hello"
    "chloe" + 3
    greeting()
}

greeting(if(true) {console.log("It is not acceptable")})

// greeting 함수를 정의한다. 함수 몸토부에는 일반적으로 명령문을 작성한다, 그러나 2~3라인
// 처럼 명령문 대신 표현식을 사용할 수 없다.

// 함수 인자에는 값을 넣어야한다. 그러나 7라인에서는 값으로 의도된 곳에 표현식 대신
// if명령문을 넣었으므로 구문오류가 발생함