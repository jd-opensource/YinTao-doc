# dom 

页面元素类,对页面元素操作的方法通常都包含在此类下面。

## exist(sign): boolean
  
  判断传入的元素值是否存在，存在返回`true`，不存在返回`false`。

  ``` js
  const result =  await dom.exist('#id')
  console.log('result:', result)
  // >  'result:' true
  ```

## dragTo(sign1,sign2)

  拖拽元素，控制鼠标拖拽从`元素1`拖动至`元素2`, 入需更精细化控制可使用`mouse.dragTo`

```js
  await dom.dragTo('//*[@id="anchor-0"]/div/div[3]/div/div/div[2]','//*[@id="anchor-0"]/div/div[3]/div/div/div[1]')
```
## wait(sign,ms)
  
  等待元素出现，默认等待时间为`5s`,如果`5s`内还未出现则抛出错误，元素出现后执行后续命令。

  `sign`： 元素标记，用于查找定位元素。

  `ms`: 单位毫秒，设置最长等待时间

  ``` js
  await dom.wait('#id')
  ```

## viewTo(sign)
  通过滚动条让指定元素在屏幕中居中显示.

  `sign`： 元素标记，用于查找定位元素。

  ``` js
  await dom.viewTo('#id')
  ```

## dispatchEvent(sign, eventName)

  `sign`： 元素标记，用于查找定位元素。
  `eventName`: 元素事件名称

  ``` js
  await dom.dispatchEvent('#id','click')  // 触发元素事件
  ```

## click(sign, option)
  对目标定位元素进行点击操作

options:
- button?: "left"|"right"|"middle" 默认left;
- clickCount?: number 点击次数默认为1;
- delay?: number 点击延迟;
- force?: boolean 是否强制点击，强制点击不校验元素操作状态;
- modifiers?: Array<"Alt"|"Control"|"Meta"|"Shift">;
- noWaitAfter?: boolean;
- position?: { 相对于元素填充框左上角使用的点。如果未指定，则使用元素的某个可见点

  x: number;

  y: number;

};
- strict?: boolean; 调用需要选择器解析为单个元素。如果给定的选择器解析为多个元素，则调用将引发异常
- timeout?: number; 命令最大执行超时时间
- trial?: boolean; 仅进行元素操作校验，但不进行点击


  ``` js
  await dom.click("#id")
  await dom.click("#id",{timeout:3000}) // 增加点击命令超时
  ```
  
## fill(sign, value)
  对元素进行输入操作，功能和set类型。

  ``` js
  await dom.fill("#id",'hello word!')
  ```

## screenshot(sign,option)
  对指定元素进行截图

options:

 - fullPage? `boolean` 如果元素内有滚动条，可以设置此参数截取完整元素
 - mask? `sign[]` 在截图时可以配置忽略页面元素
 - path? `string` 截图图像存储路径
 - quality? `number` 图像的质量，介于 0-100 之间。不适用于png图像。
 - timeout? `number` 以毫秒为单位的最长时间,默认为 30 秒,传递0以禁用超时
 
  ``` js
  await dom.screenshot('#main-chart',{path:'ack.jpg',fullPage:true})
  ```

## set(value,sign)
  **优先使用dom.fill, 如果事件未完整触发可使用改指令替代**
  对当前操作的元素执行赋值操作, 元素必须是可赋值的类型, 如input类型。

  ``` js
  await dom.set('hello word!',"#id")
  ```
## upload(id,filePath)
  上传文件, 控制input file 自动上传文件，需要传递input框的唯一id, 以及本地文件路径。
  ``` js
  await dom.upload('#YinTao','https://storage.360buyimg.com/assert/zi.jpg') // 上传远程文件
  await dom.upload('#YinTao','D:/YinTao.txt') // 注意文件路径中使用\\或/，避免编码错误
  await dom.upload('#YinTao','D:/YinTao.txt') // 注意文件路径中使用\\或/，避免编码错误
  ```

## select(sign,{value?:string,label?:string,index?:number},options)

options:
 - force? `boolean` Whether to bypass the actionability checks. Defaults to false.
 - noWaitAfter? `boolean` Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to false.
 - strict? `boolean` When true, the call requires selector to resolve to a single element. If given selector resolves to more then one element, the call throws an exception. 
 - timeout? number Maximum time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout.

```js
await dom.select("#id",{index:2})  // 选择下拉框第三个
await dom.select("#id",{label:"京东"})  // 选择 内容为京东的下啦
```

## getAttributes(sign,attr)
  通过sign 和属性名获取对应内容

``` js
var text =  await dom.getAttributes("#id",'innerText') // 获取文本内容
var value =  await dom.getAttributes("#id",'value') // 获取input中的值
var checked =  await dom.getAttributes("#id",'checked') // 检查复选框是否勾选
var className =  await dom.getAttributes("#id",'class') // 获取当前操作dom的calss名称
```

## hover(sign)

鼠标悬浮操作, 其中参数`sign`支持传递元素的`css选择器`、`xpath`、`id`。

``` js
  await dom.hover('#id') # 根据id定位元素，鼠标悬浮显示
```

## tap(sign, options?: {
    force?: boolean | undefined
    noWaitAfter?: boolean | undefined
    position?: {
        x: number
        y: number
    } | undefined
    strict?: boolean | undefined
    timeout?: number | undefined
    trial?: boolean | undefined
})
  
鼠标悬浮操作, 其中参数`sign`支持传递元素的`css选择器`、`xpath`、`id`。

``` js
  await dom.tap('#id') # 用于在h5中模拟按压
```

