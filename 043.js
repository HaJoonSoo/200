// 스코프 체인 이해하기

// 스코프 체인은 문자 그대로 스코프가 연결되어 있음을 나타낸다.
// 자바스크립트에서 스코프체인을 이해하기 위해서는 실행 컨넥스트와 렉시컬 환경에 대해서 먼저 알아야 한다.

// 실행 컨넥스트는 코드가 실행되기 위해 필요한 정보를 가지고 있다.
// 이 실행 컨넥스트는 실행 가능한 코드가 실행될 때 생성된다.
// 대표적인 실행 가능한 코드로는 전역코드와 함수코드가 있다.

// 처음에는 전역코드가 먼저 실행된다. 이때 전역 컨테스트를 만들고 전역 코드를 순차적으로 평가한다
// 그러다 함수가 호출문을 만나면 새로운 실행 컨텍스트가 만들어지면서 해당 함수 실행부의 코드를 순차적으로 평가한다.
// 이때 스택을 이용해 실행 컨텍스트를 관리하게 되는데 새로운 실행 컨텍스트가 생성되면 스택에 쌓고 시행중인 코드가 종료되면서
// 시행 컨텍스트를 스택에서 제거한다.

var person = 'harin';

function print() {
    var person2 = 'jay';

    function innerPrint() {
        console.log(person);
        console.log(person2);
    }

    innerPrint();

    console.log('pring finished');
}

print();
console.log('finished');

// 실행 컨텍스트는 렉시컬 환경을 가지고 있는데, 렉시컬 환경은 환경 레코드와 외부 렉시컬 환경으로 구성된다.

// 실제 함수와 변수같은 식별자와 그 식별자가 가리키는 값은 키(key)와 값의 쌍으로 환경 레코드에 기록된다.
// 그리고 렉시컬 환경은 환경 레코드 외에 자신의 실행환경을 감싸는 회부 실행 환경에 대한 참조를 가지고 있다.
