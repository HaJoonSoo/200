// Async 이해하기

// ECMAScript 2017 (ES8)에서 소개된 async 함수를 살펴 보겠다.
// async 함수는 함수안의 await 구문과 함께 비동기 작업을 제어한다.
// await 키워드는 반드시 async 함수 안에서만 유효하다.

// async 함수의 동작 방식은 다음과 같다.
// 처음 async 함수의 호출되어 await 키워드가 있는 비동기 작업(promise 객체)이 실행되면, 해당 비동ㄱ 함수는 이벤트 루프를 통해 비동기로 작업을 처리한다.
// 그동안 async함수는 이러한 비동기 작업이 완료될 때까지 일시 중지 상태로 비동기 작업의 해결을 기다린다.
// 이 작업이 완료되면 async 함수가 다시 실행되고, 함수결과를 반환한다.

// async 함수를 선언하는 방법에는 async함수 선언문(async function)과 표현식(async function expresion)이 있다.
// 이 선언문과 표현식은 "함수 이해하기"에서 살펴본 선언문/표현식과 유사하다
// 다만 async함수는 function 선언 앞에 async 키워드가 붙는다

