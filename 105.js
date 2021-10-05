// 객체에 속성 추가 못하게 만들기 (seal)
// Object 객체의 메소드 seal은 객체를 밀봉한다
// 단단히 봉인된 객체이므로 속성을 추가/삭제 할 수 없다
// 단 기존 속성에 대해서는 변경이 가능하다

const album = {
    name : 'LOVE YOUR SELF'
};

album.song = 'Euphoria';
album.singer = 'RM';

console.log(album);

Object.seal(album);

album.comment = 'Answer';
album.singer = 'JK';
delete album.name;

console.log(album);

// 변수 album에 {name: 'LOVE YOURSELF}객체를 할당한다

// 선언된 객체 album에 속성 song과 singer을 추가한다. Object.seal을 호출하기 전에는 기존 객체와 동일하게 마음대로 추가할 수 있었다

// 먼저 정의된 album객체를 콘솔 출력하여 값을 확인한다

// Object.seal에 album객체를 넣어서 호출한다

// 봉인된 객체는 기존 속성에 대해서 변경이 가능하다 속성 singer의 값을 'JK'로 변경한다

// 봉인된 객체는 기존 속성을 삭제하지 못한다

// seal로 호출한 이후 변경한 album객체를 콘솔로 출력하여 확인한다