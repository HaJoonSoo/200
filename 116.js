// JSON을 문자열로 변환하기 (stringfy)

// JSON 객체의 stringfy 메소드는 대입한 값을 JSON으로 변환한다
// JSON.stringfy 메소드 활용방법은 다음과 같다

// JSON.stingfy(값, 리플레이서, 공백 개수)

// 첫 번째 인자는 JSON으로 변환할 대상 값이다

// 두 번째 리플레이서는 JSON 문자열로 변환하기 전에 값을 변걍하는 인자이다.
// 이 때 리플레이서로 콜백함수를 넣거나, 특정 키 정보를 담은 배열을 넣어 값을 변경한다

// 세 번째 인자 공백 개수는 JSON 문자열의 들여쓰기 시 공백 개수를 의미한다.
// 1 부터 10 까지 지정할 수 있고, null이나 0 또는 음수인 경우 공백을 사용하지 않는 것으로 간주한다.

const testStringfy = {
    stringfiedNum : JSON.stringify(13.1),
    stringfiedStr : JSON.stringify('Kiss Carnival'),
    stringfiedBln : JSON.stringify(false),
    stringfiedArr : JSON.stringify([2003, 2017])
};

for (let key in testStringfy) {
    console.log(`--------${key}---------`);
    console.log(typeof testStringfy[key]);
    console.log(testStringfy[key]);
}

console.log(`--------stringifyObj---------`);
const obj = {
    drame : 'PET',
    season : 2017,
    casting : ['koyuki', 'matsumoto jun'],
    charactor : ['sumire', 'momo']
};

console.log(typeof JSON.stringify(obj));
console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj, ['drame', 'season']));
console.log(JSON.stringify(obj, null, 4));
console.log(JSON.stringify(obj, (key, val) => {
    if (key === 'season') return 2003;
    return val;
}, 4));

// JSON.stringify의 값을 확인하기 위해 변수 testStringify를 선언한다.
// testStringify 객체 속성값으로 JSON.stinrgify 메소드와 숫자, 문자, 불리언, 배열 자료형을 각 인자로 넣는다

//testStringify 객체를 for...in으로 순회하면서, 직접 정의한 속성 키 정보가 변수 key에 할당된다

// testStringify 객체에서 변수 key와 동일한 키 리음의 속성값이 어떤 자료형인지 콘솔 출력으로 확인한다.
// Stingify는 대입된 모든 값을 JSON문자열 자료형으로 변환하기 떄문에 결과값 String을 출력한다

// 변수 key와 동일한 키 이름의 속성값을 확인한다.
// 숫자, 문자, 불리언, 배열 자료형을 JSON.stringify 함수에 대입한 결과값을 확인할 수 있다. 
// 값에 큰 차이는 없으나, "13.1", "Kiss Carnival", "false", "[2003, 2017]" String 자료형으로 변환된 값을 확인할 수 있다