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

4. 보여주는 함수 만들기

   



## fetch

- 네트워크 통신을 포함한 리소스 취득을 위한 인터페이스
- XMLHttpRequest와 같은 비슷한 API보다 유연한 조작이 가능합니다. 
- 리턴값은 Promise 객체 형태이다. 
- then을 붙이면 첫번째 값으로 response를 전달받는다. 

```javascript
const url = 'https://'; //주소
fetch(url);
```



## Promise





## then



## let 과 const

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



## spread syntax





---

출처

var, let const 차이점: https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d