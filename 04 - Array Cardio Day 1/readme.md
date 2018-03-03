#학습내용
이번 과제에서는 

자바스크립트의 배열을 다루기 위해서 사용하는 내장함수 4가지에 대해 알아본다. 

.filter(),  

.map(), 

.reduce, 

.sort()



그리고 함수를 화살표를 써서 나타내는 법과 콘솔에 테이블을 출력하는 법을 알아본다. 



## 1. 화살표 함수

**공식문서** - 화살표 함수에 대한 소개

> 화살표 함수 표현(**arrow function expression**)은 [function 표현](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/function)에 비해 구문이 짧고  자신의 [this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this), [arguments](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments), [super](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/super) 또는 [new.target](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new.target)을 바인딩 하지 않습니다. 화살표 함수는 항상 [익명](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/name)입니다. 이  함수 표현은 메소드 함수가 아닌 곳에 가장 적당합니다. 그래서 생성자로서 사용할 수 없습니다. 



- function 이라는 키워드 대신에 => 사용

- 리턴 키워드 생략가능

- default 값 사용 가능

- ...args 사용가능

- **<u>자신만의 this가 바인딩 되지 않음</u>**- 가장 중요, 아래에서 코드로 설명

  ​

#### 기존 방식 - 서브루틴에서 this가 재정의 되어 버림. (출력결과 : undefined)

```javascript
function outerFunc(){
      this.myVal = 1; 	// outerFunct의  myVal에 값 할당
      function innerFunc(){
        console.log(this.myVal);	//여기에서 this는 innerFunc를 가리킴.
      }
      innerFunc();
}
```



#### 화살표함수 방식 - 서브루틴에서 this가 재정의 되지 않음. (출력결과 : 1)

```javascript
function outerFunc(){
      this.myVal = 1; // outerFunct의  myVal에 값 할당
      var innerFunc = () => {console.log(this.myVal)}  // this값이 재정의되어 생성되지 않음.
      innerFunc();
}
```



## 2. 배열관련 함수 

- filter()
- map()
- sort()
- reduce



### .filter()

리턴형태 : 배열

filter() 는 특정 조건에 맞는 것만 걸러내어 새로운 배열을 생성하는 기능을 수행한다. filter안에 인자로 선언된 함수는 입력받은 배열의 요소를 하나씩 순회하게 되는데, 이것을 조건문에 삽입한다음에 true를 리턴하면 살려두고, 그렇지 않다면 해당 요소는 제거해버린다. 

```js
var array = [1,2,3,4,5];
var filtered = array.filter(
    function(item){
        if(item<3){
            return true; // 남겨둠
        }
    }
)
console.table(filtered)
```

 filter()를 화살표함수와 같이 사용하면 더 효과적으로 사용할 수 있다. 어차피 리턴하는 것은 Boolean 이기 때문에 return true; 형태를 생략하는 것이 더욱 간결하게 표현이 가능하기 때문이다. 



### .map() 메소드
- 요소를 일괄적으로 변경하는데 효과적임. 
- 배열 내의 모든 요소 각각에 대하여  제공된 함수(callback)를 호출하고, 그 결과를 모아서,  새로운 <u>배열</u>을 반환

### .sort()

### .reduce()



## console.table

###백틱 혹은 $를 사용한 변수 선언
백틱문법을 사용하고 그 안에 변수는 $로 선언하여 사용.