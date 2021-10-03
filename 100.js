// 중첩된 배열을 단일하게 만들기 (reduce)

const arr = [1, [2, 3], [4, 5, 6], ['배열', '나열하기'], 'JavaScript'];

const result = arr.reduce((acc, el) =>{
    return acc.concat(el);
}, []);

console.log(result);

// arr 변수에 배열을 대입한다. 이때 배열 안에는 숫자형, 배열, 문자형 값이 나열되어 있다.

// arr 배열의 reduce 메소드를 호출하여 요소를 순환한다
// reduce의 결과값은 result 변수로 다시 대입한다

// callback 함수의 첫 번째 인자 acc와 현재 요소값인 el를 concat으로 병합한다. 
// 해당 코드로는 acc값이 어떤 자료형인지 확인할 수 없지만, 빈 배열이 초기값으로 할당된것을 알 수 있다

// 초기값으로 빈 배열을 대입한다
// 따라서 빈 배열 []부터 [1], [1, 2, 3], [1, 2, 3, 4, 5, 6]...의 연속으로 arr내부 요소들을 차곡차곡 병합하게 된다
