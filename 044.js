// 클로저 이해하기

function createCounterClosure() {
    let count = 0;
    return {
        increase: function(){
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter1 = createCounterClosure();
const counter2 = createCounterClosure();

counter1.increase();
counter1.increase();
console.log('counter 1의 값 : ' + counter1.getCount());
counter2.increase();
console.log('counter 2의 값 : ' + counter2.getCount());

// createCounterClosure 함수를 정의하고 count변수에 0을 할당한다

// createCounterClosure 함수는 객체를 반환하는데 객체는 increse와 getCount메소드가 있고, 모두 count 변수에 접근한다

// createCounterClosure 함수를 호출하고 반환된 객체를 counter1과 counter2에 할당한다.

// counter1과 counter2 객체의 increase 메소드를 호출하면 createCounterClosure 함수 내부의 count변수에 모두 접근한다.

// 하지만 counter1과 counter2의 getCount를 호출한 결과를 보면 counter1의 메소드들이 가리키는 count와 counter2의
// 메소드들이 가리키는 count가 다른값을 가지고 있는 것을 알 수 있다.

// counter1 과 counter2가 다른 count에 접근하는것은 다른 렉시컬 환경의 레코드에서 counter에 접근하는 것이다.
// 이러한 형상이 가능한 이유는 바로 클로저 때문이다.
// ㄴ> 클로저란 함수가 정의될 때의 렉시컬 환경을 기억하는 함수를 뜻한다

