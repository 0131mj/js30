# 11 Custom Video Player



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



더 알아보기 

https://www.videezy.com/ (무료 동영상 소스)

https://www.w3schools.com/tags/ref_av_dom.asp (기능참고)





----

- 삼항연산자와 대괄호접근을 사용한 메서드 실행
- 실행되고 있는 이벤트에 리스너 달기
- addEventListener에서 호출한 함수의 this 바인딩
- dataset 사용하기
- <input type = "range" /> 속성 알아보기, 이벤트 리스너 달기







