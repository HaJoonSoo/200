// argument 객체 이해하기

// 자바스크립트 함수는 매개변수를 가진다.
// 여기서 매개변수와 같이 사용되는 용어가 있는데 바로 전달인자(argument)이다.
// 매개변수가 함수 선언 시 작성되는 변수라면, 전달인자는 함수가 호출될때 전딜되는 값이다.

// 자바스크립트는 전달인자의 개수와 매개변수의 개수가 달라도 에러를 발생시키지 않는다
// 해서 매개변수와 무관하게 함수 호출 시 더 많은 인자를 전달할 수 있다.
// 매개변수 외에 함수에서만 사용가능한 특별한 객체를 제공하는것이 agument이다

function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    console.log(arguments instanceof Array);
    return total;
}

var sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);

function testArg() {
    var newArr = Array.prototype.slice.call(arguments);
    console.log(newArr);
    console.log(newArr.indexOf('b'));
    console.log(arguments.indexOf('b'));
}

testArg('a', 'b');