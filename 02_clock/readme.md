#시계만들기

### CSS

```css
div{
	transform-origin : 100%  /*원점의 위치 설정(0%:왼쪽끝 ~ 100%:오른쪽 끝)*/
    transform : rotate(30deg) /*엘리먼트를 30도 회전시킴*/
    transition-timing-function: cubic-bezier(0.1, 2.7. 0.58, 1); /*엘리먼트의 움직임을 설정*/
}
```

### JavaScript

```javascript
setInterval(setDate, 1000); /*함수를 매초마다 반복해서 실행*/

new Date(); /*현재 시간 호출 내장함수*/

minHand.style.transform = `rotate(${minutesDegrees}deg)`; /*변수를 사용한 CSS변형*/
```

