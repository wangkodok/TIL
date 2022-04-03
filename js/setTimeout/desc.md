setTimeout()
=============
일정 시간 후에 특정 코드, 함수를 의도적으로 지연한 뒤 실행하고 싶을 때 사용하는 함수로 `setTimeout()`을 사용합니다.

콜백함수로 지연시간 뒤에 실행될 코드를 설정합니다. 지연시간은 밀리세컨드 단위로 설정해야하며 예를들어 지연시간 1000은 1초, 10000은 10초를 의미합니다. 만약 3초 뒤에 실행되야 한다면 아래와 같이 설정합니다.

```javascript
setTimeout(function() {
  console.log('3초 후에 실행');
}, 3000);
```

## clearTimeout
반드시 setTimeout() 이벤트는 이벤트를 제거하는 코드 역시 필요합니다. clearTimeout()은 설정된 setTimeout()을 제거하는 함수입니다.

```javascript
let timer = setTimeout(function() {
  console.log('3초 후에 실행');
}, 3000);
clearTimeout(timer);
```