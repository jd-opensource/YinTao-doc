
# mouse
使用鼠标对页面进行操作

## mouse.down(options:{button?: string;clickCount?: number;})
  用于模拟鼠标按下事件，默认值：button = 'left', clickCount = 1。
  ``` js
  await mouse.down()  // 模拟鼠标按下
  // 鼠标移动到x,y位置点击右键,需web页面支持鼠标右键操作
  await mouse.move(x,y)
  await mouse.down({button:"right"})
  await mouse.up({button:"right"})
  ```

## mouse.dragTo(point: {x:number,y:number}, targetPoint: {x:number,y:number})
使用鼠标进行拖拽，基于x，y坐标进行，将从point位置拖拽至targetPoint。
也可用于模拟滑动屏幕。

```js
await mouse.dragTo({x:378,y:447},{x:192,y:447})

// todo在无法得知坐标的情况下，可以通过在控制台输入:
document.onmousemove = (e)=>{console.log("x:",e.x,"y:",e.y)}
// 即可实时打印坐标位置
```

## mouse.up(options:{button?: string;clickCount?: number;})
  用于模拟鼠标抬起事件，
  默认值：button = 'left', clickCount = 1。
  ``` js
  await mouse.up()  // 模拟鼠标抬起
  ```
  ## mouse.click(x:number,y:number,options:{delay?: number;})
  用于模拟鼠标点击事件，
  ``` js
  await mouse.click(100,100)  // 模拟点击100,100位置
  ```
  ## mouse.move(options:{button?: string;clickCount?: number;})
  用于模拟鼠标移动事件。
  ``` js
  await mouse.move(100,100)  // 模拟鼠标移动至像素100,100位置
  ```
  ## mouse.wheel(x, y)
  用于模拟鼠标滚轮事件。
  ``` js
  await mouse.wheel(0,300)  // 滚轮向下滚动300
  ```
