// 배열 앞에 요소 추가하기
// Array 내장객체의 unshift 메소드는 배열 맨앞에 요소를 추가하는 함수이다

const festa = ['mang'];
festa.unshift('chimmy');
festa.unshift('tata');
festa.unshift('cooky');
festa.unshift('koya');
festa.unshift('rj');

festa.forEach(name => {
    console.log(name);
});

// unshift 메소드를 활용하여 순서대로 festa 배열 앞에 요소를 추가한다
// push 함수 예제와 동일한 순서로 요소를 추가했지만 다른결과를 가져온다
