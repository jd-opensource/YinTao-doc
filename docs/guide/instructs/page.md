
# page
页面类，包含对页面的操作、比如进入、刷新、返回、设置页面模拟等。


## page.setViewSize(width,height)

设置页面视图宽高，可用于在运行时动态修改。

  ``` js
  await page.setViewSize(200,400) // 设置页面视图大小为宽200高400
  ```

## page.setDevice(name:string)
设置页面设备模拟, 注意需要在页面创建前设置，否则只在之后创建的页面生效.

[更多可用设备名称](https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json)

  ``` js
  await page.setDevice('iPhone 11') // 模拟iPhone 11 访问
  ```
## page.create(url:string)
  创建新页面打开网页, 传入标准的`url`格式
  ``` js
  await page.create('https://www.baidu.com') // 打开百度页面
  ```

## page.waitPopup()
  将页面上下文切换至弹出的新窗口中
  ``` js
    await dom.click("#pageOpen") // 该点击操作将启动新窗口
    await page.waitPopup() // 将上下文切换至最近打开的窗口中
    // 后续操作将在新窗口中进行
    await dom.fill("#id","123")
  ```

## page.waitForEvent(event:string)
  等待页面事件，用于更新页面上下文内容，默认事件为`framenavigated`页面重定向
  更多event事件:
  - 'close': 页面被关闭时触发。
  - 'console': 当页面中有新的 console.log, console.debug, console.info, console.warn, 或 console.error 时触发。
  - 'crash': 当浏览器崩溃时触发。
  - 'dialog': 当页面弹出对话框时触发。
  - 'domcontentloaded': 当页面的 DOMContentLoaded 事件被触发时触发。即当初始 HTML 文档完全加载和解析完成后触发。
  - 'download': 当页面开始下载文件时触发。
  - 'filechooser': 当页面需要选择文件时触发。
  - 'frameattached': 当页面附加子帧时触发。
  - 'framedetached': 当页面卸载子帧时触发。
  - 'framenavigated': 当一个帧被导航到一个新的url时发出。
  - 'load': 当页面的 load 事件被触发时触发。即当所有资源（如图像和样式表）都已加载完成时触发。
  - 'navigation': 当页面控制权转移到另一个页面时触发。这通常意味着页面正在导航到新的 URL。
  - 'request': 当页面发出网络请求时触发。
  - 'response': 当页面接收到网络响应时触发。
  - 'route': 当页面接收到网络请求时触发。此事件允许您拦截和修改请求的内容。
  - 'websocket': 当页面连接到 WebSocket 时触发。
  ``` js
  // 登陆后页面会重建因此需要进行上下文转换
  await Promise.all([dom.click("text=登 录"),page.waitForEvent('framenavigated')])
  ```
  
## page.waitForResponse
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

## page.setBrowserCofing(options)
  设置浏览器配置信息。
  
  !！！ 注意-必须在第一访问页面前进行，或设置后使用page.create进行新环境搭建，否则配置不会生效

  全量配置参考:newContext(  [options](https://playwright.dev/docs/api/class-browser#browser-new-context))

 ```js 
 await page.setBrowserCofing({userAgent:"Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1"}) // 自定义浏览器userAgent

// 配置允许获取定位权限，设置经纬度
 await page.setBrowserCofing({permissions:['geolocation'], geolocation: { longitude: 12.4924, latitude: 41.8902 }})
 
 ``` 

## page.to(url[, options])
  切换当前页面的url,支持传入标准的`url`格式。

  options:

  - referer `string`: Referer header value. 

  - timeout: `number` Maximum operation time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. 
    
  - waitUntil: `"load"|"domcontentloaded"|"networkidle"|"commit"` When to consider operation succeeded, defaults to load. Events can be either:#

    * 'domcontentloaded' - consider operation to be finished when the DOMContentLoaded event is fired.

    * 'load' - consider operation to be finished when the load event is fired.
    
    * 'networkidle' - consider operation to be finished when there are no network connections for at least 500 ms.
    
    * 'commit' - consider operation to be finished when network response is received and the document started loading.

  ``` js
  await page.to('https://www.baidu.com')
  // commit 事件触发时,则判定页面加载完成。 -用于快速执行命令,一些网站主程序加载快，但依赖缓慢可用此参数加速测试。
  await page.to('https://www.baidu.com',{waitUntil:'commit'})

  // 增加页面访问超时时间，默认10s， 当前设置30s
  await page.to('https://www.baidu.com',{timeout: 30000})
  ```

## page.hasText(text:string,options:{timeout: number }) : bool
- v1.1.7+

查找当前页面是否包含text元素，结果返回布尔值。
  ``` js
  await page.to('https://www.baidu.com')
  let result = await page.hasText('百度一下')
  ```

## page.getURL()

  获取当前页面的地址。

  ``` js
  await page.getURL()
  ```

## page.back()
  回退当前页面。
  ``` js
  await page.back() 
  ```

## page.forward()
  前进当前页面。
  ``` js
  await page.forward() 
  ```

## page.refresh()
  刷新当前页面。
  ``` js
  await page.refresh() 
  ```

## page.change(index | url)
  切换当前控制的页面, 1表示第一个。除了索引切换外还支持url模糊切换。
  注: 如果先前页面在iframe内，切换页面后会自动退出iframe。

  ``` js
  await page.change(1)
  await page.change("baidu.com") // 切换至url 包含baidu.com
  await page.change("/seach") // 切换至url 包含seach
  ```

## page.changeIframe(index)
  切换当前控制的iframe, 0表示当前页面内第一个iframe, -1 表示退出iframe, 默认不会进入iframe内。
  也支持通过传递iframe-url片段切换到指定iframe中，更加方便。
  ``` js
  await page.changeIframe(0)
  // 根据 frame url进行切换
  await page.changeIframe("/login")

  // 退出iframe回到基础页面
  await page.changeIframe(-1)
  ```

## page.screenshot(filePath,options)
  屏幕截图, filePath表示截图存放路径。
  必须指明详细的文件地址，而非目录地址。

 <!-- - options:
 - fullPage? <boolean> 如果元素内有滚动条，可以设置此参数截取完整元素
 - mask? <sign[]> 在截图时可以配置忽略页面元素
 - path? <string> 截图图像存储路径,如已配置filePath则优先使用filePath
 - quality? <number> 图像的质量，介于 0-100 之间。不适用于png图像。
 - timeout? <number> 以毫秒为单位的最长时间,默认为 30 秒,传递0以禁用超时
  -->

  ``` js
  await page.screenshot('/src/screenshot/nihao.jpg') // 截图存取至该路径下
  // 兼容多平台运行时需要提供全平台可用路径

  const path = require('path')
  const os = require('os')
  const imgPath = path.resolve(os.tmpdir(),'nihao.jpg') // 获取跨平台的临时目录
  await page.screenshot(imgPath) 
  ```
