import Hello from '200/057/hello.js';

const koreaHi = new hello('안녕하세요');
koreaHi.hi('하린');

// hello.js에서 default로 내보낸 값을 가져오고 import하는 모듈에서 (현재파일) 이름을 부여한다
// 여기에는 Hello라는 이름으로 부여하였다

// hello.js에서는 클래스를 기본값으로 내보냈기 때문에 new키워드를 사용하여 객체를 생성한다

// Hello 클래스의 인스턴스인 koreanHi 의 hi메소드를 호출한다
