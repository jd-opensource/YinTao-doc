---
version: 2.0.1
editLink: true
---

# 下载

## 介绍

`cherry` 提供安装包，双击即可完整一键下载。
## 下载地址

 <a style="display: inline-block; font-size: 1rem; color: rgb(255, 255, 255); background-color: rgb(62, 175, 124); padding: 0.4rem 1.2rem; border-radius: 4px; transition: background-color 0.1s ease 0s;:box-sizing: border-box; border-bottom: 1px solid rgb(56, 157, 112);" :href="'https://storage.jd.com/assert/cherry-' + $frontmatter.version + '.dmg'">cherry-{{$frontmatter.version}} MAC下载</a>

 <a style="margin-top:0.2rem;display: inline-block; font-size: 1rem; color: rgb(255, 255, 255); background-color: rgb(62, 175, 124); padding: 0.4rem 1.2rem; border-radius: 4px; transition: background-color 0.1s ease 0s; box-sizing: border-box; border-bottom: 1px solid rgb(56, 157, 112);" :href='"https://storage.jd.com/assert/cherrySetup-" + $frontmatter.version + ".exe"'>cherry-{{$frontmatter.version}} WINDOW下载</a>

 [历史版本下载](./history)

## 更新公告

`v2.0.1`版本更新:
1. 修复pago.to未重制执行上下文问题
2. page.screenshot 命令调整当输入未文件名称时(例:"nihao.jpg")，自动存放至临时目录中，以保障跨终端兼容。


`v2.0.0`版本更新(重大更新):
1. 底层架构重大重组(不影响历史脚本执行)

`v1.1.7`版本更新:

1. 新增page.hasText指令，用于快速检测页面文本的内容
2. 调整page.setBrowserCofing 优先级为顺序优先级，更易理解。
3. 优化dom.exist 已支持timeout
4. 修复程序在winodws中，长脚本导致无法执行的问题。
5. 增加dragTo 指令,方便实现拖拽

`v1.1.6`版本更新:
1. 修复实时日志标识问题，回复实时日志展示功能。

`v1.1.5`版本更新:

1. 增加追踪功能..
2. 增加元素截图`dom.screenshot`指令，优化`page.screenshot` 实现方式
3. 添加env环境变量读取, 通过`env`变量使用
4. 增加ai错误堆栈指导，协助定位问题。
5. 历史部分bug修复..
