# burlang-keyboard

screen keyboard on buryat language based on simple-keyboard

```
npm i burlang-keyboard
```

## Usage

```js
import BurlangKeyboard from 'burlang-keyboard';

const input = document.createElement('input')
document.body.appendChild(input)

new BurlangKeyboard('app', {
  onChange (v) {
    input.value = v;
    console.log("Input changed", v);
  }
})
```