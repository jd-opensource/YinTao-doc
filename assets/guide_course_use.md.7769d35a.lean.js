import{_ as n,o as e,c as o,a,Q as t,k as s}from"./chunks/framework.edbfdbf1.js";const l="/assets/postman_live.ff389554.png",p="/assets/postman_run.d885d64e.png",k=JSON.parse('{"title":"使用说明","description":"","frontmatter":{},"headers":[],"relativePath":"guide/course/use.md","filePath":"guide/course/use.md","lastUpdated":1698380891000}'),c={name:"guide/course/use.md"},r=t("",7),i=s("p",{style:{"text-align":"center"}},[s("img",{src:p})],-1),d=s("p",null,"使用过程中如果你有任何的意见或者问题，欢迎反馈。",-1);function u(E,h,m,y,_,g){return e(),o("div",null,[r,a(' - 点击上图的Send按钮，打开chrome浏览器后，即可进行脚本的录制工作。 - 录制完成后，生成的脚步代码在Response的Body内，见上图。 ### 执行脚本 - 打开postman，创建post请求，地址栏输入：`http://localhost:8777/run` - Body选择raw，格式选择JSON，内容输入如下 ```js { "script": "await page.create(`http://www.baidu.com`)\\nawait page.change(0)\\nawait dom.click(`#kw`)\\nawait dom.set(`京东`,`#kw`)\\nawait keyboard.press(`Enter`)\\nawait dom.click(`(//*[string()=\'京东JD.COM官网 多快好省 只为品质生活\'])[1]`)\\nawait page.change(1)\\n", "storage": "123", } ``` - postman完整回放脚本截图如下 '),i,a(" - 点击上图的Send按钮，自动打开浏览器回放脚本。 "),d])}const w=n(c,[["render",u]]);export{k as __pageData,w as default};
