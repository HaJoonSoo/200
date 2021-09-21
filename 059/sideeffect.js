console.log('hello!');
window.hello = function hello(name) {
    console.log('hello' + name);
}

// 여기에서 외부로 내보내는 값이 없이 콘솔에 출력하거나 전역 객체인 window에 메소드로 hello를 선언한다
// 이렇게 window에 메소드를 추가하면 window를 통하지 않고 직접 해당 메소드의 호출이 가능하다
