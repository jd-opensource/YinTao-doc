# 网页接入
  
  cherry 引擎提供网页唤起执行功能，这一切的前提基于`URL Scheme` 协议。
  用户端必须安装cherry-driver 客户端(无需启动)。
  页面可以控制呼起，在启动后可以通过iframe嵌入的方式来于本地应用进行通讯。
  也可以通过通讯来检测引擎是否启动。
  

唤醒示例:

```html
 <a href="cherry://open">唤起</a>
```

   通讯示例:
``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <iframe src="http://localhost:8777/webApi" frameborder="0" id="webapi"></iframe>
</body>
</html>

<script>
  var iframe = document.getElementById('webapi')
  window.testSend = function(){
    console.log('父页面发送了',iframe)
    iframe.contentWindow.postMessage({
      instruct: 'live',
      debug: true,
      script:'await openBrowser("http://www.baidu.com")'
    },'*')
  }


  function receiveMessage(event)
  {
    console.log('收到了回复的消息',event)
  }
window.addEventListener("message", receiveMessage, false);
 
</script>
```