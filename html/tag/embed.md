embed
=============
HTML 초기 버전부터 사용해서 대부분 브라우저에서 사용할 수 있습니다. `<embed>` 태그에는 닫는 태그가 없습니다.

```html
<embed src="">
```

## src 속성에 파일을 삽입
`<embed>` 태그에서는 `src` 속성을 사용해 삽입할 멀티미디어 파일을 지정하여 오디오, 비디오, 이미지 등 다양한 멀티미디어 파일을 삽입할 수 있습니다. 따라서 HTML의 `<audio>, <video>, <object>` 태그를 지원하지 않는 웹 브라우저를 고려해야 하면 `<embed>` 태그를 사용해서 멀티미디어 파일을 삽입합니다.

```html
<embed src="song.mp3">
```