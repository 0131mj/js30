#목적 
엘리먼트의 컨트롤에 따라 변화하는 property를 
JavaScript를 통해 즉시 CSS에 반영함.

## 새로 알게 된 것

#### input type color

* 컬러형태의 인풋
* 클릭시 피커를 자동으로 지원해준다. 
```html
<input type="color">
```


### --를 사용한 CSS변수 처리

--로 sass 처럼 변수화한 데이터 사용하기



#### data-

* data로 시작하는 모든 이름으로 속성을 삽입 가능하다. 

```html
<div id="el" data-temp="myValue"></div>
```



* 만든 속성은 자바스크립트에서 아래와 같이 'dataset' 키워드를 사용하여 접근함.
```JavaScript
var temp = document.querySelector('#el').dataset.temp;
console.log(temp);
```


#### 자바스크립트를 사용하여 변수를 html태그에 적용하기

* javascript를 사용하여 html에 스타일 적용
```javascript
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
```


* 적용한 속성은 아래와 같이 html에 반영됨.
```html
<html lang="en" style="--spacing:69px; --blur:22px;">
```



