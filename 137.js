// 일정 시간마다 코드 실행하기 (setInterval)

// setInterval도 setTimeout과 동일하게 글로벌 객체에 내장된 메소드이다.
// setInterval 메소드는 인자로 callback함수와 지연 시간을 받는다. 이를 통해 지연 시간을 두고 일정한 간격으로 callback함수가 계속 실행된다.
// setInterval 메소드를 실행하면 결과값으로 id 값을 반환한다
// id를 clearInterval 메소드에 넣으면, 해당 id 타이머의 작업을 취소할 수 있다.

let count = 0;

const timer = setInterval(() => {
    console.log(`${count++} 번째 함수가 실행됩니다.`);
}, 1000);

clearInterval(timer);

// count 변수에 숫자 0을 대입한다. 시간이 지남에 따라 변수값의 증가를 확인하는 변수이다

// setInterval 메소드를 실행하고, 반환되는 id값을 timer 변수에 대입한다.
// setInterval이 1000ms(1초)마다 콜백 함수를 실행한다. 그때마다 count 변수값이 1씩 증가한다