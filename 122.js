// 정규표현식으로 문자열 치환하기 (replace)

// String 객체의 replace 메소드는 정규표현식으로 특정 문자열을 검색한 뒤 원하는 문자열로 대체한다
// 문자열.replace(교체 대상 문자열 또는 정규식, 대체될 문자열 또는 함수)

// 첫번째 인자에는 기존 문자열에서 교체할 대상 문자열 또는 정규식을 넣는다.
// 기본적으로 replace는 첫번재 인자에 따라 일치하하는 첫 번재 항목만 찾는다
// 그러나 모든 문자열을 변경하고 싶으면, 첫 번째 인자의 정규표현식에 g플래그를 사용하면 일치하는 모든 문자열을 찾아낼 수 있다
// 변경할 대상 문자열을 찾은 뒤에는 두번째 인자를 통해 문자열을 교체한다.
// 만일 두 번째 인자로 함수를 정의할 때에는 다음의 매개변수를 사용한다
// - 일치한 문자열
// - 일치한 값들
// - 일치한 값의 위치
// - 원본 문자열

console.log('2021-10-23 21-13-13'.replace('-', ':'));
console.log('2021-10-23 21-13-13'.replace(/-/g, ':'));
console.log('2021-10-23 21-13-13'.replace(/\d/g, '9'));

const littleWomen = 'Meg merch, Jo Merch, Beth March, Amy March';
console.log(littleWomen.replace(/\w+ March/ig, 'Mrs.$&'));
console.log(littleWomen.replace(/\w+March/ig, (str, d1, d2, d3, d4, offset, s) => {
    let tag = '';
    if(/Meg/.test(str))tag = '첫째'
    else if (/Jo/.test(str))tag = '둘째'
    else if (/Beth/.test(str))tag = '셋째'
    else if (/Amy/.test(str))tag = '넷째'

    console.log(`원작 "작은 아씨들"에서 주인공 ${str}은 ${tag}입니다.`);
    return tag;
}));

const name = 'March Amy'
console.log(name.replace(/(March) (Amy)/, '$2 $1'));
console.log(name.replace(/(March) (Amy)/, (str, first, second, offset, s) => {
    console.log(`${second} is name ${first} is first name.`);
    return `${second} ${first}`
}));

