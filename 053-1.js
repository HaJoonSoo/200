class productWithCode {
    static get CODE_PREFIX() {
        return "PRODUCT - "
    }

    constructor(id) {
        this.id
        this.code = productWithCode.CODE_PREFIX + id;
    }
}

const product1 = new productWithCode('001');
console.log(productWithCode.CODE_PREFIX);
console.log(product1.code);

// productWithCode 클래스를 정의하면서 codePrefix 정적 속성을 정의한다.
// 물론 클래스 몸통블록 밖에서 정의할 수는 있지만, 코드의 가독성을 높이기 위해서 몸통안에서 정의하는것이 좋다