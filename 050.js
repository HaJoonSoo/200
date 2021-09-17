// 프로토타입 기반 상속 이해하기
// 자바스크립트에서 생성자 함수로부터 만들어진 객체는 그 생성자 함수의 프로토타입 객체를 상속한다.
// 즉 모든 인스턴스는 해당 생성자 함수의 프로토타입 객체의 속성과 메소드들을 사용할 수 있다.
// 자바스크립트에서 모든 함수는 prototype 속성으로 프로토 타입 객체를 가진다.

function Storage() {
    this.dataStore = {};
}
Storage.prototype.put = function(key, data) {
    this.dataStore[key] = data;
}
Storage.prototype.getData = function(key) {
    return this.dataStore[key];
}

const productStorage = new Storage();
productStorage.put('id001', {name : '키보드', price : 2000});
console.log(productStorage.getData('id001'));

function RemovableStorage() {
    Storage.call(this);
}
RemovableStorage.prototype = Object.create(Storage.prototype);
RemovableStorage.prototype.removeAll = function() {
    this.dataStore = {}
}

const productStorage2 = new RemovableStorage();
productStorage2.put('id001', {name : '키보드', price : 2000});
productStorage2.removeAll();
const item2 = productStorage2.getData('id001');
console.log(item2);

// Storage 생성자 함수를 정의한다. 내부속성으로 dataStorage를 가지고 빈 객체를 할당한다.

// Storage 생성자 함수의 프로토타입 객체에 put 메소드를 추가한다. put메소드는 주어진 키에 해당하는 값을 dataStore 속성에 할당한다

// Storage 생성자 함수의 프로토타입 객체에 getData 메소드를 추가한다.
// getData 메소드는 메개변수의 값을 키로해서 dataStore 속성에서 찾아 반환한다.

// Storage 타입의 인스턴스를 생성하면 인스턴스는 해당 생성자 함수의 프로토 타입을 상속한다.
// 해서 Storage 생성자 함수의 프로토 타입에 정의된 메소드들을 해당 인스턴스들은 사용할 수 있다

// RemovableStorage 생성자 함수를 정의합니다. 이때 Storage함수를 호출하면서 this를 전달하는데 
// 이렇게되면 Storage 생성자 함수를 호출하면서 RemovableStorage 생성자 함수의 this에 Storage 생성자 함수에서 정의한대로
// dataStore가 속성으로 추가된다.
