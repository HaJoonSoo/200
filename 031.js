// ES6의 향상된 객체 문법 알아보기 - 속성 계산명

var obj = {};
for (var i = 0; i < 4; i++){
    obj['key' + i]= i;
}
console.log(obj);

var profile = 'chloe:30';
var person = {
    [profile] : true,
    [profile.split(':')[0]]: profile.split(':')[1]
};
console.log(person);

// 1. 객체를 변수 obj에 대입한다.
// 2. 변수 i가 0부터 3까지 반복하는 for반복문을 작성한다.
// 3. 객체 obj에 속성을 추가한다. 속성 접근자 []를 활용하여 계산된 속서명을 정의한다.
//    이때 속성명은 key0, key1, key2, key3으로 숫자가 증가하도록 정의합니다
// 4. 객체 obj 콘솔 출력
// 5. 변수 profile에 'chloe:30'문자열을 대입한다.

//객체 person 리터럴 정의할 떄 속성 계산명을 활용한다.
// profile문자열을 키값으로 하는 속성을 정의한다.
// 속성 접근자 구문과 동일한 대괄호를 사용하고 그안에 profile변수를 넣으면 해당 변수값이 속성명으로 정의된다.
