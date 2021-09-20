// 모듈 시스템 이해하기
// ES6의 모듈은 자바스크립트 코드를 담고있는 하나의 파일이다
// 즉, 하나의 파일이 하나의 모듈이라고 볼 수 있다
// ES6의 모듈은 엄격한 모드의 코드이고 import와 export 키워드를 이용한다
// export 키워드를 이용하여 모듈 내의 특정 코드를 외부에서 사용할 수 있다
// 그리고 import 키워드를 이용해서 export한 코드들을 가지고 올 수 있다.

export function hello(name) {
    console.log(`hello $(name)`);
}