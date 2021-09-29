// 배열의 특정요소 위치 학인하기 (indexOf)
// Array 객체의 메소드 indexOf는 대입된 값(첫번째 인자)을 배열 내부에서 검색한다
// 값이 일치하는 경우 해당 인덱스를 반환한다

// 두번째 인자인 시작 인덱스는 필수값은 아니다
// 만일 두 번째 인자에 숫자형 값을 넣으면 indexOf는 해당 인덱스부터 값을 찾는다. 만일 찾는 값이 없으면 인덱스는 -1를 반환한다

const arr = ['spring', 'summer', 'fall', 'winter', 'is', 'down'];

console.log(`"winter" is in this index ${arr.indexOf('winter')}`);
console.log(`"winter" is not in here, look this value ${arr.indexOf('winter', 4)}`);

// arr 배열 요소 중에서 winter 문자열을 찾기 위해 indexOf 메소드를 활용한다
// 해당값은 arr의 3 인덱스에 위치해 있는 것을 알 수 있다

// arr 배열의 인덱스 4 부터 winter 문자열을 검색하면 값을 찾을 수 없으므로 -1을 반환한다