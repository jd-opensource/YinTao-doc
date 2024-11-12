# 常见问题


## 页面访问https出现 您的连接不是私密连接

```js
// 脚本首行配置忽略https
await page.setBrowserCofing({ignoreHTTPSErrors:true})
// ....其他代码
```

## 获取playwright原生控件

获取pw原生控件可以加强对页面操作的定制化， `yintao` 通过对pw进行封装来自动完成调度。

结构如下,可通过`page.control` 来获取 `TestControl` 对象. [更多用法参考](https://playwright.dev/docs/api/class-browsercontext#browser-context-cookies)

```js
class TestControl {
  runContext: Page | Frame | undefined
  browserContext: BrowserContext | undefined
  currentPage: Page | undefined
  browser: Browser
  id: string
 }
```

```js

// export: 获取浏览器的cookeis信息
let cookies =  await page.control.browserContext.cookies();
```