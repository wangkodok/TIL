position
=============
웹 문서에서 요소의 위치를 자유롭게 정할 수 있습니다.

## 요소의 위치를 정하는 속성
`top` `left` `bottom` `right` 속성에서 선택하고 속성값을 정합니다.


## static 속성값
기본값입니다. 또는 기본값으로 배치하고 싶을 때 사용합니다.
```css
div {
  position: static;
}
```

## relative 속성값
위치를 지정할 수 있다는 점을 제외하면 기본 속성값 `static` 과 같습니다. 위 `top: 10px;` 왼쪽 `right: 20px;` 위치를 배치합니다.
```css
div {
  position: relative;
  top: 10px;
  left: 20px;
}
```

## absolute 속성값
상위 요소 기준으로 위 `top: 10px;` 오른쪽 `right: 20px;` 위치를 배치합니다. `relative` 사용한 부모 요소 기준으로 배치합니다. 없으면 최상위 요소로 배치합니다.
```css
div {
  position: absolute;
  top: 10px;
  right: 20px;
}
```

## fixed 속성값
브라우저 창 기준으로 위치를 배치합니다. `fixed` 요소를 고정합니다. 웹 브라우저에서 스크롤하더라도 항상 같은 위치에 나타납니다.
```css
div {
  position: fixed;
  top: 0;
  right: 0;
}
```