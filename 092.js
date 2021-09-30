// 배열 정렬하기(sort)

// Array객체의 sort 메소드는 인잘 비교함수를 대입하여 배열 요소들을 정렬한다. 이때 비교함수에서 return으로
// 반환되는 비교값에 따라 순서가 정해진다
// 비교값의 구체적인 기준은 다음과 같다

// 비교값 > 0 : a가 b보다 작은 숫자의 인덱스를 가진다. 배열의 작은 인덱스라는 뜻으로 배열에서 앞부분에 위치하는것을 의미한다
//             즉, a가 b보다 앞에 위치한다

// 비교값 < 0 : b가 aㅂ다 작은 숫자의 인덱스를 가진다. 아까와 반대로 b가 a보다 앞에 위치한다

// 비교값 = 0 : a와 b의 위치를 변경하지 않는다

// sort 메소드는 새로운 배열을 반환하지 않고 원본 배열 자체를 변경시켜주기 때문에 주의해야한다.

const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];
const objArr = [
    {id: 2, name: 'Leo'},
    {id: 0, name: 'Daniel'},
    {id: 3, name: 'Asher'},
    {id: 4, name: 'Chloe'},
    {id: 1, name: 'chloe'}
];

numArr1.sort(function(a, b) {return a - b});
numArr2.sort(function(a, b) {return b - a});
objArr.sort(function(a, b){
    if (a.name > b.name) return 1;
    else if (b.name > a.name) return -1;
    else return 0;
});

console.log(`오름차순 : ${numArr1}`);
console.log(`내림차순 : ${numArr2}`);
console.log(objArr);

// 비교함수가 a-b를 리턴하여 오름차순으로 배열이 정렬된다.

// 비교함수가 b-a를 리턴하여 내림차순으로 배열이 정렬된다.

// 앞 요소 (a)의 name 속성값이 뒤에 있는 요소 (b)의 name 속성값보다 크면 1을 반환한다