
# browser

## browser.on(event:'request'| 'requestfaile' | 'requestfinished' | 'response',callback:Function)
监听浏览器事件
**注意:**:  监听事件是异步的且持续的,你不能期待再事件中抛出错误并中断执行。如果你需要同步使用[page.waitForResponse](https://dqa.jd.com/YinTao/guide/api/instruct.html#page.waitForResponse)

``` js
await browser.on('request',(res)=>{
    // 监听页面请求
    console.log('url',res._initializer.url)
})
```

## browser.route(url: string|RegExp,handler: ((route: Route, request: Request) => void), options?: {times?: number;})
修改浏览器接口内容
``` js
// 修改页面的png图片为自定义图片
await browser.route('**/*.{png}',(route)=>{
    console.log('route',route)
    route.continue({url:'http://storage.360buyimg.com/assert/icon.png'});
})
```
