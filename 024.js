var condition = 5 > 10;
condition ? console.log('Left') : console.log('Right');
var result = condition?(
    console.log("삼항 연산자의 첫 번째 표현식 입니다."),
    "표현식 1"
):(
    console.log("삼항 연산자의 두 번째 표현식 입니다."),
    "표현식 2"
);
console.log(result);