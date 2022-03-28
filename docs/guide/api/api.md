# API

## 概要

  cherry driver 启动后默认占用本机8777端口,对外提供http服务。


## 录制脚本
  路径: `liveScript`

  请求方式: `POST`

  说明: `录制脚本时调用,脚本随请求响应返回`

  参数:
  
  | 名称        | 类型   |  默认值  | 说明  |
  | --------   | --------  | --------  |  -------- |
  | script     | string |   空     |  录制时预加载脚本|
  | debug      | boolean| false   | 开启调试        |
  | clear      | boolean| false   | 清理登陆环境     |
  | storage    | any    |  空     | 自定义参数仓库    |
  | auxiliaryVerify| boolean|true| 启用辅助浏览器   |
  | showAuxiliary| boolean|false  | 展示辅助浏览器   |
  | cookies    | string   | 空      | 用于跳过身份认证的cookie,将自动写入到浏览器中 |
  | host       | Map    | 空      | host信息 `{"域名":"解析IP地址"}`|     
  
   请求示例:
```
  request
    .post(
      "http://localhost:8777/liveScript",
      {
        script: "await openBrowser('http://www.baidu.com')",
        debug: false,
        clear: false,
        storage: "123",
        auxiliaryVerify: true,
        showAuxiliary: false,
        cookies: cookies,
        host: {"nn2.com":"11.91.160.125"}  
      },
      {
        timeout: 99999999
      }
    )
```

响应结果
  | 名称        | 类型   |  默认值  | 说明  |
  | --------   | --------  | --------  |  -------- |
  | script     | string |   无     |  录制生成的脚本|

  响应示例:

```
  {
    "script": "await openBrowser('http://www.baidu.com')\nawait getDom('#kw'); await set(\"hello word\");\nawait getDom('#su'); await click()\n"
  }
```


## 执行

  路径: `runScript`

  请求方式: `POST`

  说明: `运行脚本时调用,运行结果随请求返回`

   参数:
  
  | 名称        | 类型   |  默认值  | 说明  |
  | --------   | --------  | --------  |  -------- |
  | script     | string |   空     |  执行的脚本|
  | debug  |  boolean    |   false   | 开启调试 |
  | clear      | boolean| false   | 清理登陆环境     |
  | storage    | any    |  空     | 自定义参数仓库    |
  | traceless  | boolean |   ture     |  无痕运行|
  | autoExit  |  boolean    |   true   | 运行完毕自动退出 |
  | resultHint | boolean |  true   | 运行结果提示| 
  | needLog | boolean |  false   | 是否返回日志信息|
  | cookies  |  string    |   空   | 用于跳过身份认证的cookie,将自动写入到浏览器中 |
  | host       | Map    | 空      | host信息 `{"域名":"解析IP地址"}`|  

  remoteReport 类型:object:
  | 名称        | 类型      |   默认值   |   说明     |
  | --------   | --------  | --------  |  -------- |
  | result     | string   |   空      | 远程上传结果地址 |
  | log        | string   |    空     | 远程上传日志地址 |
  | image      | string   |    空     | 远程上传图片地址 |

  请求示例:
```
  request
    .post(
      "http://localhost:8777/runScript",
      {
        debug: false,
        clear: false,
        storage: "123",
        traceless: true,
        script: `await openBrowser("http://www.baidu.com")`
        autoExit: true,
        resultHint: true,
        needLog: true,
        cookies: cookies,
        host: {"nn2.com":"11.91.160.125"},
        remoteReport:{
          result: "ip/result",
          log: "ip/log",
          image: "ip/img"
        }
      },
      {
        timeout: 99999999
      }
    )
```

响应结果

  | 名称        | 类型   |  默认值  | 说明  |
  | --------   | --------  | --------  |  -------- |
  | success     | boolean |   false     |  执行结果|
  | duration     | number |   无     |  执行持续时间 单位/ms|
  | start_time     | boolean |   false     |  开始执行的时间 单位/ms|
  | msg     | string |   无     |  结果提示消息 |
  | divertor     | Divertor |   空     |  断言信息 |
  | log     | string |   空     |  日志信息 |

  Divertor

  | 名称        | 类型   |  默认值  | 说明  |
  | --------   | --------  | --------  |  -------- |
  | msg     | string |   空     |  错误描述|
  | code     | string |   空     |  相关代码|
  | success     | boolean |   false     |  是否成功|


  响应示例:

```
 {
	"success": true,
	"duration": 3488,
	"start_time": 1615550400079,
	"msg": "执行成功",
	"divertor": [],
    "log": "",
}
```


## ping

路径: `ping`

请求方式: `GET`

说明: `可用于检测driver是否运行`

请求示例:
```
  request.get("http://localhost:8777/ping")
```

响应示例:
```
{
  ok:1
}
```


## 退出

路径: `exit`

请求方式: `GET`

说明: `调用后关闭cherry driver`

请求示例:
```
  request.get("http://localhost:8777/exit")
```

响应示例:
```
{
  ok:1
}
```