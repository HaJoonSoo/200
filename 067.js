// 문자열 양 끝의 공백 없애기 (trim)
// String 내장 객체의 trim 메소드는 문자열 양 끝의 공백, 탭, 줄바꿈을 제거한다
// 단, 함수가 적용된 문자열 원본 값에는 영향을 끼치지 않기 때문에 활용하려면 별도로 값을 저장해야한다

const sentences = ['    ABC abc', 'ABC abc  ', ` first
second third
        forth
sentence

`];
const filterSentence = (sentences) => {
    const filtered = [];
    sentences.forEach(s => {
        filtered.push(s.trim());
    });
    return filtered;
}

console.log(filterSentence(sentences));

// filterSentence함수는 매개변수로 전달된 배열을 forEach로 순환하여 각 요소에 접근한다
// 이때 베열 요소에 trim()을 적용하여 공백, 탭, 줄바꿈을 삭제하고, 필터링된 값들은 배열로 다시 반환한다

// filterSentence 함수에 sentances 변수를 인자로 대입하여 실행한다
