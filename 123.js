// 반복 가능한 객체와 반복자 이해하기

// 자바스크립트에서는 반복 동작에 대한 규약으로 반복가능한과 반복자를 정의한다
// 다음의 반복 가능한 규약과 반복자 규약을 이해하고 각 예제를 통해 자세히 알아보겠다

// The Iterable Protocol (반복 가능한 규약) : 반복 가능한 규약은 객체 안의 값들을 반복할 수 있도록, 반복 동작을 정의하는 것을 허용한다
// 즉, 반복 동작에 대한 정의란 for-loop처럼 단순 반복 작업이기도하며, 이와 다르게 어떻게 반복하고, 반복하면서 어떤 동작을 수행하는지 직접 정의하는것도 해당된다
// 우선 객체가 반복 가능하려면, 객체 내부에 @@iterator 메소드를 구현해야한다.
// 구현할 때 속성키 (key)는 반드시 symbol.iterator 이어야하고, 속성값 (value)는 매개변수가 없는 함수가 대입된다
// 그리고 이 함수는 반복자 규약을 따르는 객체를 반환한다.

// The Iterator Protoal(반복자 규약) : 반복자 규약은 연속된 값을 만드는 방법을 정의한다
// 객체가 반복자 규약을 충족하려면, next 메소드를 가지고 있어야한다.
// 이때 객체 속성 키는 next이고, 속성값 (value)은 매개변수가 없는 함수로 정의한다
// 여기서 함수는 value와 done 속성을 가진 객체를 반환한다.
// 따라서 반복자의 next 메소드를 호출하면, 속성 키 이름이 value와 done인 객체가 반환된다
// 이러한 반복자 규약을 충족하는 객체를 iterator라고 한다.

const items = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];
const seq = {
    [Symbol.iterator](){
        let i=0;
        return{
            next() {
                const value = items[i];
                i++;
                const done = i > items.length;
                return{value, done};
            }
        }
    }
};

for (let s of seq) console.log(s);
const [a, b, c, ...arr] = seq;
console.log('a >>> ', a);
console.log('b >>> ', b);
console.log('c >>> ', c);
console.log('arr >>> ', arr);

// 반복 가능한 규약에 따라 작성된 객체(Iterables)는 for...of, 비구조화할당, 나머지 변수와 함께 주로 사용된다.
// 그리고 이를 통해 next()가 호출되어, 연속된 요소들이 차례대로 반환된다.

//"javascript"문자열을 문자 하나씩 나눠 배열로 구성하여 변수 arr에 대입한다

// iterator 규약에 따라 Symbol.iterator 속성을 정의한다.
// 이어서 속성값으로 매개변수를 받지 않고 객체를 반환하는 함수를 작성한다

// items 배열 요소를 차례대로 연속해서 처리하는 문장이다.
// items 변수의 i인덱스 요소값을 value에 대입하고, 대입된 후에는 인덱스 i값을 1증가시킨다

// 인덱스i값이 items 배열 요소 길이보다 큰 값인지 확인한다.
// 코드의 8라인에서 1 증가시킨뒤에 i값이 items 길이보다 크면 true, 작으면 false를 반환한다.
// 이를 done변수에 대입한다.

// value 변수와 done변수를 객체 속성으로 정의하여 반환한다.
// value는 현재위치의 요소값이고, done는 현재 위치가 items의 끝에 도달했는지에 대한 값이다.
// 즉 done이 true를 반환하면, 모든 작업이 끝났다는 것을 의미한다.
// 반대로 false는 아직 반복할 요소들이 남았다는 것을 의미한다.
// done이 항상 false라면 이 객체는 무한을 의미한다.

