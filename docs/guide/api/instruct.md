# 指令

## 说明
  脚本指令通过`javaScript`解析，理论上支持`javaScript`所有语法。原始脚本执行环境在主进程当中并不和浏览器互通。
  `execJavaScript`执行环境为当前控制的浏览器页面。运行采用单一事件流，你只能控制当前的页面，如果需要控制其他页面必须进行切换。
  
## setDeviceEmulation()
  说明: 设置浏览器的模拟设备

  参数:
  
  | 名称        | 类型   |  默认值  | 说明  |
  | --------   | --------  | --------  |  -------- |
  | screenPosition| string | desktop|  指定要模拟的屏幕类型,可选desktop\mobile|
  | screenSize | object |  空   |屏幕大小,screenPosition为mobile时启用,{width:Number,height:Number}|
  | viewPosition| object|  空   |屏幕定位,screenPosition为mobile时启用,{x:Number,y:Number}|
  | deviceScaleFactor| int |  0   | 设备比例系数    |
  | viewSize| object|空| 模拟屏幕视图大小,{width:Number,height:Number}|
  | scale| float | 1  |  模拟视图的比例  |

   请求示例:
```js
  await setDeviceEmulation({
    screenPosition: 'mobile',
    screenSize: {
      width: 1024,
      height: 1920
    },
    viewPosition: {
      x: 500,
      y: 600
    },
    deviceScaleFactor: 0,
    viewSize: {
      width: 1024,
      height: 1920
    },
    scale: 1
  })
```

## cookies(type,details:object)
  说明: 设置所有cookies

   type: "setAll",details参数：
  | 名称        | 类型   |  默认值  | 说明  |
  | --------   | --------  | --------  |  -------- |
  | url        | string |  空     |必填，与cookie相关联的url|
  | value       | string |  空     |必填，cookie值|
   请求示例:
  ```js
  await cookies("setAll","https://www.baidu.com/","jZ0bGJpeXR3")
  ```
  说明: 设置单个cookies 

  type: "set",details参数:
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

  请求示例:
  ```js
  await sleep(2000); 
  await cookies("set",{
    "url": "https://www.baidu.com/",
    "name": "BDUSS",
    "value": "jZ0bGJpeXR3Z1FCeWRPclJ1LTRtOUI2YWR6fkpXfmxKSDU1Sk5LS3htS3dDS3RoRUFBQUFBJ",
    "domain": ".baidu.com"
  })
  ```
  说明: 移除cookies 
  
  type: "remove",details参数：
  | 名称        | 类型   |  默认值  | 说明  |
  | --------   | --------  | --------  |  -------- |
  | url        | string |  空     |必填，与cookie相关联的url|
  | name       | string |  空     |必填，cookie的名称|
   请求示例:
  ```js
  await cookies("remove",{
    "url": "https://www.baidu.com/",
    "name": "百度"
  })
  ```

## dom

### dom.get(sign)
  
  绑定当前操作的`dom` 并设置为操作`dom`,通常跟随`click`或`set`, 其中参数`sign`支持传递元素的`css选择器`、`xpath`、`id`。

  ``` js
  await dom.get('#id')
  ```

### dom.exist(sign): boolean
  
  判断传入的元素值是否存在，存在返回true，不存在返回false。

  ``` js
  await dom.exist('#id')
  ```

### dom.getByText(text,index)

  绑定当前操作的`dom` 并设置为操作`dom`。
  text: 要寻找的文本的元素
  index: 如果有多个需要传递索引表示第几个,从0开始0标识第一个。

  ``` js
  await dom.getByText('百度一下',0)
  ```
### dom.wait(sign,ms)
  
  等待元素出现，默认等待最大时间为10s,如果10s内还未出现则保持，元素出现则立即执行之后的命令。

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
  
### dom.set(value)
  对当前操作的元素执行赋值操作, 元素必须是可赋值的类型, 如input类型。

  ``` js
  await dom.set('hello word!')
  ```

### dom.reSet(value)
  对当前操作的元素执行赋值操作, 元素必须是可赋值的类型, 如input类型。
  赋值时会清空之前内容，该操作等同于 clear + set

  ``` js
  await dom.reSet('hello word!')
  ```

### dom.clear()
  清空输入框内容，清空的内容为当前操作的input元素。
  ``` js
  await dom.clear()
  ```

### dom.upload(id,filePath)
  上传文件, 控制input file 自动上传文件，需要传递input框的唯一id, 以及本地文件路径。
  ``` js
  await dom.upload('#cherry','D:\\cherry.txt') // 将cherry.txt上传到当前页面id="cherry"的层级当中
  await dom.upload('#cherry','D:/cherry.txt') // 注意文件路径中使用\\或/，避免编码错误
  ```
