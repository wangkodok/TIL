background
=============
웹 문서의 전체 배경뿐만 아니라 텍스트, 목록 등 특정한 요소에도 배경을 지정할 수 있습니다.

## background-color
배경색을 지정하려면 배경을 넣고 싶은 요소의 속성을 사용합니다. 색상을 표현하는 방법을 `#000;` `rbg(0, 0, 0);` `hsl()` `black` 있습니다. 투명도를 사용하고 싶다면 `rbga(0, 0, 0, 0.5);` 사용하여 끝 자리에 소수점 `0.0 ~ 1` 까지 투명도를 조절할 수 있습니다.

```css
div {
  background-color: #000000;
  background-color: rgb(0, 0, 0);
  background-color: red;
}
```

## background-image
배경 `이미지를 넣을 때 쓰는 속성`입니다. `url()` 이미지 파일 경로를 넣어서 사용합니다.

```css
div {
  background-image: url('image.jpg');
}
```

## background-clip
박스 모델 관점에서 배경 적용 범위를 조절할 수도 있습니다. 즉, 박스 모델의 가장 `외관인 테두리까지 적용`할 지, `테두리를 빼고 패딩 범위까지 적용`할 지, 아니면 `내용 부분에만 적용`할 지 선택할 수 있습니다.

```css
div {
  background-clip: border-box; /* 테두리까지 */
  background-clip: padding-box; /* 패딩 범위 */
  background-clip: content-box; /* 내용 부분에만 */
}
```

## background-repeat
배경 이미지를 `반복하거나, 하지 않거나 할 수 있는 속성`입니다.

```css
div {
  background-repeat: repeat /* 반복 */
  background-repeat: no-repeat /* 반복 하지 않음 */
  background-repeat: repeat-x /* 가로 */
  background-repeat: repeat-y /* 세로 */
}
```

## background-size
배경 이미지 `사이즈 조절해주는 속성`입니다.

```css
div {
  background-size: auto;
  background-size: contain; /* 요소 안에 크기 만큼 채우기 */
  background-size: cover; /* 요소 전체를 모두 채우기 */
  background-size: 10px 10px; /* px단위로 너비와 높이를 지정하기 */
  background-size: 10%; /* 백분율로 너비와 높이를 지정하기 */
}
```

## background-position
배경 이미지의 `위치를 지정하는 속성`입니다.

```css
div {
  background-position: top left;
  background-position: center;
  background-position: bottom right;
}
```

## background-origin
배경 이미지의 `기준을 주는 속성`입니다. `background-position` 속성을 이용해 배경 이미지를 배치할 때 기준이 있어야 하는데 그 기준이 `background-origin` 입니다.

```css
div {
  background-origin: border-box; /* 외곽인 테두리 기준 */
  background-origin: padding-box; /* 패딩 기준 */
  background-origin: content-box; /* 내용 부분 기준 */
}
```

## background-attachment
스크롤하면 `배경 이미지 고정하고 싶을 때 쓰는 속성`입니다.

```css
div {
  background-attachment: scroll; /* 스크롤과 함께 이미지도 스크롤 */
  background-attachment: fixed; /* 배경 이미지 고정 */
}
```