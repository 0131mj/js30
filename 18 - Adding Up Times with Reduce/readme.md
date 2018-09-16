# 18 - Adding Up Times with Reduce

- 목표 : 동영상이 여러개 있을때 재생시간을 합산해서 보여주기 

- 접근 방법 : 1. 모든 시간을 가져와서, 2. 초로 만들어서, 3. 합쳐서,  4.보여준다. 



## 1. 모든 시간 가져오기 

### (1) data 속성을 사용해서 엘리먼트 셀렉트하기

```javascript
document.querySelectorAll('[data-time]') //querySelector에는 스트링 형태 넣어줘야 함.
```



### (2) 각각의 시간 얻어오기 

- data-prop에 담겨있는 값은, dataset.prop의 방식으로 가져올 수 있다. 
- 엘리먼트는 맵을 사용할 수 없다. 
- 셀렉트 한 엘리먼트들을 어레이로 만드는 두가지 방법
1. 스프레드 연산자 사용
2. Array.from 사용


## 2. 초(second)로 만들기 

- map을 연이어 쓰기 
- 비구조화 할당으로 분 초 얻어오기 

### (1) 분, 초로 시간 쪼개기 : split 사용

- split은 문자를 쪼개서 배열에 담아 준다. 
- 스트링.split('keyword')

```javascript
'this is a string'.split(' '); //['this' , 'is', 'a', 'string']
```



### (2) 연산을 위해 숫자로 변환하기 : parseFloat 

- str 형태의 데이터를 number형태로 변환해준다. 
- 여기서 신기한 점은, map의 parseFloat를 그대로 사용했다는 것.

```javascript
.map(parseFloat); //이 식은 아래 식과 정확하게 동일하다. 
.map(str=>parseFloat(str));
```



#### parseInt vs parseFloat 

왜 parseInt가 아니라 parseFloat을 썼는가?



- parseInt : 10진수가 아닌 값을 10진수 정수로 변환

> ```javascript
> parseInt(string, radix); // string:문자열, radix:기수
> 
> /* 아래 결과는 모두 15임. */
> parseInt('0xF', 16);
> parseInt('F', 16);
> parseInt('17', 8);
> parseInt(021, 8);
> parseInt('015', 10);   // parseInt(015, 10); will return 15
> parseInt(15.99, 10);
> parseInt('15,123', 10);
> parseInt('FXX123', 16);
> parseInt('1111', 2);
> parseInt('15 * 3', 10);
> parseInt('15e2', 10);
> parseInt('15px', 10);
> parseInt('12', 13);
> 
> /* 안 적어주면 이런 경우가 생김 */
> parseInt('08'); // 0, '8' is not an octal digit.
> ```



- parseFloat : 문자열을 float 형태로 변환

> ```javascript
> parseFloat(value);
> ```



##### 결론 : 

- 파라미터가 다르다. 

- 브라우저마다 다르므로 엄밀하게 parseInt 사용시에는 radix를 써줘야 한다.



parseInt :  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

parseFloat : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat



##### 결론에서 얻은 유추 ?

- 아마 바로 쓸 수 있는것은 ECMA script 사양과는 별개로, 파라미터 개수가 1개인것만  사용가능한 것 같음.



### (3) 배열에 저장된 값을 뽑아내기 : 비구조화 할당

```javascript
const [min, sec] = ['59','50']
console.log(min) //59
console.log(sec) //50
```





## 3. 합치기

### reduce 함수의 활용

```javascript
배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
```

reduce는 배열을 다루는 함수 중에서 가장강력한 함수 중의 하나이며 기능도 다양하다. 상세 내용은 하단 링크를 참조

 참고링크

https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d



## 4. 보여주기

### Math.floor 버림함수

다시 시, 분, 초로 만들기