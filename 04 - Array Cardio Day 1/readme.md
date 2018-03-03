#학습내용
이번 과제에서는 

자바스크립트의 배열을 다루기 위해서 사용하는 내장함수 4가지에 대해 알아본다. 

.filter(),  

.map(), 

.reduce, 

.sort()



그리고 함수를 화살표를 써서 나타내는 법과 콘솔에 테이블을 출력하는 법을 알아본다. 



## 화살표 함수

**공식문서** - 화살표 함수에 대한 소개

> 화살표 함수 표현(**arrow function expression**)은 [function 표현](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/function)에 비해 구문이 짧고  자신의 [this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this), [arguments](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments), [super](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/super) 또는 [new.target](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new.target)을 바인딩 하지 않습니다. 화살표 함수는 항상 [익명](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/name)입니다. 이  함수 표현은 메소드 함수가 아닌 곳에 가장 적당합니다. 그래서 생성자로서 사용할 수 없습니다. 



화살표 함수의 특징

- function에 비해 구문이 짧다.
- 항상 익명이다.
- this, arguments, super, new target을 바인딩하지 않는다.
- 생성자로 사용할 수 없다.

function 이라는 키워드 대신에 => 사용



### .filter()

### .map() 메소드
- 요소를 일괄적으로 변경하는데 효과적임. 
- 배열 내의 모든 요소 각각에 대하여  제공된 함수(callback)를 호출하고, 그 결과를 모아서,  새로운 <u>배열</u>을 반환

### .sort()

### .reduce()



## console.table

###백틱 혹은 $를 사용한 변수 선언
백틱문법을 사용하고 그 안에 변수는 $로 선언하여 사용.