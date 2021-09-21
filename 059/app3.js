import { value } from "./value";

console.log(value);

setTimeout(() => console.log(value), 2000)

// value.js 모듈로부터 value를 가지고 와 콘솔에 출력한다. 이 때 1이 출력된다
// 2초 후에 다시한번 value값을 콘솔에 출력한다. 이때 2가 출력되는데, 이는 value.js 모듈에서 1초 후에
// 값을 1 증가시켰기 때문에 변경된 값으로 콘솔에 출력된다
// 만약 값이 복제되었다면 그대로 1이 출력되었을것이다

