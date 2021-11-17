// Async 이해하기

// ECMAScript 2017 (ES8)에서 소개된 async 함수를 살펴 보겠다.
// async 함수는 함수안의 await 구문과 함께 비동기 작업을 제어한다.
// await 키워드는 반드시 async 함수 안에서만 유효하다.

// async 함수의 동작 방식은 다음과 같다.
// 처음 async 함수의 호출되어 await 키워드가 있는 비동기 작업(promise 객체)이 실행되면, 해당 비동ㄱ 함수는 이벤트 루프를 통해 비동기로 작업을 처리한다.
// 그동안 async함수는 이러한 비동기 작업이 완료될 때까지 일시 중지 상태로 비동기 작업의 해결을 기다린다.
// 이 작업이 완료되면 async 함수가 다시 실행되고, 함수결과를 반환한다.

// async 함수를 선언하는 방법에는 async함수 선언문(async function)과 표현식(async function expresion)이 있다.
// 이 선언문과 표현식은 "함수 이해하기"에서 살펴본 선언문/표현식과 유사하다
// 다만 async함수는 function 선언 앞에 async 키워드가 붙는다

function doJob(name, person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(person.stamina > 50){
                person.stamina -= 30;
                resolve({
                    result : `${name} sucsess`
                });
            } else {
                reject(new Error(`${name} faild`));
            }
        }, 1000);
    });
};

const harin = {stamina : 100};

const excute = async function() {
    try{
        let v = await doJob('work', harin);
        console.log(v.result);
        v = await doJob('study', harin);
        console.log(v.result);
        v = await doJob('work', harin);
        console.log(v.result);
        v = await doJob('study', harin);
        console.log(v.result);
    }catch(e) {
        console.log(e);
    }
}

excute();

// "Promise 조합하기"에서 사용했던 dojob 함수를 수정해서 활용한다.
// Job이름과 스테미나를 속성으로 갖는 객체를 매개변수로 전달받는다.
// Promise 객체를 생성하는 함수를 정의한다.
// 이 Promise객체는 setTimeout을 사용하여 함수 호출로부터 1초 뒤에 로직을 처리하도록 약속한다.
// 이때 스테미나가 50보다 많으면 30을 차감하고, Promise를 성공적으로 처리하지만, 만일 스테미나가 50이하면 약속은 거부된다

// 스테미나 값을 100을 가지도록 설정한다.

// async 함수를 표현식으로 정의한다.
// 표현식 익명함수 funtion 앞에 async를 추가하여, secute 함수내부에 비동기 작업을 제어한다.

// 비동기로 처리되는 dojob 함수를 연달아 호출한다.
// 비동기 로직 앞에 awiat 키워드를 추가하면, 비동기 작업이 끝날 때 까지 기다렸다가 다음 문장 코드를 처리한다.
// 따라서 코드의 17~20 라인은 순서대로 실행될 것이다.

// 스태미나 값이 50 이상 이기 때문에, 1초 간격 순차적으로 에러 없이 처리된다.

// 스테미나 값이 50 이하가 되어 에러를 반환한다