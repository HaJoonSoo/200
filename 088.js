// 배열 특정 위치의 요소 추출하기 (slice)
// Array 객체의 메소드 slice는 인덱스의 시작과 끝을 지정하여 배열 요소를 추출한다
// 의미 그대로 시작 인덱스부터 끝 인덱스까지의 배열요소를 추출한다
// 단, 끝 인덱스에 있는 요소는 제외하고 그 이전까지의 요소를 추출한다

const arr = ['melon', 'lemon', 'source', 'apple', 'juice'];
console.log(`과일이 아닌 요소는 ${arr.slice(2, 3)} 와  ${arr.slice(4, 5)} 입니다`);
console.log(arr.slice(0,10));

// slice 메소드에 시작 - 끝 인덱스로 2, 3을 넣으면 arr 배열의 'source'가 반환된다.
// 두번째 메소드에는 4, 5를 넣어 'juice'가 반환된다

// 변수 arr의 시작 인덱스에 0은 배열 첫번째를 의미한다
// 그리고 배열 길이보다 더 큰 값을 인덱스에 넣으면 배열 가장 마지막까지 모두 반환한다