CSS 적용하는 방법
=============
HTML 문서에 CSS 스타일을 적용할 때에는 다음과 같이 세 가지 방법을 사용할 수 있습니다.

## 인라인 스타일(Inline style)
이 방식은 한 번 설정된 스타일을 변경하기가 매우 어려우며, 스타일 시트를 사용하는 많은 이점을 잃게 됩니다. 따라서 이 방식은 될 수 있으면 `꼭 필요한 경우에만 사용`해야 합니다.

```html
<h1 style="color: red;"></h1>
```

## 내부 스타일 시트(Internal style sheet)
이러한 내부 스타일 시트는 해당 `HTML 문서에만 스타일을 적용`할 수 있습니다.

```html
<head>
  <style>
    h1 {
      color: red;
    }
  </style>
</head>
```

## 외부 스타일 시트(External style sheet)
이러한 스타일 시트는 `<head>`태그에 `<link>`태그를 사용하여 `.css 파일`을 불러와서 적용합니다.

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```