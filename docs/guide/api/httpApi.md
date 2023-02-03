## 概要

  `cherry` 启动后默认占用本机`8777`端口,对外提供`http`服务。


## 录制脚本
  路径: `/live`

  请求方式: `POST`

  说明: `录制脚本时调用,脚本随请求响应返回`

  参数:
  
  | 名称        | 类型   |  默认值  | 说明  |
  | --------   | --------  | --------  |  -------- |
  | url      | string| 空   |  录制时默认打开的地址   |
  | compatibility      | bool| 空   |  兼容模式,默认采用cherry浏览器,开启后将使用Chromium  |
  | storage    | any    |  空     | 自定义参数仓库    |
   | cookies    | [Cookie](https://dqa.jd.com/cherry/guide/data/cookie.html)[]    |  空     | 可接收cookie数组,用于初始化配置 |
  | device    | string    |  空     | 模拟移动设备录制, 支持的字段参考[setDevice](https://coding.jd.com/cherry/core/blob/master/src/server/deviceDescriptorsSource.json) |
  | hosts       | Map    | 空      | host信息 `{"域名":"解析IP地址"}`|     
  
   请求示例:
``` js
  request
    .post(
      "http://localhost:8777/live",
      {
        "url": "https://baidu.com",
        "storage": {
          "id":123
        },
        "hosts": {"nn2.com":"11.91.160.125"}  
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
  | code     | number |   无       |  错误代码|
  | msg     | string |   无        |  描述信息|


  响应示例:

```
  {
    "script": "await page.to('https://www.baidu.com')\nawait getDom('#kw'); await set(\"hello word\");\nawait getDom('#su'); await click()\n",
    "code"  : 2000
    "msg"   : "success!"
  }
```


## 执行

  路径: `/run`

  请求方式: `POST`

  说明: `运行脚本时调用,运行报告随请求返回, 当填写remoteReport时，会立即返回空,执行结果会通过异步返回`

   参数:
  
  | 名称        | 类型   |  默认值  | 说明  |
  | --------   | --------  | --------  |  -------- |
  | script     | string |   空     |  执行的脚本|
  | storage    | any    |  空     | 自定义参数仓库    |
  | hosts       | Map    | 空      | host信息 `{"域名":"解析IP地址"}`|  
  | cookies    | [Cookie](https://dqa.jd.com/cherry/guide/data/cookie.html)[]    |  空     | 可接收cookie数组,用于初始化配置 |
  | remoteReport | object    | 空      | 远程执行需要上报的地址|  

  remoteReport 类型:object:
  | 名称        | 类型      |   默认值   |   说明     |
  | --------   | --------  | --------  |  -------- |
  | result     | string   |   空      | 远程上传结果地址 |
  | log        | string   |    空     | 远程上传日志地址 |
  | image      | string   |    空     | 远程上传图片地址 |
  | trace      | string   |    空     | 远程上传追踪地址,支持本地路径以及http地址 |

  请求示例:
``` js
  request
    .post(
      "http://localhost:8777/run",
      {
        "storage": {
          "id":123
        },
        "script": `await page.to("https://www.baidu.com")`,
        "hosts": {"nn2.com":"11.91.160.125"}
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
``` js
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

路径: `/ping`

请求方式: `GET`

说明: `可用于检测driver是否运行`

请求示例: 
``` js
  request.get("http://localhost:8777/ping")
```

响应示例:
``` js
{
  "ok":1
}
```


## 退出

路径: `/exit`

请求方式: `GET`

说明: `调用后关闭cherry`

请求示例:
``` js
  request.get("http://localhost:8777/exit")
```

响应示例:
``` js
{
  "ok":1
}
```