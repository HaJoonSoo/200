// 문자열 자르기 (substr)
// String 내장객체의 substr 메소드는 인자로 시작 지점의 인덱스와 길이를 받는다
// 두번째 인자인 종료 인덱스는 선택사항이으모 필수값은 아니다
// 지정된 인덱스로부터 시작해서 지정된 문자 수 또는 길이만큼의 새 문자열을 반환한다
// 따라서 추출하고자 하는 문자열의 길이를 정확히 알고 있는 경우 substr 메소드로 활용하는것이 좋다

const sentence = 'Wakanda Forever!!!';
console.log(sentence.substr(8));
console.log(sentence.substr(8, 7));
console.log(sentence.substr(0));
console.log(sentence.substr(-10));
console.log(sentence.substr(0. -3));
console.log(sentence.substr(30));
console.log(sentence.substr(0, 30));

// 두번째 인자 없이 첫번쨰 인자에만 인덱스 8을 대입한다
// 두번째 인자에 길이를 지정하지 않았기 때문에 변수 sentence의 8번째 인덱스부터 마지막까지의 문자열을 반환

// 8번째 인덱스의 문자부터 뒤이어 7개의 문자들을 반환하여 "Forever" 출력된다

// 시작 인덱스 0은 첫번째 문자를 의미한다. 두번째 인자가 없기 떄문에 처음부터 끝까지 전체 문장을 출력한다

// substr 메소드는 첫 번째 인자에 음수를 넣으면 문자열의 뒤에서부터 위치를 결정한다
// -10 인덱스는 뒤에서부터 10번째 문자인 F를 의미한다
// 두번째 인자가 없기 때문에 F부터 마지막까지 반환하여 "Forever!!!"가 반환된다

// substr 함수의 두 번째 인자에 음수를 넣으면 정상적으로 수행되지가 않는다

// 변수 sentence의 문자열 길이보다 큰수를 첫 번째 인자에 대입하면 해당하는 인덱스를 찾지 못하기 때문에 빈 값 반환

// 두번째 인자가 변수 sentence 문자열 길이보다 크다면, 이는 기존 문자열 보다 큰 길이를 의미한다
