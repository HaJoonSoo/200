// 랜덤값 구하기
// Math 객체의 메소드 random은 무작위의 실수형 값을 반환한다

const generateRandom = (mix, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

for (let i=0; i < 5; i++) {
    console.log(generateRandom(1, 10));
}

for (let i=0; i < 5; i++){
    console.log(generateRandom(10, 100));
}

// 최소값과 최대값 사이의 무작위 수를 반환하는 함수 generateRandom를 선언한다

// Math 갹체의 메소드 random 은 무작위의 실수형 값을 반환한다. 코드의 2라인 Math.random()*(max - min + 1) + min  공식은
// '최대 ~ 최소 사이의 무작위 실수값'을 반환한다
// Math 객체의 floor 메소드를 활용하여 실수를 정수로 변환한다
