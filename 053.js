// 클래스 정적 메소드와 속성 정의하기
// 일반적인 메소드는 해당 크래스의 인스턴스를 통해 호출한다
// 정적 메소드는 클래스를 통해 직접호출하는 메소드를 말한다
// 클래스에서 정적 메소드는 static 키워드를 사용하여 정의한다

class Product{
    static build(name, price) {
        const id = Math.floor(Math.random() * 1000);
        return new Product(id, name, price);
    }
    static getTaxPrice(product){
        return (product.price * 0.1) + product.price;
    }

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class DeposableProduct extends Product {
    depose(){
        this.deposed = true;
    }
}

const gum = Product.build('껌', 1000);
console.log(gum);

const clothes = new DeposableProduct(1, '옷', 2000);
const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice);

// static 키워드를 사용하여 build 정작 메소드를 정의한다
// build 정적 메소드를 정의할 때 Math.random 함수를 사용하는데 Math.random 함수를 호출하면 0부터 1까지의 난수가 반환된다
// 반환된 값에 1000을 곱하고 그 결과를 Math.floor 함수의 인자로 전달하면서 소수점을 버려서
// 0부터 1000까지의 난수 값을 얻을 수 있다
// build 정적 메소드는 난수를 아이디로 하는 상품 인스턴스를 반환한다.

// 세금을 계산하여 반환하는 getTaxPrice 정적 메소드를 정의한다.

// 상품클래스의 생성자 함수를 정의한다.

// 폐기가 가능한 상품클래스를 정의한다
// DeposableProdunct 클래스는 상품클래스를 상속한다.
// 생성자 함수의 prototype 기반 상속과는 다르게 클래스로 상속을 하게 되면 정적 메소드 또한 상속하게 된다.

// product 클래스의 build 정적 메소드를 호출한다.
// 랜덤하게 아이디가 부여된 이름이 "껌"인 상품 인스턴스가 반환되고 콘솔에 인스턴스를 출력한다

// Desposable 인스턴스를 생성한다.
// DeposableProduct 클래스에서 getTaxPrice 정적 메소드를 정의하지는 않았지만, Product 클래스를 상속하였기 때문에
// 호출이 가능하다