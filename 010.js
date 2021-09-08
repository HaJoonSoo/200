//조건문 배우기

// if조건문은 표현식을 소괄호로 둘러싼 형태를 가진다.
// 이때 표현식에서는 의사결정을 할 수 있는 조건문을 작성하면 된다.
// 이 조건문의 결과값은 항상 불린형을 값으로 번환되어야하며, 
// if조건문 결과값이 불린형인 경우에만 다음 명령문이 실행된다.

var result = true;
if(result) console.log('result가 참')
if(!result)
    console.log('실행불가')
if(result){
    console.log('result의 결과')
    console.log(' >> 참입니다.')
}