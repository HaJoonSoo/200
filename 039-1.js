var a ="global";

function print1() {
    console.log(a);
}

function print2() {
    var a = "local"
    print1();
}

print1();
print2();

// 전역으로 변수 a, print1 함수를 선언한다
// 전역변수 a에는 문자열 global을 대입한다

// print2 함수 내부에 a이름으로 지역변수를 선안하고 문자열 local을 대입한다.
// 내부에서 전역에 정의된 prnit1함수를 호출한다.

// print1 함수를 호출한다, print1 함수 블록이 실행되는데 a에 해당하는 값을 찾아 콘솔에 출력하게된다.
// a는 print1 함수 스코프에서 찾을 수 없어 전역에서 찾아 문자열 global을 출력하게 된다

// print 함수를 호출한다. 하지만 함수 내부에서 print1 함수를 호출하고 있기때문에 print1의 함수 블록이 실행된다.
// 이때 a라는 이름을 전역에서 정의된 a로 찾을건지, print2 내부에 정의된 a로 찾을 건지가
// 렉시컬 스코프인지 다이나믹 스코프인지에 때라서 다르게 결정된다.
