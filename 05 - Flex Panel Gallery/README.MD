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

- display
- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

#### item

- order
- flex-grow
- flex-shrink
- flex-basis
- flex
- align-self



### 시작하기

flex레이아웃은 부모엘리먼트의 display를 flex로 지정하는명령으로 시작한다. 

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



