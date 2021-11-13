// Promise 조합하기

// 하나의 비동기계산이 다른 비동기 계산의 결과에 의해 처리되어야 하는 경우가 많다.
// Promise가 나오기 이전에는 콜백 패턴을 통해 비동기 처리를 하였고, 중첩된 비동기 코드들을 처리하다 보면 콜백 비라미드 형태의 코드들이 쉽게 나왔었다

// 이런 비동기 코드들의 조합을 Promise 기반으로 작성하면 명료한 코드들 작성할 수 있고 예외 처리를 손쉽게 할 수 있다.
// Promise의 then 메소드에서 새로운 비동기 코드를 실행하는 Promise를 반환할 수 있는데 다음 then 메소드는 새롭게 만들어진
// Promise 코드가 이행되기 전 까지 호출되지 않는다