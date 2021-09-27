// 배열 뒤에 요소 추가하기 (push)
// 자바스크립트 배열 자료형은 Linked List 자료구조 형태를 가지고 있다.
// 따라서 배열 앞과 뒤에서 요소를 추가하는 것이 가능하다. Array 내장객체 메소드 push는 배열 뒤에서 요소를 추가한다

const festa = ['mang'];
festa.push('chimmy');
festa.push('tata');
festa.push('cooky');
festa.push('shooky');
festa.push('koya');
festa.push('rj');

festa.forEach(name =>{
    console.log(name);
});

// 문장 순서대로 festa 배열 뒤에 요소를 추가한다

// 반복문을 이용하여 festa 배열의 요소들을 콘솔로 출력한다.