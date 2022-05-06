dataset
=============
`"data-` 접근할 수 있는 프로퍼티이며, 속성값을 가져올 수 있습니다.

```html
<div class="user" data-id="0123456789" data-user="kodok">myname-kodok</div>
```

```javascript
const user = document.querySelector('.user');
console.log(user.dataset.id);
console.log(user.dataset.user);
```