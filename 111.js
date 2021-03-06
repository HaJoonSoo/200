// 특정 자리수에서 올림하기 (ceil)
// Math 객체의 ceil 메소드는 매개변수의 소수점 다음의 값을 올림한다

const positiveNum = 93.54;
const negativeNum = -39.27;

console.log(Math.ceil(positiveNum));
console.log(Math.ceil(negativeNum));
console.log(Math.ceil(positiveNum * 10) / 10);
console.log(Math.ceil(positiveNum / 10) * 10);
console.log(Math.ceil(negativeNum * 10) / 10);
console.log(Math.ceil(negativeNum / 10) * 10);

// 변수 positiveNum에는 양의 실수값 93.54, 변수 negativeNum에는 음의 실수값 -39.27을 대입한다

// ceil 메소드는  소수점 기준으로 올림한다
// 소수점 바로 오른쪽에 숫자 5를 올림하여 숫자 94를 반환한다

// 소수점 바로 오른쪽에 숫자 2를 올림하여 -39를 반환한다
// -40을 예상할 수도 있으나, 음의 실수 -39.27을 소수점 위치값 기준에서 '큰 값으로 올림'이라 생각하면 -39가 된다

// 소수점 두 번쩨 자리에서 올림하는 방법이다
// 먼저 숫자 10을 곱해서 소수점 두 번째 숫자 4 앞으로 소수점을 옮겨 935.4로 만든다
// 이때 ceil 메소드를 적용하면 936을 반환한다.
// 적용한 후에 10으로 다시 나누어 소수점을 원래대로 옮겨놓는다.

// 일의자리에서 ㅇㄹ림하는 방법이다
// 먼저 숫자 10을 나누어 일의 자리 숫자 3 앞으로 소수점을 옮기면 9.3이 된다
// 이때 여기에 ceil 메소드를 적용하여 10으로 만든다
// 그리고 다시 10을 곱해서 소수점을 원래대로 옮겨 놓는다

// 음의 실수 소수점 두번째 자리에서 올림하는 방법이다.
// 먼저 숫자 10을 곱해서 소수점 두번째 숫자 2 앞으로 소수점을 옮겨 -392.7로 만든다
// 이 때 ceil메소드를 적용하면 -392를 반환한다
// 적용한 후에 10으로 다시 나누어 소수점을 원래대로 옮겨놓는다 

// 음의 실수 일의 자리에서 올림하는 방법이다
// 먼저 숫자 10을 나누어 일의 자리 수 9 앞으로 소수점을 옮기면 -3.927이 된다
// 여기에 ceil메소드를 적용하여 -3으로 만든다
// 그리고 다시 10을 곱해서 소수점을 원래대로 옮겨놓는다