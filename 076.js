// 특정 문자열 위치 확인하기 (lastIndexOf)
// 앞에서 보았던 것과 달리 lastIndexOf는 뒤에서부터 시작한다

const str = 'Carpe dium, seize the day';

console.log(`"e"는 ${str.lastIndexOf('e')} 번째 인덱스에 있다.`);
console.log(`대문자 "E"는 ${str.lastIndexOf('E')} 번째 인덱스에 있다.`);
console.log(`소문자 "c"는 ${str.indexOf('c')} 번째 인덱스에 있다.`);
console.log(`문자열 ", se"는 ${str.indexOf(', se')} 번째 인덱스에 있다.`);

