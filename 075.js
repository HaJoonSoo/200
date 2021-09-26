// 특정 문자열 위치 확인하기 (indexOf)

const str = 'Carpe dium, seize the day';
console.log(`"e"는 ${str.indexOf('e')} 번째 인덱스에 있다.`);
console.log(`대문자  "C"는 ${str.indexOf('C')} 번째 인덱스에 있다.`);
console.log(`소문자 "c"는 ${str.indexOf('c')} 번째 인덱스에 있다.`);
console.log(`문자열 ", se"는 ${str.indexOf(', se')} 번째 인덱스에 있다.`);

const arr = ['Carpe', 'diem', 'seize', 'the', 'day'];
const howManyHasE = (arr) => {
    let count = 0;
    arr.forEach((str) => {
        if (str.indexOf('e') > -1 )count++;
    });
    return count;
}

console.log(`${arr}에 "e"가 있는 요소는 모두 ${howManyHasE(arr)} 개 이다.`);

// 변수 str에 문자열 Carpe dium, seize the day를 대입한다
// indexOf 메소드는 특정 문자와 일치하는 첫번쨰 인덱스 값을 반환한다.
// indexOf는 대소문자를 구분한다. 대문자 C는 첫번ㅉ 인덱스 값을 반환하지만, 소문자 c와 일치하는 문자가 없기 떄문에 -1를 반환한다

// 매개변수로 전달된 arr 변수를 forEach로 순환하면서, 문자열 요소에 소문자 e가 있는 확인한다
// 만일 소문자 e가 있다면 indexOf 함수의 결과값은 -1 보다 큰수를 반환하고, 해당 조건이 충족하면 count변수의 수가 1씩 증가한다
