// 배열 자료형 확인하기 (isArray)
// 자바 스크립트는 변수의 자료형이 동적으로 바뀔 수 있기 때문에 의도한 자료형인지 확인해야하는 경우가 있다
// isArray 메소드는 배열 자료형 여부를 true/false로 간단하게 구별할 수 있다.

function callRoll(student) {
    if (!Array.isArray(student)) return;

    student.forEach((student) => {
        console.log(`Are you here, ${student}`);
    });
}

const student = ['Jun', 'Ali', 'Murry', 'Toby'];
callRoll(student);

// 매개변수 student를 받는 callRoll함수를 선언
// 만일 변수 student가 배열이 아니면 의도하지 않은 자료형이라 판단하고 함수를 빠져나간다
// 변수 student를 forEach로 반복하여 배열 요소를 console.log로 하나하나 출력한다
