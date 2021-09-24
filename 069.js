// 문자열 자르기(substring)
// String 내장객체의 substring 메소드는 인자로 시작 지점의 인덱스와 종료 지점의 인덱스를 받는다
// 두번째 인자인 종료 인덱스는 선택사항이므로 필수사항은 아니다
// substring 메소드 실행 결과값은 새로운 문자열을 반환하며 기존 문자열을 변경하지 않는다

// substring 메소드는 거의 대부분 slice 메소드와 동일하지만, 몇 가지 부분에서 다른결과를 반환한다

const sentence = 'This will be the end of Wakanda';
console.log(sentence.substring(13));
console.log(sentence.substring(13, 20));
console.log(sentence.substring(0));
console.log(sentence.substring(0, -20));
console.log(sentence.substring(50));
console.log(sentence.substring(20, 13));

//두 번째 인자 없이 첫번째 인자에만 인덱스 13을 대입한다
// 이는 변수 sentence의 13번재 인덱스부터 마지막까지의 문자열을 반환한다

// 시작 인덱스는 13, 종료 인덱스는 20으로 지정한다, 따라서 인덱스가 13부터 20까지의 문자열을 반환한다

// 시작 인덱스 0은 첫번째 문자를 의미한다. 두번째 인자가 없기 때문에 처음부터 끝까지 전체 문장을 출력한다

// substring 메소드는 음수를 넣으면 정상적으로 수행하지 않는다

// 문자열 길이를 뛰어넘는 숫자를 넣으면 빈 값을 반환한다.

// 첫번째 인자보다 두번째 인자가 크면 두개의 인수를 교환하여 수행한다
// 따라서 substring(13, 20)의 결과값과 동일하게 출력된다

