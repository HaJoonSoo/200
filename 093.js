// 배열의 순서를 반대로 나열하기 (reverse)
// Array 객체의 reverse 메소드는 배열 순서를 반대로 나열한다. 함수 호출시 원본 배열을 변형하기 떄문에 주의해야한다

const str = 'abcdefghijklmnopqrstuvwxyz';
const arr = str.split('');
arr.reverse();

console.log(arr.join(''));

// 변수 str에 알파벳 a부터 z까지 나열한 문자열을 대입한다

// split 메소드를 통하여 str문자열을 배열로 변환한다. 공백 없는 문자열 "로 분할해기 때문에
// 배열 요소에는 알파벳 한 문자씩 넣어진다

// join()메소드에 빈 문자열 넣어 실행한다
// 배열 arr이 구분자없이 한 문자열로 병합된다
// 따라서 알파벳 z부터 a까지 순서가 반대로 나열된 문자열이 출력된다
