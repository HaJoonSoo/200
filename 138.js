// promise 이해하기

// ECMAScipt 2015에서 비동기 초리하기 위해 Promise 객체를 소개하였다
// Promise는 객체로써 언젠가 완료될 일(계산)을 나타낸다
// 완료되면 하나의 값을 결과로 반환하는데 실패하여 정상적인 값 대신에 실패의 이유를 반환할 수도 있다

// Promise는 다음과 같은 세 가지의 상태를 가진다

// - 대기중(Pending) : 아직 결과가 없는 상태이다. 약속을 했지만 아직 약속에 대한 결과가 나오지 않은 상태이다
// - 이행됨(Fulfiled) : 비동기 처리가 성공적으로 완료되어 약속을 이행한 상태이다. 이때 결과로 하나의 값이 전달된다
// - 거부됨(Rejected) : 비동기 처리가 실패한 상태이다. 약속이 거부되고 그 결과로 거절된 이유를 전달한다

// Promise객체는 다음 두가지 메소드를 가진다.

// - then(onFulfilled, onReject) : 약속이 완료되었을 때 호출될 함수들을 정의한다.
//                                 이때 첫 번째 인자로 전달되는 함수는 약속이 성공적으로 이행됐을 때 호출되고,
//                                 두 번째 인자로 전달된 함수는 거부됐을 때 호출된다.
//                                 두 전달 인자 함수들은 매개변수를 가지는데 각각의 결과가 매개변수를 통해 전달된다.

// - catch(onReject) : 약속이 거부됐을 때 호출될 함수(onRject)를 등록한다

function promiseForHomework(mustDo){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('doing homework');
            if(mustDo) {
                resolve({
                    result: 'homework-result'
                });
            }else{
                reject(new Error('Too lasy!'));
            }
        }, 3000);
    });
};

const promiseA = promiseForHomework(true);
console.log('promiseA created');

const promiseB = promiseForHomework();
console.log('promiseB created');

promiseA.then(v => console.log(v));
promiseB
    .then(v => console.log(v))
    .catch(e => console.error(e));

// 숙제에 대한 Promise 객체를 생성하는 함수를 정의한다. 이때 매개변수로 must Do를 정의하고 mustTo에 의해 Promise에 대한 성공과 실패를 결정한다

// Promise 객체는 Promise 생성자 함수에 new 키워드를 통해 생성할 수 있다
// 이때 계산될 코드를 담은 함수를 인자로 전달하는데 이 함수에는 resolve와 reject 매개변수를 가진다.
// resolve는 약속을 성공시킬 수 있는 함수로 호출 시 결과를 인자로 전달한다.
// 반면 reject는 실패 처리를 위한 함수로 호출 시 실패 이유를 함께 전달할 수 있다.
// 즉, promise 생성자 함수에 전달되는 함수의 본문에는 나중에 계산이 완료되는 일을 작성하게 된다

// setTimeout  함수를 통해 3초 후에 실행될 코드를 정의한다
// 콘솔에 'doing homework을 출력하는 코드는 3초 후에 실행되고 promiseForHomework 전달받은 인자값의 유뮤에 따라 resolve 함수 또는 reject 함수가 호출된다
// resolve 함수가 호출되면 이후에 then 메소드에 전달된 첫번째 인자의 함수가 호출되고, 이때 resolve에 전달한 전달 인자가 then메소드의 전달된 함수의 매개변수로 전달된다

// 새로운 숙제 promise객체를 생성한다. 
// 이때 true 인자로 전달하여 3초 후에 약속이 꼭 이행되게 한다. 그리고 콘솔에 'promiseA created'를 출력한다
// 코드의 4번째 라인의 코드보다 나중에 작성하였어도 4번째 라인은 3초 후에 실행되는 비동기 코드이기 때문에 콘솔에 "promiseA created" 가 먼저 호출된다

// 또 다른 숙제 promise 객체를 생성한다
// 마찬가지로 'PromiseA created'가 'doing homework' 보다 먼저 출력되고 이전의 숙제 Promise와 다르게 전달 인자가 없이 생성하여 3초 후에 reject가 호출된다

// 각 Promise 객체에 resolve와 reject가 되었을 경우 호출될 함수들을 정의한다
// promiseA 객체는 resolve가 되어 "{result:"homework-result"}"가 콘솔에 출력되고, promiseB 객체는 reject가 되어서 코드의 24번째 라인에 전달한 함수는 호출이 되지 않고
// catch 메소드에 전달한 함수가 호추뢰어 거절된 이유인 에러객체가 콘솔에 에러로 출력된다