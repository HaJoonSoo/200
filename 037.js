// 함수 기본 매개변수 처리하기

function drawChart(width = 200, height = 400){
    console.log(`${width} x ${height} 차트를 그립니다`);
}
drawChart(100);
drawChart();

function drawChart2(width = 200, height = width /2){
    console.log(`${width} X ${height} 차트를 그립니다.`);
}
drawChart2(300);
drawChart2();

// drawChart를 정의할 때 매개뱐수로 width와 height을 선언한다.
// 이때 전달 인자가 없을 때 기본으로 할당될 값으로 200과 400을 함께 작성

// drawChart를 호출할 때 인자로 100을 전달한다.
// width에는 100이 할당되지만, height에는 전달인자가 없어 기본값인 400이 할당됨

// 전달인자 없이 drawChart를 호출한다
// 해서 width와 height에는 기본값인 200과 400이 할당된다.

// drawChart2는 width와 height을 기본 매개변수로 정의하는데, height의 기본값으로 앞의 매개변수인 width를 참조하여 작성
// 쟝소로 전딜되는 값의 2로 나눈값이 height의 기본값이 된다.

// drawChart2를 호출할 때 인자로 300을 전달한다.
// width에는 300이 할당되지만, height에는 전달인자가 없어 앞의 width를 2로 나눈 값인 150 할당

// 전달인자 없이 drawChart2를 호출
// 그래서 width와 height에는 기본값인 200과 200을 2로 나눈값인 100 할당
