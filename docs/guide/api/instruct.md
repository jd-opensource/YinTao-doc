# 指令

## 说明
  cherry 执行时主要通过解析指令代码执行, 这些内部指令在运行时以被预注册的js函数所替代,这意味着未知的指令无法得到正确的解析。
  同时我们可以使用原生js进行逻辑编写。部分指令生效会有一些限制，这取决于不同页面之间的上下文差异，cherry对这些工作进行了简化。
  执行时只存在一套上下文，即当前控制的页面。多页面直接操作必须进行手动切换(不建议使用多页面)。
  注意: `execJavaScript`执行环境仅为当前控制的浏览器页面,而原生的js将在node侧执行。

## cookies(type,details:object)
  说明: 设置所有cookies

   type: "setAll",details参数：
  | 名称        | 类型   |  默认值  | 说明  |
  | --------   | --------  | --------  |  -------- |
  | url        | string |  空     |必填，与cookie相关联的url|
  | value       | string |  空     |必填，cookie值|
  示例:
  ```js
  await cookies("setAll","https://www.baidu.com/","jZ0bGJpeXR3")
  ```


  说明: 设置单个cookies 

  type: "set"
  
  details参数:
  | 名称        | 类型   |  默认值  | 说明  |
  | --------   | --------  | --------  |  -------- |
  | url        | string |  空     |必填，与cookie相关联的url|
  | name       |  string|  空     |必填，cookie的名称|
  | value      | string |  空     |必填，cookie的值|
  | domain     | string |  空     |必填，cookie的域，使用前面的点进行标准化，以便适用于子域|
  | path       | string |  空     |选填，cookie的路径|
  | secure     | boolean| false   |选填，cookie是否标记为安全|
  | httpOnly   | boolean| false   |选填，cookie是否仅标记为HTTP|
  | expirationDate|double| 空  |选填，cookie的到期日期，表示自UNIX纪元以来的秒数|
  | sameSite   | boolean|no_restriction|选填，应用于此cookie的相同站点策略,可选：unspecified,no_restriction,lax,strict|

  注意: 新版不允许同时设置url和domain, 设置url后会自动生成对应的domain.
  
  如果你要设置单个cookie更推荐使用`domain` + `path` 设置, 而非`url`

  示例:
  ```js
  await cookies("set",[{
    "domain": ".jd.com",
    "name": "sso.jd.com",
    "path": "/",
    "value": "jZ0bGJpeXR3Z1FCeWRPclJ1LTRtOUI2YWR6fkpXfmxKSDU1Sk5LS3htS3dDS3RoRUFBQUFBJ",
  }])
  ```
  说明: 清除所有cookie

  一般不需要使用，运行时会创建干净的环境，不包含如何cookie。

  ```js
  await clearCookie()
  ```

## dom

### dom.exist(sign): boolean
  
  判断传入的元素值是否存在，存在返回true，不存在返回false。

  ``` js
  await dom.exist('#id')
  ```
### dom.wait(sign,ms)
  
  等待元素出现，默认等待最大时间为10s,如果10s内还未出现则抛出错误，元素出现后执行后续命令。

  `ms`: 单位毫秒，设置最长等待时间

  `sign`： 元素标记，用于查找定位元素。

  ``` js
  await dom.wait('#id')
  ```

### dom.click()
  对当前操作的元素执行点击操作

  ``` js
  await dom.click()
  ```
  
### dom.fill(sign, value)
  对元素进行输入操作，功能和set类型。

  ``` js
  await dom.fill("#id",'hello word!')
  ```

### dom.set(value,sign) -- 建议使用dom.fill
  **不建议使用该指令，后续版本将移除，统一使用dom.fill**
  对当前操作的元素执行赋值操作, 元素必须是可赋值的类型, 如input类型。

  ``` js
  await dom.set('hello word!',"#id")
  ```
### dom.upload(id,filePath)
  上传文件, 控制input file 自动上传文件，需要传递input框的唯一id, 以及本地文件路径。
  ``` js
  await dom.upload('#cherry','https://storage.360buyimg.com/assert/zi.jpg') // 上传远程文件
  await dom.upload('#cherry','D:/cherry.txt') // 注意文件路径中使用\\或/，避免编码错误
  await dom.upload('#cherry','D:/cherry.txt') // 注意文件路径中使用\\或/，避免编码错误
  ```

### dom.getAttributes(sign,attr)
  通过sign 和属性名获取对应内容

   ``` js
  var className =  await dom.getAttributes("#id",'class') // 获取当前操作dom的calss名称
  ```

