# 常见问题


## 页面访问https出现 您的连接不是私密连接

```js
// 脚本首行配置忽略https
await page.setBrowserCofing({ignoreHTTPSErrors:true})
// ....其他代码
```
