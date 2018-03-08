#학습내용
1. 함수를 화살표로 나타내는 법
2. 문자열 템플릿
3. 콘솔에 배열을 테이블 형식으로 출력하는 법
4. 자바스크립트 배열을 다루는 내장함수 4가지  
   .filter(),  .map(),  .reduce, .sort()

---



## 1. 화살표 함수

화살표함수란 주로 함수형 프로그래밍에서 자주 사용하는 표기법으로,

function 이라는 키워드 대신 => 이런 모양의 화살표를 사용해 함수를 표현하는 방식이다. 

화살표 함수는 단순히 모양이 다를 뿐 아니라 기능상에서도 차이점이 있다. 



###### 공식문서 -  화살표 함수에 대한 소개

> 화살표 함수 표현(**arrow function expression**)은 [function 표현](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/function)에 비해 구문이 짧고  자신의 [this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this), [arguments](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments), [super](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/super) 또는 [new.target](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new.target)을 바인딩 하지 않습니다. 화살표 함수는 항상 [익명](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/name)입니다. 이  함수 표현은 메소드 함수가 아닌 곳에 가장 적당합니다. 그래서 생성자로서 사용할 수 없습니다. 



그 외에도, 

- function 이라는 키워드 대신에 => 사용
- 리턴 키워드 생략가능
- default 값 사용 가능
- ...args 사용가능
- **<u>자신만의 this가 바인딩 되지 않음</u>**- 가장 중요, 아래에서 코드로 설명

이런 특징들이 있다. 

우선 가장 중요한 this바인딩의 차이점에 대해서 알아보기만 하고, 상세한 내용은 https://blog.seotory.com/post/2017/09/javascript-array-function 여기 잘 설명되어 있으므로 참고하자. 



#### this 바인딩의 차이점

###### 기존 방식 - 서브루틴에서 this가 재정의 되어 버림.

```javascript
function outerFunc(){
      this.myVal = 1; 	// outerFunct의 myVal에 값 할당
      function innerFunc(){
        console.log(this.myVal); //여기에서 this는 innerFunc를 가리킴.(재정의 됨.)
      }
      innerFunc(); // 출력결과 : undefined
}
```



###### 화살표함수 방식 - 서브루틴에서 this가 재정의 되지 않음.

```javascript
function outerFunc(){
      this.myVal = 1; // outerFunct의  myVal에 값 할당
      var innerFunc = () => {console.log(this.myVal)}  // this는 outerFunc를 가리킴(재정의x)
      innerFunc(); // 출력결과 : 1
}
```





## 2. 문자열 템플릿

``` javascript
const fullNames = inventors.map(inventor => `${inventor['first']}-${inventor['last']}`)
```

