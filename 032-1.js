var arr = [1, 2, 30, 44, 5];

var[b, c, ...rest] = arr;
console.log(`0) b >>> ${b}`);
console.log(`0) c >>> ${c}`);
console.log(`0) rest >>> ${rest}`);

var [a=10, f=9] = [1];
console.log(`1) a >>> ${a}`);
console.log(`1) f >>> ${f}`);

[a, f] = [f, a];
console.log(`2) a >>> ${a}`);
console.log(`2) f >>> ${f}`);

function getArr() {
    return [1, 2, 3, 4, 5, 6];
}
[a, , , , ,f] = getArr();
console.log(`3) a >>> ${a}`);
console.log(`3) f >>> ${f}`);

// arr 배열에 숫자형 요소들이 5개 대입되어 있다.
// 배열을 비구조화 할 떄는 대괄호를 사용하며 대괄호 안의 변수에 뱌열 요소가 순서대로 하나씩 할당된다

