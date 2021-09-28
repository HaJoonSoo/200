// 배열에 특정 구분자 넣어 문자형으로 변환하기 (join)
// Array 객체의 메소드 join은 각 배열 요소를 병합하여 하나의 문자열로 반환한다

const dialogue = [
    'Fear is the path to the dark side',
    'Fear leads to anger',
    'Anger leads to hate',
    'Hate leads to suffering',
    'I sense much fear in you.'
];

console.log(dialogue.join('. '));
console.log(dialogue.join('.\n'));

// dialogue 배열 각 요소 사이에 ',' 구분자를 넣어 하나의 문자열로 병합한다
// dialogue 배열 각 요소 사이에 '/n' 구분자를 넣어 하나의 문자열로 병합한다

