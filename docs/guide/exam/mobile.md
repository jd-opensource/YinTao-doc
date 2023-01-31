# 移动端H5页面测试


```js
// 使用移动版百度搜索京东
await page.setDevice('iPhone 11')
await page.to(`https://baidu.com`)
await dom.fill('label',"京东");
await dom.click('#index-bn');
await sleep(2000)

// 在模拟移动端点击时可能出现dom.click 点击无效情况，可使用dom.dispatchEvent代替点击
await dom.dispatchEvent('#index-bn','click')
```