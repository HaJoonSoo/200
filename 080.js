// 문자열을 특정 구분자에 의해 배열로 나누기 (split)
// String 내장객체의 메소드 split은 문자열을 배열로 변환하여 반환한다.
// 이때 split인자로 받은 구분자로 문자열을 분리한 후 각각을 배열요소에 넣는다

const capitals = `Prague, czech Republic
Copenhagen, Denmark
Paris, France
Madrid, Spain
Rome, Italy`

capitals.split('\n').forEach(s => {
    const capital = s.split(',')[0];
    const country = s.split(',')[1];
    console.log(`${capital} is in ${country}`);
});

// split 메소드를 활용하여 변수 capital의 문자열 값을 줄바꿈으로 분리한다
// 배열로 변환된 값은 forEach를 통해 순환하면서 각 요소로 접근할 수 있다
// 예를 들어 forEach를 통해 접근한 변수 s에는 첫 번째 요소 Prague, czech Republic가 할당되고
// 두 번째 요소는 Copenhagen, Denmark가 할당된다

// 각 문장을 다시 split메소드를 통해 배열로 변환한다.
// 구분자 쉼표 , 로 분리된 배열 0 인덱스의 요소는 capital변수에 대입하고 1 인덱스의 요소는 country 변수에 대입하여 선언한다
