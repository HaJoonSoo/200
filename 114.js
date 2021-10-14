// UTC 기준 날짜 출력하기 (Date.UTC)

const date = new Date();
const dateUTC = Date.UTC(
    date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()
);

console.log(new Date(dateUTC));

// Date 객체의 메소드 UTC는 매개변수로 지정된 날짜, 시간 보를 UTC 기준의 밀리초 시간으로 반환한다.

// Date.utc 메소드에 6개 인자를 대입한다.
// 첫번째 date의 getUTCFullYear 메소드를 호출한다
// getUTCFullYear 메소드는 국제 표준시 기준(UTC)으로 게산된 연도 정보를 가져온다
// 따라서 변수 date 날짜/시간 값의 UTC 기준 연도 정보가 반환된다.
// 나머지 인자들 또한 이와 유사하다

// 반환된 UTC 기준 시간정보를 새로운 Date객체로 담는다.
// 콘솔에 출력을 하면 Date.prototype.toString 메소드가 실행되어, Date 객체 인스턴스 값이 문자형으로 자동 형변횐 된다.