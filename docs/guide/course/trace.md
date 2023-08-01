# 问题追踪

在`YinTao: version-1.1.5`版本开始，引擎内提供了执行问题追踪功能。使用追踪功能可以大幅提高远程执行问题调试的时间，可帮助您在脚本运行后探索执行的记录。
并提供本地或在线预览的能力。


## 使用跟踪

使用跟踪的方法为，在调用执行接口时，向执行参数`remoteReport`中追加 `trace` 地址
`trace`可以传递 `url`，或本地路径(非本地执行只能传递`http`地址)


## 本地追踪
例:
```js
{
   "remoteReport": {
        "trace": "/Users/zhouyuan11/work/test/trace.zip"  // 本地路径需要以zip结尾
    },
    "script": "await page.to('https://www.baidu.com/');await sleep(1000);//点击我的权益;\nawait dom.click('text=2002元');await sleep(2000);"
}

```

当执行完成后, 会在对应的位置生成追踪信息`zip`文件。


## 远程追踪
例:
```js
{
   "remoteReport": {
        "trace": "http://127.0.0.1:8910/trace"  // 本地路径需要以zip结尾
    },
    "script": "await page.to('https://www.baidu.com/');await sleep(1000);//点击我的权益;\nawait dom.click('text=2002元');await sleep(2000);"
}

```

当采用远程追踪时，在脚本执行结束后, `YinTao`会向目标地址传递追踪信息`zip`文件。

上传方式为:
```js

/**
 * @method 上报运行跟踪内容
 */
export async function reportTrace(url:string, filePath:string, storage?:any) {
  const FormData = require('form-data')
  const param = new FormData()
  param.append("trace",   fs.createReadStream(filePath))
  param.append('storage', JSON.stringify(storage))
  param.append('headers', JSON.stringify({
    'Content-Type': 'application/json',
  }))
  await axios.post(url, param, { headers: param.getHeaders(), timeout: 1000 * 60 * 3 }) // 追踪超时设置为3分钟
}
```

远程服务需要接收`zip`文件，以放置在`oss`资源路径中。


## 查看追踪信息

预览追踪可以通过[trace.dev](https://trace.playwright.dev/)进行,
如果是本地文件，可以通过选择文件的信息打开对应`追踪.zip`文件进行浏览


远程文件也可通过传递给`trace` 进行预览
```js
https://trace.playwright.dev/?trace=http_url // 的方式进行

// 例如:
https://trace.playwright.dev/?trace=https://storage.jd.com/assert/nihao2.zip
```
[点击此处在线查看跟踪效果](https://trace.playwright.dev/?trace=https://storage.jd.com/assert/nihao2.zip)

## 相关文档及资料参考

[playwright-trace](https://playwright.dev/docs/trace-viewer),
[chromium-trace](https://www.chromium.org/developers/how-tos/trace-event-profiling-tool/recording-tracing-runs/)