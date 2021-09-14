// 함수 호이스팅 이해하기

hello();
function hello() {
    console.log('안녕하세요');
}
// 정상적 실행

hello2();
var hello2 = function() {
    console.log('안녕하세요');
}
// TypeError가 발생