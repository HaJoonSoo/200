// Promise 조합하기

// 하나의 비동기계산이 다른 비동기 계산의 결과에 의해 처리되어야 하는 경우가 많다.
// Promise가 나오기 이전에는 콜백 패턴을 통해 비동기 처리를 하였고, 중첩된 비동기 코드들을 처리하다 보면 콜백 비라미드 형태의 코드들이 쉽게 나왔었다

// 이런 비동기 코드들의 조합을 Promise 기반으로 작성하면 명료한 코드들 작성할 수 있고 예외 처리를 손쉽게 할 수 있다.
// Promise의 then 메소드에서 새로운 비동기 코드를 실행하는 Promise를 반환할 수 있는데 다음 then 메소드는 새롭게 만들어진
// Promise 코드가 이행되기 전 까지 호출되지 않는다

function doJob(name, person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(person.stamina > 50) {
                resolve({
                    result: `${name} success`,
                    loss : 30
                });
            }else{
                reject(new Error(`${name} failed`));
            }
        }, 1000);
    });
};

const harin = {stamina: 100};

doJob('work', harin)
    .then(v => {
        console.log(v.result);
        harin.stamina -= v.loss;
        return doJob('study', harin);
    })
    .then(v => {
        console.log(v.result);
        harin.stamina -= v.loss;
        return doJob('work', harin);
    })
    .then(v => {
        console.log(v.result);
        harin.stamina -= v.loss;
        return doJob('study', harin);
    })
    .catch(e => console.error(e));

// 주어진 이름에 일을 수행하는 약속을 생성하는 dojob 함수를 정의한다.
// 스테미나를 속성으로 갖는 객체를 매개변수로 전달받아 50보다 많으면 약속이 이행된다
// 이행결과로는 스테미나를 차감할 값을 포함하는 객체를 전달한다.
// 그리고 스테미나가 50 이하면 약속은 거부된다.

// 스테미나 값 100을 가지는 객체를 정의한다.

// work 이름의 일을 수행하는 약속을 생성한다.
// 전달된 인자의 스테미나가 100이기 떄문에 성공적으로 이행되고, then 메소드 전달한 콜백 함수에 차감될 스테미나와 결과값이 전달된다
// 그리고 then 메소드에 전달한 콜백 함수에서 study 이름의 일을 수행하는 약속을 반환한다.
// 이렇게 반환된 약속이 이행되면 다음에 연결된 then 메소드의 콜백함수에서 앞서 반환한 약속의 이행결과가 전달된다.
