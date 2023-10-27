# cookies
  适用于用户身份认证，以及验证码跳过。

## cookies.setAll(url, value)
  对指定页面批量设置cookie

  | 名称        | 类型   |  默认值  | 说明  |
  | --------   | --------  | --------  |  -------- |
  | url        | string |  空     |必填，要设置cookie的url|
  | value       | string |  空     |必填，string类型的cookie值|


  示例:
  ```js
  await cookies.setAll("https://www.baidu.com/","jZ0bGJpeXR3")
  ```

## cookies.set(cookies)
  通过浏览器cookie标准，设置完整的cookie信息。

  * cookies : details[]

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
  await cookies.set([{
    "domain": ".jd.com",
    "name": "sso.jd.com",
    "path": "/",
    "value": "jZ0bGJpeXR3Z1FCeWRPclJ1LTRtOUI2YWR6fkpXfmxKSDU1Sk5LS3htS3dDS3RoRUFBQUFBJ",
  }])
  ```

## cookies.clear 
  清空浏览器cookie

```js
await cookies.clear()
```
