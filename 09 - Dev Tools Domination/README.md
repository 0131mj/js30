

# 개발자 도구 꿀팁



## console.assert

```javascript
console.assert(1 === 2, '틀렸음') 
```

- 조건문이 참일때 콘솔쩜 로그 출력해준다.



## console.group

```javascript
dogs.foreEach(dog =>{
    console.group(`${dog.name}`);
	console.log(`This is ${dog.name}`);    
    console.groupEnd(`${dog.name}`);
})
```

- 그룹형태로 출력 가능



## console.groupCollapsed

```javascript
dogs.foreEach(dog =>{
    console.groupCollapsed(`${dog.name}`);
	console.log(`This is ${dog.name}`);    
    console.groupEnd(`${dog.name}`);
})
```

- 그룹형태로 출력하되 접혀서 출력됨.



## console.clear()

- 콘솔을 지워준다. 일단 시작할때 써놓고 해주면 편할거 같다.

## console.count()

- 카운트횟수 노출
- 동일한 콘솔쩜 로그가 몇번 일어났는지 세어준다. 