import{_ as s,v as a,b as n,R as l}from"./chunks/framework.0e36afc9.js";const i=JSON.parse('{"title":"常规操作流程示例","description":"","frontmatter":{},"headers":[],"relativePath":"guide/exam/baseOpt.md","filePath":"guide/exam/baseOpt.md","lastUpdated":1690872800000}'),o={name:"guide/exam/baseOpt.md"},p=l(`<h1 id="常规操作流程示例" tabindex="-1">常规操作流程示例 <a class="header-anchor" href="#常规操作流程示例" aria-label="Permalink to &quot;常规操作流程示例&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> homePage </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://4399.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 定义变量</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> page</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(homePage) </span><span style="color:#676E95;font-style:italic;">// 使用变量打开页面</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sleep</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 固定等待</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> page</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">to</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">https://baidu.com</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 切换页面</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> assert</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">custom</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#su</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inputValue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">百度一下</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 页面元素断言</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> assert</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">location</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.baidu.com/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 页面地址断言</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> assert</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">title</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">百度一下，你就知道</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 页面title 断言</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 执行hover</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> dom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hover</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">#s-top-left &gt; div &gt; a</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// hover 元素</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> dom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">click</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">#kw</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 元素点击</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> dom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exist</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">#kw</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 根据元素是否存在，接入逻辑分支</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">元素#kw存在</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">元素不存在</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">因为元素未找到,主动结束执行!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 主动抛出错误</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> roundNum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">round</span><span style="color:#A6ACCD;">(Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">*</span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 随机获取1-1000 之间的数</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">名称</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">  roundNum </span><span style="color:#676E95;font-style:italic;">// 字符串组合</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> dom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">#kw</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">name) </span><span style="color:#676E95;font-style:italic;">// input 输入文本</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sleep</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> dom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">click</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">#su</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> page</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">screenshot</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test-1.jpg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 屏幕截图</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sleep</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 测试上传</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> page</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">to</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">https://element.eleme.cn/#/zh-CN/component/upload</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">waitUntil</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">commit</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 页面跳转</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 截图上传</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> dom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">upload</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">#app &gt; div.main-cnt &gt; div &gt; div.el-scrollbar__wrap &gt; div &gt; div &gt; div.page-component__content &gt; section &gt; div:nth-child(4) &gt; div.source &gt; div &gt; div &gt; div.el-upload.el-upload--text &gt; input</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">C:</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">Users</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">zhouyuan11</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">AppData</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">Local</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">Programs</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">cherry_driver</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">cherry_tray@2x.png</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sleep</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,2),t=[p];function e(c,r,y,D,F,A){return a(),n("div",null,t)}const u=s(o,[["render",e]]);export{i as __pageData,u as default};