<!-- ### dom.lineKeyOperation(key,rowKey,optKey)
  根据关键字[key]和行标识[rowKey]找到目标行，并对行内目标[optKey]进行点击操作。
  key:只支持元素内的纯文本。
  rowKey:只支持行标识的class属性名。
  optKey：支持操作目标元素内的纯文本或XPath或CSS选择器。
  ``` js
  await dom.lineKeyOperation('计划名称','el-table__row','删除') # 删除指定行
   ``` -->

### dom.hover(sign)
  鼠标悬浮操作, 其中参数`sign`支持传递元素的`css选择器`、`xpath`、`id`。
  ``` js
  await dom.hover('#id') # 根据id定位元素，鼠标悬浮显示
   ```

## browser

### browser.on(event:'request'| 'requestfaile' | 'requestfinished' | 'response',callback:Function)
监听浏览器事件
**注意:**:  监听事件是异步的且持续的,你不能期待再事件中抛出错误并中断执行。如果你需要同步使用[page.waitForResponse](https://dqa.jd.com/cherry/guide/api/instruct.html#page.waitForResponse)

``` js
await browser.on('request',(res)=>{
    // 监听页面请求
    console.log('url',res._initializer.url)
})
```

### browser.route(url: string|RegExp,handler: ((route: Route, request: Request) => void), options?: {times?: number;})
修改浏览器接口内容
``` js
// 修改页面的png图片为自定义图片
await browser.route('**/*.{png}',(route)=>{
    console.log('route',route)
    route.continue({url:'http://storage.360buyimg.com/assert/icon.png'});
})
```

## page

### page.setDevice(name:string)
设置页面设备模拟, 注意需要在页面创建前设置，否则只在之后创建的页面生效.

[更多可用设备名称](https://coding.jd.com/cherry/core/blob/master/src/server/deviceDescriptorsSource.json)

  ``` js
  await page.setDevice('iPhone 11') // 模拟iPhone 11 访问
  ```
### page.create(url:string)
  创建新页面打开网页, 传入标准的`url`格式
  ``` js
  await page.create('https://www.baidu.com') // 打开百度页面
  ```

### page.waitPopup()
  将页面上下文切换至弹出的新窗口中
  ``` js
    await dom.click("#pageOpen") // 该点击操作将启动新窗口
    await page.waitPopup() // 将上下文切换至最近打开的窗口中
    // 后续操作将在新窗口中进行
    await dom.fill("#id","123")
  ```

### page.waitForResponse
  等待页面的接口响应
  **提示:**:  这里使用Promise.all 是为了让两个操作同时进行，wait Response 基于事件监听,你不能等待监听而不去触发请求，这意味着什么都不会发生。
  
  ```js
  const [res] = await Promise.all([
    page.waitForResponse(response => response.url().includes('/ajax/websiteProfile/online.json') && response.status() === 200),
    // Triggers the response
    page.to(`http://t.268xue.com/`)
  ]);
  console.log('response',res.url())
  ```

### page.to(url[, options])
  切换当前页面的url,支持传入标准的`url`格式。

  options <Object>

  - referer <string>: Referer header value. 

- timeout: <number> Maximum operation time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. 
  
- waitUntil: <"load"|"domcontentloaded"|"networkidle"|"commit"> When to consider operation succeeded, defaults to load. Events can be either:#

  * 'domcontentloaded' - consider operation to be finished when the DOMContentLoaded event is fired.

  * 'load' - consider operation to be finished when the load event is fired.
  
  * 'networkidle' - consider operation to be finished when there are no network connections for at least 500 ms.
  
  * 'commit' - consider operation to be finished when network response is received and the document started loading.

  ``` js
  await page.to('https://www.baidu.com')
   await page.to('https://www.baidu.com',{waitUntil:'commit'})
  ```

### page.getURL()

  获取当前页面的地址。

  ``` js
  await page.getURL()
  ```

### page.back()
  回退当前页面。
  ``` js
  await page.back() 
  ```

### page.forward()
  前进当前页面。
  ``` js
  await page.forward() 
  ```

### page.refresh()
  刷新当前页面。
  ``` js
  await page.refresh() 
  ```

<!-- ### page.close(index)
  
  按索引删除删除关闭页面从0开始，如删除第一个页面则为`deletePage(0)`,
  当页面全部关闭时则会自动退出浏览器。

  ``` js
  await page.close(0)
  ``` -->

### page.change(index)
  切换当前控制的页面, 1表示第一个。
  注: 如果先前页面在iframe内，切换页面后会自动退出iframe。

  ``` js
  await page.change(1)
  ```

### page.changeIframe(index)
  切换当前控制的iframe, 0表示当前页面内第一个iframe, -1 表示退出iframe, 默认不会进入iframe内。
  ``` js
  await page.changeIframe(0)
  ```

### page.screenshot(filePath)
  屏幕截图, filePath表示截图存放路径。
  必须指明详细的文件地址，而非目录地址。
  ``` js
  await page.screenshot('/src/screenshot/nihao.jpg') // 截图存取至该路径下
  // 兼容多平台运行时需要提供全平台可用路径

  const path = require('path')
  const os = require('os')
  const imgPath = path.resolve(os.tmpdir(),'nihao.jpg') // 获取跨平台的临时目录
  await page.screenshot(imgPath) 
  ```

## keyboard
### keyboard.press(<a href="/cherry/guide/api/apistruct.html">keyCode</a>)
  模拟点击键盘。
  ``` js
  await keyboard.press('KeyA')  // 模拟点击键盘a键
  ```
### keyboard.down(<a href="/cherry/guide/api/apistruct.html">keyCode</a>)
  模拟按下键盘。
  ``` js
  await keyboard.down('ControlLeft')  // 模拟按下
  ```
### keyboard.up(<a href="/cherry/guide/api/apistruct.html">keyCode</a>)
  模拟抬起键盘。
  ``` js
  await keyboard.up('ControlLeft')  // 模拟键盘抬起
  ```
### keyboard.type(<a href="/cherry/guide/api/apistruct.html">keyCode</a>)
  模拟键盘输入。
  ``` js
  await keyboard.type('hello word')  // 模拟输入,等同于使用 await set()
  ```

## mouse
  ### mouse.down(options:{button?: string;clickCount?: number;})
  用于模拟鼠标按下事件，默认值：button = 'left', clickCount = 1。
  ``` js
  await mouse.down()  // 模拟鼠标按下
  // 鼠标移动到x,y位置点击右键,需web页面支持鼠标右键操作
  await mouse.move(x,y)
  await mouse.down({button:"right"})
  await mouse.up({button:"right"})
  ```
### mouse.up(options:{button?: string;clickCount?: number;})
  用于模拟鼠标抬起事件，
  默认值：button = 'left', clickCount = 1。
  ``` js
  await mouse.up()  // 模拟鼠标抬起
  ```
  ### mouse.click(x:number,y:number,options:{delay?: number;})
  用于模拟鼠标点击事件，
  ``` js
  await mouse.click(100,100)  // 模拟点击100,100位置
  ```
  ### mouse.move(options:{button?: string;clickCount?: number;})
  用于模拟鼠标移动事件。
  ``` js
  await mouse.move(100,100)  // 模拟鼠标移动至像素100,100位置
  ```
  ### mouse.wheel(options:{button?: string;clickCount?: number;})
  用于模拟鼠标滚轮事件。
  ``` js
  await mouse.wheel({ deltaY: 300 })  // 滚轮向下滚动300
  ```
## assert

### assert.all(string,times)
  全局断言,判断当前页面内是否存在指定字符串。
  默认判断规则为，判定默认6次每次间隔500ms,如果在规定时间能为找到则断言失败
  ``` js
  await assert.all('立即下单') // 判断页面内是否存在立即下单文字
  await assert.all('立即下单',10) // 增加重试次数
  ```

### assert.custom(sign,input,value,operate)
  断言，获取元素的预期值与实际值进行比较。sign:元素标记，支持传递元素的`css选择器`、`xpath`、`id`；input:断言的预期值；value:获取`sign`元素的值；opreate:比较方式：`0-相等`，`1-不相等`，`2-包含`，`3-不包含`；
  ```js
  await assert.custom('#su','value','百度一下',0) //判断su的value是否等于百度一下
  ```

### assert.title(string)
  断言，指定dom的`title`与入参进行比较。
  ```js
  await assert.title('百度一下，你就知道') //判断当前页面的title值是不是‘百度一下，你就知道’
  ```

### assert.location(url)
  断言，指定dom的`url`与文本进行比较。
  ```js
  await assert.location('https://www.baidu.com/') //判断当前页面的url值与传参是否一致
  ```

## execJavaScript(script)
  执行指定`JavaScript`脚本, 这里执行脚本将在页面环境内执行，并且锁定在当前操作的页面对象中或`iframe`中。
  ``` js
  await execJavaScript(`alert('hello ,word !')`)
  ```
  

## sleep(ms)
  休眠, 控制程序停止一段时间。 脚本最后增加的sleep无效，sleep后面必须跟随其他指令。
  ``` js
  await sleep(3000) // 等待3s
  ```

## hint(text,type)
  用于页面中展示重要的提示信息。type可选'success','info','warning','error'。
  ``` js
  await hint('成功提示的文案','success') 
  ```
## clearCookie()
  清除Cookie
  ```js
  await clearCookie()
  ```
