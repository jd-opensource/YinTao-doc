# 接口数据测试

cherry 内置强大的接口模块，可以满足日常几乎所有的数据测试类型。


## 接口数据监听和修改

```js

await page.to('http://t.268xue.com/');
await browser.on('request',(res)=>{
    // 监听页面请求
    console.log('url',res._initializer.url)
})

// 修改png接口数
await browser.route('**/*.{png}',(route)=>{
    console.log('route',route)
    route.continue({url:'http://storage.360buyimg.com/assert/icon.png'});
})

await page.to('http://t.268xue.com/');

await sleep(30000)
```

### 测试中访问第三方接口
测试中可以很轻松的使用[axios](http://www.axios-js.com/zh-cn/docs/)完成相关接口操作
```js

await page.to('http://t.268xue.com/');
// 获取第三方接口数据
const apiData = await axios.get('http://cherry.jd.com/ping')
console.log('apiData',apiData.data) // 获取data数据

await sleep(2000)
```