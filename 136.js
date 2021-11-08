// 일정 시간 후에 코드 실행하기(setTimeout)

// 자바스크립트에서 setTimeout은 글로벌 객체에 내장된 메소드이다.
// 브라우저에서는 Window 전역 객체의 메소드로 정의되고, 서버사이드 Node.js에서는 GLOBAL이라 불리는 전역 객체 메소드로 정의되어 있다
// 따라서 별도의 객체를 생성하거나 선언하지 않아도, setTimeout 함수 그대로 호출하여 실행할 수 있다

// setTimeout은 두개의 인자를 받는다
// 첫 번째 인자에는 일정 시간 후 실행될 함수를 정의한다
// 두 번째 인자에서는 지연 시간을 지정한다.
// 지연 시간을 지정할 때는 밀리세컨드 단위로 설정한다

const timer = {
    run : function(){
        if(this.t)console.log('이미 실행된 타이머가 있습니다');

        this.t=setTimeout(function(){
            console.log('1초 뒤에 실행됩니다.')
        }, 1000);
    },
    cancel: function() {
        if(this.t)clearTimeout(this.t);
        this.t = undefined;
    }
};

timer.run();
timer.cancel();
timer.run();

// timer 객체에 run속성을 추가한다. run 속성값으로 함수를 대입한다

// setTimeout 함수는 일정 시간 후, setTimeout의 첫 번째 인자로 정의된 callback함수가 실행된다
// 코드의 5라인의 setTimeout은 1000ms(1초)가 지나면, 정의된 callback함수를 통해 console.log('1초 뒤에 실행됩니다')코드를 실행한다.
// 추후 타이머 관리를 위해 작성한 setTimeout 코드를 this.t에 대입한다

// timer 객체의 cancel 속성값으로 함수를 대입한다

// this.t의 값이 유효한 상태에서만 clearTimeout을 실행한다.
// clearTimeout 메소드는 setTimeout로 미리 정의한 타이머 작업을 취소시킨다

// cancel 처리가 완료된 후에는 this.t에 초기값 undefined을 대입한다.

// timer 객체의 속성 run함수를 실행한다.

// 코드의 16라인으로 타이머를 실행했지만, 1초가 지나기 전 바로 timer객체의 속성 cancel 함수를 실행하여, this.t 실행 계획이 취소된다.
// 따라서 이때의 this.t는 실행되지 않는다