// 클래스 정의하기
// ES6부터 class 키워드를 통해 클래스를 정의할 수 있습니다.
// 클래스는 별토 타입의 객체를 생성하는 설계 도면이라 볼 수 있다.
// 클래스를 통해 객체가 가져야 할 상태와 행위들을 속성과 메소드로 정의할 수 있다.

class Cart{
    constructor(){
        this.store = {}
    }

    addProduct(product) {
        this.store[product.id] = product;
    }

    getProduct(id) {
        return this.store[id];
    }
}

const cart1 = new Cart();

cart1.addProduct({id: 1, name:'노트북'})
console.log(cart1.store);

const p = cart1.getProduct(1);
console.log(p);

// class 키워드를 이용해서 Cart클래스를 정의한다.
// 관례상 클래스 이름의 첫 글자는 대문자로 작성한다.
// 클래스를 정의할 때 클래스명 이후로 중괄호가 오고 그 안을 클래스 몸통이라고 부른다

// 클래스 몸통에는 생성자 함수를 정의할 수 있다.
// construnctor로 작성하고 매개변수도 정의할 수 있다.
// 여기서는 아무런 매개변수를 정의하고 있지 않다
// ES6 이전의 생성자 함수와 같은 역할을 하지만 function키워드가 없고 이름이 constructor로 고정되었다고 볼 수 있다.
// 그리고 꼭 하나의 생성자만 정의할 수 있다. 생성자는 new 키워드를 통해 객체가 생성될 때 호출된다.
// 여기서는 store 속성에 빈 객체를 추가한다.
// 요약하자면 생성자 함수에서는 매개변수에서 전달받은 값을 속성으로 추가하거나, 속성의 초기값을 대입하는 초기화 과정을 주로 한다

// addPoint 메소드와 getProduct 메소드를 정의한다.
// 메소드는 클래스가 생성한 객체를 통해 사용할 수 있다. cart1 인스턴스를 통해 addProduct를 호출하는것을 볼 수 있다
// 전달받은 product 객체의 id를 store 객체의 키로 하여 객체 자체를 값으로 저장하고 있다.

// Cart 클래스를 new 키워드를 사용하여 객체를 생성한다.
// 이렇게 만들어진 인스턴스를 cart1 변수에 할당한다.
// const를 통해 정의하기 때문에 cart1에서는 다른 값을 대입할 수 없다

// cart 인스턴스의 addProduct 메소드에 아이디가 1이고 이름이 "노트북"인 상품객체를 전달하여 호출한다
// store 속성에 1이라는 키에 해당 상품 객체가 값으로 추가된다.
// cart1의 store 속성을 출력하면 실제 추가된 내용이 콘솔에 추가되는것을 볼 수 있다.