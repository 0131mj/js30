# 11 Custom Video Player

- 커스텀 비디오 플레이어



## I. HTML 5 video 의 기능 알아보기



### 1. Video tag

```html
<video src="url"></video>
```

- 영상을 재생시키기 위해 사용하는 태그 
- 자바스크립트를 사용해 메서드를 실행하거나, 프로퍼티를 변경하여 관련 기능을 제어할 수 있다.  



### 2. Video Method

```javascript
video.play();  // 재생
video.pause(); //일시정지
```

- 콘솔창에서 메서드를 실행해보자. 



### 3. Video Properties

```javascript
video.src 	= "./video";// 소스주소
video.muted = true; 	// 무음여부 설정(true,false)
video.volume = 1; 		// 볼륨비율 (0~1)
video.currentTime = 10; // 재생할 시간지점
```

- 콘솔창에서 프로퍼티를 수정해보자. 



#### ? 의문점

- 왜 어떤건 이벤트로 하고 어떤건 속성값으로할까?
- 가령, video.play = true 이렇게 하면 되지 않을까?



더 알아보기 

https://www.videezy.com/ (무료 동영상 소스)

https://www.w3schools.com/tags/ref_av_dom.asp (기능참고)





## II.  기능 구현하기 

- DOM 구조확인 
- 엘리먼트를 변수에 담기 
- 메서드 만들기
- 변수에 메서드 붙이기



### 1. 재생/정지 기능 구현

#### 엘리먼트에 이벤트 달기 

- addEventListener

```javascript
target.addEventListener('event',method);
```



#### 재생/정지 토글시키기

조건문 : 정지된 상태에서 누르면 재생이 되도록, 재생 상태에서 누르면 정지되도록 

- 기본적인 방식

```javascript
if(condition === true){
    do.aMethod();
}else{
    do.bMethod();
}
```

- 삼항연산자와 대괄호접근을 사용한 메서드 실행

```javascript
const method = condition ? 'aMethod': 'bMethod'; 	// method 결정
do[method]();	// do객체 안의 method 실행
```



### 2. 재생/정지시 버튼 모양 바꾸기

일반적으로 생각하기에 토글플레이 안에 넣으면 될것 같다. 

하지만 가정 정확한 방법은, (클릭 등을 통한 변경이 아니라) 재생되면 정지모양을, 정지되면 재생 모양으로 변경하는 것이다. 

- 실행되고 있는 이벤트에 리스너 달기 - function updateButton()

- addEventListener에서 호출한 함수의 this 바인딩



### 3. 스킵 버튼 (2개)

- dataset 사용하기
- parserFloat



### 4. 볼륨 및 배속 설정

- 네임값과 value를 그대로 적용

- <input type = "range" /> 속성 알아보기, 이벤트 리스너 달기
- https://www.w3schools.com/howto/howto_js_rangeslider.asp



### 5. 프로그래스 바 스타일 변경

- 동영상의 재생시간이 업데이트 될때 이벤트 적용
- https://www.w3schools.com/tags/av_event_timeupdate.asp



### 6. 원하는 지점을 클릭했을때 부터 재생 시작하게 하기(scrub)

- click 먼저 구현
- console.log(e) : 이벤트를 클릭했을때 offsetX를 확인 가능하다. 
- && 문법 : 조건이 참일때, && 뒷부분 실행

```javascript
(e) => mousedown && scrub(e)
```







