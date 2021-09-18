// 클래스 상속 이해하기

class Chart {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    drawLine() {
        console.log('draw line');
    }
}

class BarChart extends Chart {
    constructor(width, height) {
        super (width, height)
    }

    draw() {
        this.drawLine();
        console.log(`draw ${this.width} X ${this.height} barChart`);
    }
}

const barChart1 = new BarChart(100, 100);
barChart1.draw();

// 차트 클래스를 정의한다.

// 차트 클래스를 상속하는 바차트 클래스를 정의한다.
// 클래스의 상속은 extends 키워드를 사용한다
// 상속을 하게되면 생성자 함수에서 상속한 부모 클래스의 생성자를 호출해야 하는데 이때 super 키워드를 사용한다,
// 즉, super가 부모 생성자 함수를 가리킨다

// 상속을 했기 때문에 부모 클래스에 정의된 메소드를 사용할 수 있다.

// 바차트 클래스의 인스턴스를 만들고 draw 메소드를 호출한다.
// 부모 클래스인 차트 클래스의 생성자 함수가 호출되어 width와 height 속성에 주어진 값이 할당되고,
// 부모 클래스에 정의된 drawLine 메소드도 잘 호출되는 것을 확인할 수 있다

// ES6 클래스를 통한 상속은 앞에서 배운 생성자 함수의 프로토타입 기반의 상속과 크게 다르지 않다
// 자바스크립트는 새로운 기능이 추가되면 하위 버전의 코드로 변환이 되어야 한다.
// 그래서 ES6의 클래스는 생성자 함수로 변환되고, extends 키워드의 상속은 prototype 기반 상속 코드로 변경될 수 있다
// 자바스크립트는 여전히 프로토타입 기반의 상속임을 알아야한다.