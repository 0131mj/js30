# 15. Local Storage



## 이번 시간에 배울 두 가지 내용

- 로컬스토리지
- Event위임



## 만들 거

- 인풋텍스트를 입력해서 리스트 항목을 추가
- 항목을 체크 하거나 해제
- 일종의 todoList 같다. 



### 리스트 항목에 들어가야 할 내용 : 

- 텍스트(항목이름)
- 체크여부



---



## e : 이벤트를 파라미터로 전달하기

- 의문점 : 이벤트 객체는 어디서 오는 것인가? 
- 이벤트는 뭐하는 녀석인가

https://poiemaweb.com/js-event





## pouplateList

populate? 이주하다, 옮기다.



## .addEventListener

```javascript
ele.addEventListener('submit',func)
```

- 문법은 액션과 함수를 엮는 것
- submit에 이벤트 리스너를 다는 이유 : 클릭, 엔터 등 다양한 액션을 한번에 캐치할 수 있다. 



## preseve log 

크롬 개발자 도구에서 preserve log 를 체크하면 브라우저가 리로드되어도 콘솔쩜 로그를 유지한다. 





## .reset

form 을 초기화 해준다. 