// 자바스크립트 객체지향 프로그래밍 이해하기
// 객체지향 프로그래밍이란, 프로그램을 객체들로 구성하고 객체들 간에 서로 상호작용하도록 작성하는 방법이다.
// 객체는 특징적인 행동과 변경가능한 상태를 가진다. 자바스크립트에서는 함수 값을 가지는 속성을 메소드라 하는데
// 이 메소드를 특징적인 행동이며, 그 외에 다른 값들은 변경 가능한 상태라 볼 수 있다

const teacherJay = {
    name: '제이',
    age : 30,
    teachJavaScript : function(student) {
        student.gainExp();
    }
}

const studentBbo = {
    name : '뽀',
    age : 20,
    exp : 0,
    gainExp : function(){
        this.exp++;
    }
}
console.log(studentBbo.exp);
teacherJay.teachJavaScript(studentBbo);
console.log(studentBbo.exp);

// 제이 선생을 객체로 표현한다.
// 제인 선생은 이름과 나이를 속성으로 가지고 있고, 자바스크립트를 가르치는 행위를 한다.
// teachJavaScript 메소드는 학생을 매개변수로 정의하고 있다.
// 즉, teacherJay 객체는 student객체를 사용한다.
// 객체지향에서는 객체들이 서로 의사소통을 하게 되는데, 메소드를 통해서 서로 메세지를 전달한다.
// 그리고 객체지향에서는 협력하지 않는 객체란 존재하지 않는다

