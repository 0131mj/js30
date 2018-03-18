# css

##flex

### flex란?

flex는 기존의 float, table 등의 레이아웃 스타일을 대체하기 위해 고안된 CSS 속성이다. 



### 이중구조

flex를 구현하기 위해서는 부모-자식의 2단의 구조가 필요하다. 

마치 ul과 li가 쌍을 이루어 있는 것과 마찬가지다. 

```html
<container>
	<content>
	</content>
</container>
```



또한 요소마다 지정할 수 있는 옵션이 다르다. 

#### container

- display : flex레이아웃을 사용하겠다고 선언한다. 
- flex-direction : 안에 포함된 요소들이 정렬될 방향을 설정한다.
- flex-wrap : 줄바꿈의 여부 결정(nowrap:줄바꿈안함, wrap:줄바꿈)
- flex-flow
- justify-content
- align-items
- align-content

#### item

- order
- flex-grow : 엘리먼트가 방향에서 차지하는 비중(기본값은 0)
- flex-shrink : 레이아웃이 변경될때 얼마나 줄일지의 비율을 결정(기본값은 1)
- flex-basis : 엘리먼트가 방향에서 차지하는 폭을 픽셀로 입력함.
- flex
- align-self




### 부모 엘리먼트 설정

```html
<style>
    container{
        display: flex;
        flex-direction : column;
    }
</style>
<container>
	<content>
	</content>
</container>
```

#### displah:flex 부모 엘리먼트에 디스플레이 선언

flex레이아웃은 부모엘리먼트의 display를 flex로 지정하는명령으로 시작한다. 



#### flex-direction : 부모엘리먼트에 하위엘리먼트 방향 설정

row : 좌에서 우로 정렬(기본값)

row-reverse : 우에서 좌로

column : 위에서 아래로

colunm-reverse : 아래에서 위로





### 자식 엘리먼트 설정

```html
<style>
    container{
        display: flex;
        flex-direction : column;
    }
    content:nth-child(2){
        flex-basis: 200px;
    }
</style>
<container>
	<content></content>
    <content></content>
</container>
```

#### flex-grow : 엘리먼트 비중 설정

부모에서 지정한 flex-direction에서 얼마나 비중을 차지할지를 결정하는 값이다. 

기본값은 0이다. 



#### flex-basis : 하위 엘리먼트 너비 설정

여기서 유의해야 할 사실은 , width나 height가 아니라, 상위엘리먼트에서 지정한 방향대로의 너비가 된다는 것이다. 

즉,  좌우 정렬을 하면 flex-basis는 폭이 되고,

상하 정렬을 하면 flex-basis는 높이가 된다는 것.

