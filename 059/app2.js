import hello from '../057/hello';
import * as add from './add.js';
import './sideeffect.js';

console.log(add.version);
const added = add.default(1, 2);
console.log(added);

hello('harin');

// add.js 모듈을 *를 이용하여 전체를 가져온다
// 이때 가져온 모듈전체를 가리키는 기름이 있어야하기 때문에 as를 사용하여 이름을 준다
// 여기에서는 add라고 주었다

// sideeffect.js 모듈을 실행한다. from키워드 없이 작성하였기 때문에 해당 자바스크립트만 하고 어떠한 것도 가져오지 않았다
// 해당 모듈이 실행되기 때문에 콘솔에 "hello!" 가 출력되고 hello라는 함수가 전역으로 선언된다

// add라는 이름으로 add.js 모듈을 가리키기 떄문에 add는 모듈객체이고 속성으로는 default와 version이 있다
// import로 sideeffect.js 모듈을 실행했기 때문에 전역으로 선선된 hello 함수를 실행할 수 있다.