- 문자열을 표현할때 백틱(`) 기호를 사용하여 전체를 감싸서 표현한다.

- 백틱 안의 내용은 그대로 표기되므로 홑따옴표, 겹따옴표, 줄바꿈 등을 신경쓰지 않고 그대로 작성하면 된다.

- 말하자면 백틱은 세번째 따옴표 역할을 한다고 생각하면 된다. 

- 변수는 ${ }안에 넣어서 표현한다.

  ​




## 3. 콘솔에 테이블로 출력하기

##### 기존 방식 

콘솔에 결과를 출력하기 위해 보통 아래와 같은 방식을 많이 사용한다. 

```javascript
var array = [1.2.3];
console.log(array);
```

###### 콘솔창 출력결과 

▶*(3) [1, 2, 3]*



##### table 방식 

.table을 사용하면 아래와 같이 정돈된 테이블 형태로 출력이 가능하다. 

```javascript
var array = [1,2,3];
console.table(array);
```



###### 콘솔창 출력결과 

| (index) | Value |
| ------- | ----- |
| 0       | 1     |
| 1       | 2     |
| 2       | 3     |



## 4. 배열관련 함수 

- filter()
- map()
- sort()
- reduce





### .filter()

- 리턴형태 : 배열
- 기능 : 특정 조건에 맞는 것만 걸러내어 새로운 배열을 생성하는 기능을 수행한다. filter안에 인자로 선언된 함수는 입력받은 배열의 요소를 하나씩 순회하게 되는데, 이것을 조건문에 삽입한 다음에 true를 리턴하면 살려두고, 그렇지 않다면 해당 요소는 제거해버린다. 

```javascript
array.filter(부울식);
```

```js
var array = [1,2,3,4,5];
var filtered = array.filter(
    function(item){
        if(item<3){
            return true; // 참이면 해당 요소를 남겨두고 아니면 제거.
        }
    }
)
console.table(filtered) //  [1, 2]
```

filter()를 화살표함수와 같이 사용하면 더 효과적으로 사용할 수 있다. 어차피 리턴하는 것은 Boolean 이기 때문에 return true; 형태를 생략하는 것이 더욱 간결하게 표현이 가능하기 때문이다. 



### .map()

- 리턴형태 : 배열
- 기능 : 배열 내의 모든 요소를 하나씩 순회하면서  제공된 함수(callback)를 호출하고, 그 결과를 모아 새로운 배열을 반환한다.

```javascript
var array = [1,2,3,4,5];

var mapped = array.map(
    function(item){
    	return item * 7
    }
)

console.table(mapped); // [7, 14, 21, 28, 35]
```



### .sort()

- 리턴 값 : array, 정렬된 배열, 자기 자신에 대한 레퍼런스 값 임
- 매개변수 : sort(sortFunc)로 함수를 넣어 정렬할 수 있다. 
- 기능 : 기본적으로는 문자열 유니코드의 포인트에 따라 정렬함. (숫자정렬시 주의)

```javascript
var score = [4, 11, 2, 10, 3, 1]; 

score.sort(
    function(a,b){
        return a-b;
    }
);
```

sort안에는 function 을 넣을 수 있는데 이 function은 배열의 요소를 하나씩 순회하여 비교하며 자리를 교환하는 기능을 수행한다. function의 리턴값이 0보다 작을 때는 순서를 교환하지 않고(a, b를 유지),  0보다 크면 순서를 바꾼다. (b, a로 변경) (아마 이 이유는 표기를 간단하게 하기 위해 고안된 방법같다고 생각된다. )



그렇다면 .sort()함수를 실행했을 때 어떤 방식으로 정렬이 되느냐. 

그건 함수 내부적으로 구현된 정렬 알고리즘에 의해 실행이 되며, 이는 브라우저 별로 각각 그 방법이 다르다. 

- 파이어폭스는 머지정렬
- 사파리는 선택정렬
- 크롬은 퀵정렬(10개 이하는 삽입정렬...)

자세한 건 아래의 주소 참조

[]: https://steemkr.com/kr-dev/@nhj12311/javascript-chrome-v8-unstable-sorting-problem



크롬의 경우, v8엔진에 의해 자동으로 정렬되며 초기 크롬은 힙정렬인데 퀵정렬로 바뀌었다고 한다. 

[]: https://brunch.co.kr/@k2u4yt/3



### .reduce()

- 리턴 값 : 값
- 기능 : 배열의 맨 왼쪽요소부터 조건을 적용해 하나의 값을 만듬. 오른쪽부터 하려면 .reduceRight 함수 사용

```javascript
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

var result = data.reduce(
    function(cur, next){
        return cur+' '+next;
    }
)

var resultRight = data.reduceRight(
    function(cur, next){
        return cur+' '+next;
    }
)

console.log(result); //car car truck truck bike walk car van bike walk car van car truck
console.log(resultRight); //truck car van car walk bike van car walk bike truck truck car ca
```



###백틱 혹은 $를 사용한 변수 선언
백틱문법을 사용하고 그 안에 변수는 $로 선언하여 사용.