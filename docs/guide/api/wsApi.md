## 概要

  cherry 启动后默认占用本机`8888`端口,对外提供[websocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)服务。

  它更适合在网页端使用避免触发[CORS](https://wicg.github.io/cors-rfc1918)


## 通用数据协议

  与`http`不同`Websocket`采用数据协议进行交互。
  
  这意味着我们需要提供符合规范的数据才能被正确解析。

  `cherry`内部采用`json`结构传递数据。
  
  例:

  ```json
  {
    "api": "run",
    "config": {
      "script":"page.to('https://baidu.com')",
      "storage": {"id":123}
    }
  }
  ```
  
  只需给`websocket`连接发送这些数据，就能打开运行百度页面。
  内部实现中`http`以及`websocket`都通过`openApi`对外提供服务,
  这意味着他们支持相同的配置格式。

## 快速接入

在大多数情况下，我们只需要以函数式的方式去使用，
因此cherry提供对外便捷的函数式api文件封装。
[cherryLink](https://coding.jd.com/cherry/cherry/blob/master/packages/cherry-link/cherryLink.ts)
文件内包含了详细的使用步骤，你只需要以工具类接入使用即可。
如果你需要实现更高级的功能实现，可以按照下列数据格式自行接入。

## 录制

  说明: `录制脚本时调用,录制结果请求响应返回`

  参数:

  | 名称        | 类型   |  默认值  | 说明  |
  | --------   | --------  | --------  |  -------- |
  | url      | string| 空   |  录制时默认打开的地址   |
  | storage    | any    |  空     | 自定义参数仓库    |
    | cookies    | [Cookie](https://dqa.jd.com/cherry/guide/data/cookie.html)[]    |  空     | 可接收cookie数组,用于初始化配置 |
  | compatibility      | bool| 空   |  兼容模式,默认采用cherry浏览器,开启后将使用Chromium  |
  | device    | string    |  空     | 模拟移动设备录制, 支持的字段参考[setDevice](https://coding.jd.com/cherry/core/blob/master/src/server/deviceDescriptorsSource.json) |
  | hosts       | Map    | 空      | host信息 `{"域名":"解析IP地址"}`|     

**数据格式:**
  ```json
  {
    "api": "live",
    "config": {
      "url": "https://jd.com",
      "storage": {"id":123}
    }
  }
  ```

**结果示例**

```json
 {
    "script": "\nawait page.goto('https://www.baidu.com/');\n\n// Fill input[name=\"wd\"]\nawait dom.fill('input[name=\"wd\"]','2');\n\n// Click input[name=\"wd\"]\nawait dom.click('input[name=\"wd\"]');\n\n// Fill input[name=\"wd\"]\nawait dom.fill('input[name=\"wd\"]','2222');\n\n// Click text=百度一下\nawait dom.click('text=百度一下');",
    "storage": {}
}
```
## 执行

  说明: `运行脚本时调用,运行报告随请求返回`

  参数:
  
  | 名称        | 类型   |  默认值  | 说明  |
  | --------   | --------  | --------  |  -------- |
  | script     | string |   空     |  执行的脚本|
  | cookies    | [Cookie](https://dqa.jd.com/cherry/guide/data/cookie.html)[]    |  空     | 可接收cookie数组,用于初始化配置 |
  | storage    | any    |  空     | 自定义参数仓库    |
  | hosts       | Map    | 空      | host信息 `{"域名":"解析IP地址"}`|  


**数据格式:**
  ```json
  {
    "api": "live",
    "config": {
      "script":"page.to('https://baidu.com')",
      "storage": {"id":123}
    }
  }
  ```

**结果示例**

```json
{
    "duration": 9392.7518,
    "success": true,
    "msg": "",
    "divertor": [],
    "code": 2000,
    "storage": {
        "case_id": 12
    }
}
```


## ping

  **数据格式:**
  ```json
  {
    "api": "ping"
  }
  ```



## 退出

  **数据格式:**

  ```json
  {
    "api": "exit",
  }
  ```


  



