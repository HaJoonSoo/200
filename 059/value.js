export let value = 1;

srtTimeout(() => {
    value++;
}, 1000);

// value 변수에 1을 할당한다

// 1초 후에 변수를 1 증가시켜 value에는 2가 할당된다
