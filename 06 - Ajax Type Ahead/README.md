# Ajax Type Ahead :eyes:



1. 데이터를 원격으로 갖고오기

   - fetch 
   - Promise
   - then

2. 갖고 온 데이터를 하나의 배열에 담기

   - let, const
   - push
   - spread syntax

3. 조건에 맞는 도시만 찾아서 필터링하기

   1. 필터링하는 함수 만들기
      - filter
      - match
      - regExp - g, i
   2. 크롬 브라우저에서 함수 테스트 하기

4. 보여주기

   1. 엘리먼트 지정
   2. 보여주는 함수 만들기
   3. 함수 사용해서 뷰에 붙이기

---





## fetch

- 네트워크 통신을 포함한 리소스 취득을 위한 인터페이스
- XMLHttpRequest와 같은 비슷한 API보다 유연한 조작이 가능합니다. 
- 리턴값은 Promise 객체 형태이다. 
- 💩 IE에서는 못씀. 
- then을 붙이면 첫번째 값으로 response를 전달받는다. 

```javascript
const url = 'https://'; //주소
fetch(url);
```

https://developer.mozilla.org/ko/docs/Web/API/Fetch_API



## Promise

> Promise 는 비동기 조작의 최종 완료나 실패를 표현해주는 객체입니다. 

https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Using_promises



## Promise.prototype.then()

> then() 메서드는 Promise를 리턴하고 두개의 콜백 함수를 인수로 받습니다. 하나는 Promise가 성공(success)했을 때를 위한 콜백 함수이고, 다른 하나는 실패(failure)했을 때를 위한 콜백 함수입니다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/then



## let 과 const

> **const 선언**은 값에 읽기 전용 참조를 생성합니다. 담긴 값이 불변임을 뜻하는 게 **아닙니다**, 단지 그 변수 식별자는 재할당될 수 없습니다. 

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const

- const 는 불변이 아니며,  push, pop등으로 변화를 줄 수 있다. 단지 재선언과 재할당을 못할 뿐이다. 

|                  | const | let  | var  |
| :--------------: | :---: | :--: | :--: |
| 스코프(유효범위) | 블록  | 블록 | 함수 |
|       종류       | 상수  | 변수 | 변수 |
|      재선언      | 불가  | 불가 | 가능 |
|      재할당      | 불가  | 가능 | 가능 |



#### let, const

```javascript
// let
let a = 'test'
let a = 'test2' // Uncaught SyntaxError: Identifier 'a' has already been declared
a = 'test3'     // 가능

// const
const b = 'test'
const b = 'test2' // Uncaught SyntaxError: Identifier 'a' has already been declared
b = 'test3'    // Uncaught TypeError:Assignment to constant variable.
```

#### var

```javascript
var a = 'var'
var a = 'foo'
```



## push

- 배열에 원소를 집어넣는 메서드.
- const 로 선언된 변수에도 적용이 가능하다. 



## spread operator

전개 연산자 (쩜 세개)

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_operator



## match

- match는, String 내장객체 안에 들어있는 메소드임. 
- 정규표현식을 인자로 넣음.
- 정보를 가지고 있는 '배열'을 반환하며, 대응되는 문자열을 찾지 못했을 경우 null을 반환함.

```javascript
str.match(regExp);
```

https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D







---

출처

var, let const 차이점: https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d