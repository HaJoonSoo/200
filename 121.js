// 정규표현식으로 문자열 변환하기(exec)

// RegExp 객체의 exec 메소드는 정규표현식과 일치하는 문자열을 찾아 배열로 반환한다.
// 만일 일치하는 문자열이 없으면 null을 반환한다.

// 앞에서는 정규표현식을 활용하는 방법으로 세 가지 메소드를 살펴보았다.
// 문자열 여부를 true/false로 반한할때는 test메소드 일치하는 문자열의 위치를 찾을때에는 search 메소드
// 일치하는 첫 번재 문자열 또는 모든 문자열을 반환하고자 할대는 match 메소드를 사용한다.
// 이보다 exec 메소드는 좀 더 복잡하지만, 활용에 따라 일치하는 문자열과 해당 위치 정보들을 모두 알 수 있다

const str = 'Java is not in JavaScript';

const result1 = /java/ig.exec(str);
console.log(result1[0]);
console.log(result1.index);
console.log(result1.input);

const nums = '"1", "2", "3"';
const regex = /\d+/g;
while (result2 = regex.exec(nums)){
    console.log(result2, regex.lastIndex);
}