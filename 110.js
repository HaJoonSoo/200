// 특정 자리수에서 반올림하기 (round)

const val = 573.926;

console.log(Math.round(val));
console.log(Math.round(val * 10) / 10);
console.log(Math.round(val * 100) / 100);
console.log(Math.round(val / 10) * 10);
console.log(Math.round(val / 100) * 100);

// 소수점 바로 오른쪽에 숫자 9를 반올림하여 결과값 574가 콘솔로 출력된다

// 소수점 두번쨰 자리에서 반올림하는 방법이다
// 먼저 숫자 10을 곱해서 소수점 두번째 숫자 2앞으로 소수점을 옮긴다
// 그 다음에 round 메소드를 적용하고, 곱한 만큼 숫자 10을 다시 나누어 소수점을 원래대로 옮겨 놓는다

// 코드의 5번째 라인은 val 값을 소수점 세번째 자리에서 반올림한다
// 6번째 라인은 일의 자리에서 그리고 7번째 라인은 십의 자리에서 val을 반올림한다
