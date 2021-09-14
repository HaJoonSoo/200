// let으로 변수 선언하기
// 자바스크립트의 새로운 표준인 ECMAScript 2015(ES6)가 나오기 전까지 변수는 var 키워드로만 정의할 수 있었다.
// 하지만 ES6에서 let 키워드가 나오면서 변수 선언 시 변수의 유효범위를 블록범위로 지정할 수 있게 되었다.

if (true){
    var functionScopeValue = 'global'
    let blockScopeValue = 'local';
}
console.log(functionScopeValue); 
console.log(blockScopeValue);

// if 문의 블록 안에 두 변수를 정의한다. 하나는 var키워드로 정의하고 다른하나는 let으로 정의한다

// var 키워드로 정의한 functionScopeValue 변수는 함수 단위의 유효범위를 가지게 되어 if문의 블록에서 정의하여도 블록 밖에서도 접근 가능

// let 키워드로 정의한 blockScopeValue 변수는 블록 단위의 유효범위를 가지게 되어
// if 문의 블록 밖에서 접근할 경우 에러가 발생한다