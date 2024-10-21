# 通用指令
常用的轻量指令

## execJavaScript(script)
  执行指定`JavaScript`脚本, 这里执行脚本将在页面环境内执行，并且锁定在当前操作的页面对象中或`iframe`中。
  ``` js
  await execJavaScript(`alert('hello ,word !')`)

  // 传递函数
  await execJavaScript(() => {
      console.log("page 123")
  });
  
  ```
  

## sleep(ms)
  休眠, 控制程序停止一段时间。 脚本最后增加的sleep无效，sleep后面必须跟随其他指令。
  ``` js
  await sleep(3000) // 等待3s
  ```

## hint(text,type)
  用于页面中展示重要的提示信息。type可选'success','info','warning','error'。
  ``` js
  await hint('成功提示的文案','success') 
  ```

## errorSend(msg)
  发送自定义错误,  可以在不影响任务执行的情况下，将错误记录，并修改当前执行结果为失败。

  ```js

  errorSend("失败了，原因为未找到登陆框")

  // 通常配合try catch使用, 可以在不中断后续命令执行的情况下，记录错误
  try{
    await dom.click("#id")
  }catch(e){
    errorSend("错误未找到点击id")
  }
  console.log("继续往下执行")
  ```
