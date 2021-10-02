// 배열 내 값을 누적시키기 (reduce)
// Array 객체의 메소드 reduce는 배열요소를 순환하면서, 정의된 callback 함수에 의해 단일 값으로  누적시킬수 있다

// reduce 메소드의 형태로 인자는 callback함수와 초기값을 받는다
// 첫번째 callback 함수는 기존 다른 메소드와 달리 여러 매개변수를 정의한다
// 아래와 같이 최대 4개까지 매개변수를 받고, 첫번째 누적된 값과 현재 요소값은 필수이다
// redude 메소드가 처음에 실행할 때 누적된 값은 두번째 인자 값을 할당받는다
// 이후에는 배열 순환이 끝날 때까지 callback 함수에서 반환된 값으로 재할당된다

const numArr = [1, 2, 3, 4, 5];

const result = numArr.reduce((acc, el) => {
    return acc + el
}, 0);

console.log(result);

// 숫자형 값이 나열된 배열 리터럴을 numArr 변수에 대입한다

// reduce의  callback 함수 매개변수로 첫번째 acc와 el을 정의한다
// 매개변수로 전달된 acc와 el을 합산하여 callback함수 결과값으로 변환한다
// 이렇게 변환된 값은 reduce로 순환된 다음 요소차례에서 acc로 할당되어 전달된다
// 즉, return으로 반환된 값은 다음 배열 요소의 acc가 된다는 의미이다
// 또한 배열의 모든 요소들을 순환하고 난 마지막 반환값이 바로 reduce의 메소드의 결과값이 된다