### dom.selectText(start,end)
  选择input文本,或移动光标位置.

   ``` js
  await dom.selectText(-1) // 全选当前input的内容
  await dom.selectText(2,2) // 将光标移动到第二个字节后
  await dom.selectText(2,4) // 选中2-4字节中间的内容 
  ```

### dom.getAttributes(name)
  获取当前操作元素的属性，具体属性值参考html dom。

   ``` js
  var id = await dom.getAttributes('id') // 获取当前dom的id
  var className =  await dom.getAttributes('className') // 获取当前操作dom的calss名称
  ```

### dom.lineKeyOperation(key,rowKey,optKey)
  根据关键字[key]和行标识[rowKey]找到目标行，并对行内目标[optKey]进行点击操作。
  key:只支持元素内的纯文本。
  rowKey:只支持行标识的class属性名。
  optKey：支持操作目标元素内的纯文本或XPath或CSS选择器。
  ``` js
  await dom.lineKeyOperation('计划名称','el-table__row','删除') # 删除指定行
   ```


### dom.hover(sign)
  鼠标悬浮操作, 其中参数`sign`支持传递元素的`css选择器`、`xpath`、`id`。
  ``` js
  await dom.hover('#id') # 根据id定位元素，鼠标悬浮显示
   ```

## page
### page.create(url:string,partition:string)
  创建新页面打开网页, 传入标准的`url`格式,`partition`绑定session标识，可任意命名。
  ``` js
  await page.create('http://www.baidu.com','abc') // cookie为已登录状态
  await sleep(3000)
  await cookies("set",{url:'https://www.baidu.com',name:'BDUSS',value:'ZxhT',domain:'.baidu.com'})
  await sleep(3000)
  await page.create('http://www.baidu.com') // 未登录状态
  ```

### page.to(url)

  切换当前页面的url,支持传入标准的`url`格式。

  ``` js
  await page.to('http://www.baidu.com')
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

### page.delete(index)
  
  按索引删除删除关闭页面从0开始，如删除第一个页面则为`deletePage(0)`,
  当页面全部关闭时则会自动退出浏览器。

  ``` js
  await page.delete(0)
  ```

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
  ``` js
  await page.screenshot('/src/screenshot/') // 截图存取至该路径下
  ```

## keyboard
### keyboard.press(<a href="/cherry_driver/guide/api/apistruct.html">keyCode</a>)
  模拟点击键盘。
  ``` js
  await keyboard.press('KeyA')  // 模拟点击键盘a键
  ```
### keyboard.down(<a href="/cherry_driver/guide/api/apistruct.html">keyCode</a>)
  模拟按下键盘。
  ``` js
  await keyboard.down('ControlLeft')  // 模拟按下
  ```
### keyboard.up(<a href="/cherry_driver/guide/api/apistruct.html">keyCode</a>)
  模拟抬起键盘。
  ``` js
  await keyboard.up('ControlLeft')  // 模拟键盘抬起
  ```
### keyboard.type(<a href="/cherry_driver/guide/api/apistruct.html">keyCode</a>)
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

### assert.all(string)
  全局断言,判断当前页面内是否存在指定字符串。
  ``` js
  await assert.all('立即下单') // 判断页面内是否存在立即下单文字
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

## openBrowser(url) 
  打开浏览器页面, 兼容旧版, 推荐使用`createPage`来代替。
  ``` js
  openBrowser('http://www.baidu.com')
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

## getDoms(sign,index)
  获取`dom`下第`index`个`sign`元素
  `sign`:元素标记，用于查找定位元素,支持传递元素的`css选择器`、`xpath`、`id`
  `index`:从0开始，表示第1个`sign`
  ``` js
  await getDoms('#id',0) //获取第1个id
  ```

## openDevTools()
  打开调试模式
  ```js
  await openDevTools()
  ```

## closeDevTools()
  关闭调试模式
  ```js
  await closeDevTools()
  ```

## log(level:LoggerLevel,text:string)
  写入日志文件，level可选: debug | info | warn | error，text: 日志信息
  ```js
  await log("error","检查一下，报错了！")
  ```

## clearCookie()
  清除Cookie
  ```js
  await clearCookie()
  ```

  ## clipboards(type,text)
  剪切板: 写信息/读信息
  ```js
  await clipboards(`writeText`,`nihao`) //剪切板写入nihao
  await clipboards(`readText`) //剪切板读取写入的信息：nihao
  ```

