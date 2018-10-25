# 22 - Follow Along Link Highlighter

- 목표 : 마우스를 오버할때마다 해당위치를 따라 움직이는 하이라이트 적용하기

1. 하이라이트 적용할 대상 정하기
2. 하이라이트 개체 만들어 문서에 삽입하기
3. 따라다니는 애니메이션 생성
4. 각 개체마다 애니메이션 붙여주기 



## 1. 하이라이트 적용할 대상 정하기

- 모든 <a/> 태그에  적용함

#### document.querySelectorAll()  -  대상 지정

```javascript
document.querySelectorAll('a');
```



## 2. 하이라이트 개체 만들어서 문서에 삽입하기

#### document.createElement  - 엘리먼트 생성

#### .classlist.add - 엘리먼트에 클래스 추가

#### document.body - body 태그 선택

#### .append() - 대상의 하위 엘리먼트로 삽입하기



## 3. 따라다니는 애니메이션 생성 ★

- 이벤트를 "적용할 대상"의 위치를 읽음 => "하이라이트"객체에 위치 적용
- 빈 애니메이션 함수 생성 후 4.단계를 실행후에 애니메이션을 완성한다. 

#### transision : all 0.2s - 애니메이션 적용(부드럽게 전환)

#### getBoundingClientRect() - 개체의 위치 및 크기정보 반환 

#### style.transform = `translate(x, y)`  - 이동할 위치 적용 (주의 : 문자열로 써줘야 함)

#### window.scroll - 스크롤 값 얻어오기





## 4. 모든 개체에 애니메이션 적용

#### addEventListener('이벤트','콜백함수');
