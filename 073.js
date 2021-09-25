// 두개의 문자열 하나로 합치기 (concat)
// String 내장객체 메소드 중에서 문자열을 합치는 concat을 살펴보자

const str1 = 'Good afternoon';
const str2 = ', Good evening';
const str3 = ', and Good night!';
const str4 = '- The Thruman Show, 1998';
console.log(str1.concat(str2, str3, str4));

// 문자열이 대입된 변수 str1, str2, str3, str4를 선언한다

// concat 메소드로 위 변수들을 하나로 합치고 console.log로 출력한다
// 문자열을 concat으로 합칠때에는 맨 처음에 놓일 변수를 기준으로 concat 메소드를 호출한다.
// 두 개 이상의 문자열을 추가하려 할 때, 나머지 변수들은 메소드 인자로 문자열을 순서대로 나열하여 대입하면 된다
