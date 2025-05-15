## 호이스팅(Hoisting)

자바스크립트 코드로 작성하면 다음과 같다.

```js
f();
function f() {
  console.log(x);
  var x = "Hello";
}
```

위의 코드를 호이스팅 단계로 코드를 작성하면 다음과 같다.

```js
function f() {
  var x;
  console.log(x); // undefined
  x = "Hello";
}
f();
```

var, function는 함수 스코프(Function Scope)이기 때문에 함수의 최상단으로 끌어올리는 것처럼 보이는 현상이다.

그러면 let과 const로 코드를 작성하면 다음과 같다.

```js
function f() {
  console.log(x); // ReferenceError
  let x = "Hello";
}
f();
```

let과 const도 호이스팅이 되지만 TDZ가 발생하여 접근을 하지 못한다.

## TDZ(Temporal Dead Zone)

let, const은 var와 function과 다르게 변수가 선언되기 전에 접근하는 것을 방지한다. 왜? 오류를 방지하고 가독성을 높이기 위해 도입된 개념이다.

## 쉽게 설명한다면?

호이스팅는 자바스크립트가 코드를 실행하기 전에 변수, 상수, 함수 등의 해당하는 스코프(Scope)의 위로 끌어올리는 것처럼 동작하는 현상이다.
TDZ는 let과 const 선언되기 전에 접근하는 것을 방지하고 가독성과 안정성을 높이기 위해 도입된 개념이다.
