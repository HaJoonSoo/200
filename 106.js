// 객체 병합 확장하기 (assign)
// Object 객체의 메소드 assign은 인자로 대입된 객체를 기준으로 병합한다.
// 다시말해, 이 객체를 기준으로 다른 객체들이 병합되기 때문에 첫 번째 인자는 원본이 수정되어 반환된다

const obj1 = {one : 1, two : 2, three : 3};
const obj2 = {name : '탄이', age : 5, address : 'Seoul'};
const obj3 = {frinds: ['혜림', '현아', '현일', '우림']};

const newObj1 = Object.assign({}, obj1);
const newObj2 = Object.assign({}, obj1, obj2);
newObj1.four = 4;

console.log(obj1);
console.log(newObj1);
console.log(newObj2);

console.log('\n');

const newObj3 = Object.assign(obj1, obj3);

console.log(obj1);
console.log(newObj1);
console.log(newObj2);
console.log(newObj3);

// 첫번째 인자에 빈 객체를 대입한다
// Object.assign 메소드에 두번째 인자로 대입한 객체 obj1은 빈 객체와 병합되어 반환된다

// 원본 객체에 변경된 내용을 확인하기 위해, newObj1 객체에만 새로운 속성을 추가한다

// obj1 객체 {one:1, two:2, three: 3} 원본 내용이 출력된다
// newObj1은 빈 객체를 기준으로 병합되었기 때문에, obj의 복사본 객체라 볼 수 있다
// 따라서 newObj1에 새로 추가된 속성 four을 볼 수 없다

// newObj1은 빈 객체를 기준으로 obj1를 병합한 객체이다. 또한 새로 추가한 four 속성을 포함하여 
// newObj1 객체는 {one : 1, two : 2, three : 3, four : 4}를 출력한다

// obj1과 obj2의 병합된 객체가 출력된다

// obj1 객체를 기준으로 obj3객체가 병합된다. 따라서 기존 obj1 원본 객체에 직접 obj3객체 속성이 추가된다

// newObj1, newObj2는 기존라인과 동일한 결과를 출력한다
// obj1원본 객체가 추가 수정되어도, 빈 객체에 병합된 객체에는 영향을 주지 않는다
