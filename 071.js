// 문자열 길이 구하기 (length)
// length는 String 객체에 미리 정의되어 있는 기본속성이다. 이를 통해 문자열의 길이를 구할 수 있는데 호출하는 방법은 다음과 같다

const arr = ['short', 'long sentence it is not appropriate'];

arr.forEach(str => {
    if(str.length <10) console.log(str);
});

// 변수 arr에 두개의 문자열을 요소로 찾는 배열을 대입한다.
// arr[0]에는 'short'인 짧은 문장 arr[1]에는 "long sentence it is not appropriate"인 긴문장이 있다

// 변수 arr을 forEach로 순환하여 내부 요소에 접근한다. 이 때 길이가 10보다 작은 경우에만 console.log로 값을 출력한다
// 이 조건문은 변수 arr 내부 값중에서 'short'만 해당하므로 'short'만 출력되고 다른 문자열을 출력되지 않는다
