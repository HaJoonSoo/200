// JSON문자열을 JSON으로 변환하기 (parse)

// 앞에서 JSON 문자열을 생성하는 방법을 배웠다면, 이번엔 JSON문자열을 JSON으로 변환하는 방법을 알아본다
// JSON 객체의 parse메소드는 JSON 문자열 값을 JSON으로 변환한다.

// JSON.parse(값, 리플레이서)

// 첫 번째 인자는 stringify로 변환할 대상 값이다

// 두 번째 리플레이서는 JSON으로 변환하기 전에 값을 변경하는 인자이다.
// 이때 리플레이서로 콜백(callback)함수를 넣거나 특정 키 (Key) 정보를 담은 배열을 넣어 값을 변경한다
// 리플레이서는 필수값이 아니다.

const jsonStr = '{"drama" : "PET", "season" : "2017", "casting" : ' +'["koyuki", "matsumoto jun"], "character" : ["sumire", "momo"]}';

console.log(JSON.parse(jsonStr));
console.log(JSON.parse(jsonStr, (key, val) => {
    if (key === 'season') val = 2003;
}));

console.log(JSON.parse('13.1'));
console.log(typeof JSON.parse('13.1'));
console.log(JSON.parse('false'));
console.log(typeof JSON.parse('false'));

console.log(JSON.parse('Kiss Carnival'));
console.log(JSON.parse('[2003, 2017}'));

// jsonStr의 값을 JSON.parse 메소드에 넣고 콘솔로 출력한다.
// 첫번째 인자만 넣었기 때문에 대입한 JSON문자열 값 그대로 JSON을 변환한다

// JSON.parse 메소드에 jsonStr 값을 첫 번째 인자로 넣는다.
// 두 번째 인자에는 값을 변경하기 위한 콜백함수를 대입한다
// callback 함수 매개변수로 jsonStr 각 속성의 키, 값이 전달된다

// 키 정보가 'season'일 때만 숫자 2003으로 변경한다.
// 그 외에는 val 매개변수로 전달된 값 그대로 반환한다

// 원시형 값 중 JSON 문자열이 아니어도 오류 없이 parse 매소드가 실행되는 경우가 있다.
// parse 메소드를 실행하면 문자열 '13.1'은 숫자형 13.1을 반환하고 문자열 'false'는 불린형 'false'를 반환한다

// 특정 원시 자료형을 나타내지 않는 분자형 또는 배열 형태의 문자형은 실행 즉시 SyntaxError를 발생시킨다.