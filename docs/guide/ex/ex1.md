# 实现原理
## 录制原理
  - 通过webview加载目标页面，向目标页面注入js，获取控制权。
  - 通过js监听用户的行为及操作，将监听的行为转换为匹配的语法。
  - 将录制生成的语法进行存储生成脚本文件。
## 脚本执行原理
  - 读取传输的脚本文件。
  - 新建一个浏览器进程并通过js解析语法转为指令，将指令分层级通过进行ipc进行传输，层级按照 浏览器>页面> iframe。
  - 具体页面拿到响应的指令，再将指令转换为具体的js脚本执行，并记录执行数据。
  - 运行完成后，将执行数据结果返回。
