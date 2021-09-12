// 함수 나머지 매개변수 이해하기

// ES6에서 새로 추가된 나머지 매개변수는 매개변수를 정의할 때 정해지지 않은 매개변수들을 정의할 수 있게 한다.
// argument 객체와 유사하나 argument객체는 함수에 전달되는 모든 전달 인자를 포함하는 반면에
// 나머지 매개변수는 정해지지 않은 나머지를 의미한다.

function sum(...args){
    var total = 0;
    for(var i = 0; i < args.length; i++){
        total += args[i];
    }
    console.log(args.indexOf(1))
    return total;
}
console.log(sum(1, 2, 3));

function sum2(a, b, ...other){
    var total = a+ b;
    for(var i=0; i < other.length; i++){
        total += other[i];
    }
    return total;
}
console.log(sum2(1, 2));
console.log(sum2(1, 2, 3, 4));

// sum 함수를 나머지 매개변수로 정의하고 있다.
// 나머지 매개변수인 args는 배열이기 떄문에 [인덱스]를 통해 접근이 가능하고 indexOf 와 같은 매ㅔ소드를 사용할 수 있다
// 1, 2, 3 전달 인자들은 args 배열이 되고 배열을 순차적으로 접근하여 total 변수값과 더하면서 그 결과를 바로 대입한다
// 마지막으로 전체 합계인 total을 반환한다

// sum2함수는 sum 함수와 다르게 a와 b 매개변수를 가지고 있다.
// 그리고 두 매개변수 외에 other라는 나머지 매개변수를 정의하고 있다.

// sum2 함수 호출 시 a와 b 두 매개변수보다 더 많은 인자가 전달되기 떄문에 1과 2는 각각 a와 b에 전달되고
// 나머지 3과 4는 other 나머지 매개변수의 배열의 요소로 전달된다.