import { version as modualVersion } from "../058/hello";

const version = 'v0';
console.log(modualVersion);

// version.js 모듀로부터 version 이름으로 내보낸 상수값을 가져오는데, 이때 as 키워드를 사용하면 현재 모듈에서 다른 이름으로 사용할 수 있다
// version이라는 이름으로 상수를 이미 선언했기 때문에 version에서 내보낸 이름으로 version을 가져올 수 없다
// 그래서 version.js에서 내보낸 version 이름을 moduleVersion을 바꿔 가져온다
// 그리고 modualVersion의 값을 콘솔에 출력한다.