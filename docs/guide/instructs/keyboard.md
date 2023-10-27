
# keyboard
使用键盘对页面进行操作



## keyboard.press(<a href="/guide/data/keyCode.html">keyCode</a>)
  模拟点击键盘。
  ``` js
  await keyboard.press('KeyA')  // 模拟点击键盘a键
  ```
## keyboard.down(<a href="/guide/data/keyCode.html">keyCode</a>)
  模拟按下键盘。
  ``` js
  await keyboard.down('ControlLeft')  // 模拟按下
  ```
## keyboard.up(<a href="/guide/data/keyCode.html">keyCode</a>)
  模拟抬起键盘。
  ``` js
  await keyboard.up('ControlLeft')  // 模拟键盘抬起
  ```
## keyboard.type(<a href="/guide/data/keyCode.html">keyCode</a>)
  模拟键盘输入。
  ``` js
  await keyboard.type('hello word')  // 模拟输入,等同于使用 await set()
  ```
