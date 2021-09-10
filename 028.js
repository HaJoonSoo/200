// 객채 이해하기 1
// 객체는 값들을 그룹으로 묶은 데이터 모음이다. 
// 객체를 만드는 방법은 표현식으로 중괄호를 사용한다
// 중괄호 안에 여러 값들을 넣을 수 있는데 , 
// 키(key)와 값(value)을 한 쌍으로 정의하여 이를 속성이라고 칭한다

var family = {
    'address' : 'Seoul',
    members : {},
    addFamily : function(age, name, role){
        this.members[role] = {
            age : age,
            name : name
        };
    },
        getHeadCount : function() {
            return Object.keys(this.members).length
        }
};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdagi', 'dog');
console.log(family.getHeadCount());

// JSON(JavaScript Object Notation)
// 자바스크립트의 객체와 매우 유사한 구조를 데이터 교환 형식(format)이다.
// json 형태는 객체와 비슷하게 키 : 값 쌍의 모음으로 이루어져 있다.
// 그러나 반드시 속성 키 또는 이름은 큰따옴표로 표시된 문자열이어야하고, 
// 값은 오직 문자열, 숫자, 배열, true, false, null 또는 다른 JSON객체만 가능.