// 배열 길이 구하기 (length)
// Array 내장객체는 배열의 길기를 확인할 수 있는 length속성을 가지고 있다

const ship = {
    max : 4,
    passengers : [] ,
    onBoard : function(name) {
        if (this.passengers.length === 4) {
            console.log(`This ship is full. ${name} can not board this ship.`)
        } else {
            this.passengers.push(name);
            console.log(`${name} boarded`);
        }
    }
}

ship.onBoard('chloe');
ship.onBoard('jay');
ship.onBoard('david');
ship.onBoard('asher');
ship.onBoard('daniel');
console.log(ship.passengers);

// 객체 리터럴이 할당된 변수 ship을 선언한다

// ship 객체의 첫번째 속성으로 키 이름은 max, 값은 수자 4를 정의한다
// max 속성은 '배의 정원 수'를 의미한다

// 두번째 속성의 키 이름은 passengers, 값은 빈 배열을 정의한다. passengers 속성은 '탑승객 리스트'를 의미한다

// 마지막 속성의 키 이름은 onBoard이다. onBoard 속성에는 특정함수가 정의되어 있다

// ship객체의 passengers 속성에 접근하여, 배열 길이를 확인한다. 확인된 배열의 길이가 숫자 4와 일치하는지 아닌지를 확인하는 조건문이다
