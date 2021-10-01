// 배열의 특정 조건을 기준으로 필터링하기 (filter)
// Array 객체의 filter메소드는 인자로 대입된 callback 함수를 통해 배열 내부를 순환하면서,
// 요소 각각이 특정 조건을 만족하는지 확인한다. 확인하는 방법은 callback 함수 내부에 정의된 문장들을 통해 테스트하게 되는데
// callback 함수의 반환값은 무조건 true 또는 false여야한다
// 이 중에서 true 결과값을 만족하는 요소들을 다시 새로운 배열에 담아 반환한다

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredTwo = arr.filter(a => {
    console.log(`현재 위치의 값은 ${a} 입니다`);
    return a % 2 == 0;
});
console.log(filteredTwo);

const filterThree = arr.filter(a => a % 3 == 0);
console.log(filterThree);

// 변수 arr에 숫자 1부터 10까지의 값이 순서대로 대입된 배열을 할당한다

// filter 메소드의 callback함수를 통해, arr 배열의 내부요소가 각각 a변수로 할당된다

// 순환하는 진행 상황을 알 수 있는 콘솔 출력이다. a 변수를 출력하여 어떤 요소값이 할당되어 있는지 알 수 있다

// a 변수를 2로 나눈 나머지 값이 숫자 0과 일치하면 true, 일치하지 않으면 false를 반환하는 조건식이다 return을 통해 조건식의 결과값을 확인한다

// filterTwo 변수를 출력한다 filter 메소드는 함수의 결과값이 true를 만족하는 요소를 새로운 배열로 모아 반환한다
// 즉 배열 요소중에서 나머지값이 0인 요소들만 배열 리터럴로 출력된다