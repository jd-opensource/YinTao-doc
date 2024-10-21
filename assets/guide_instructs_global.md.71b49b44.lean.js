import{_ as a,o as n,c as l,O as p}from"./chunks/framework.58a9e095.js";const d=JSON.parse('{"title":"通用指令","description":"","frontmatter":{},"headers":[],"relativePath":"guide/instructs/global.md","filePath":"guide/instructs/global.md","lastUpdated":1729501740000}'),o={name:"guide/instructs/global.md"};function e(t,s,c,r,i,y){return n(),l("div",null,s[0]||(s[0]=[p(`<h1 id="通用指令" tabindex="-1">通用指令 <a class="header-anchor" href="#通用指令" aria-label="Permalink to &quot;通用指令&quot;">​</a></h1><p>常用的轻量指令</p><h2 id="execjavascript-script" tabindex="-1">execJavaScript(script) <a class="header-anchor" href="#execjavascript-script" aria-label="Permalink to &quot;execJavaScript(script)&quot;">​</a></h2><p>执行指定<code>JavaScript</code>脚本, 这里执行脚本将在页面环境内执行，并且锁定在当前操作的页面对象中或<code>iframe</code>中。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">execJavaScript</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`alert(&#39;hello ,word !&#39;)\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 传递函数</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">execJavaScript</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;page 123&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">execJavaScript</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`alert(&#39;hello ,word !&#39;)\`</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 传递函数</span></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">execJavaScript</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;page 123&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h2 id="sleep-ms" tabindex="-1">sleep(ms) <a class="header-anchor" href="#sleep-ms" aria-label="Permalink to &quot;sleep(ms)&quot;">​</a></h2><p>休眠, 控制程序停止一段时间。 脚本最后增加的sleep无效，sleep后面必须跟随其他指令。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sleep</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 等待3s</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sleep</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 等待3s</span></span></code></pre></div><h2 id="hint-text-type" tabindex="-1">hint(text,type) <a class="header-anchor" href="#hint-text-type" aria-label="Permalink to &quot;hint(text,type)&quot;">​</a></h2><p>用于页面中展示重要的提示信息。type可选&#39;success&#39;,&#39;info&#39;,&#39;warning&#39;,&#39;error&#39;。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">hint</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;成功提示的文案&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;success&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">hint</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;成功提示的文案&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;success&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="errorsend-msg" tabindex="-1">errorSend(msg) <a class="header-anchor" href="#errorsend-msg" aria-label="Permalink to &quot;errorSend(msg)&quot;">​</a></h2><p>发送自定义错误, 可以在不影响任务执行的情况下，将错误记录，并修改当前执行结果为失败。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#B392F0;">errorSend</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;失败了，原因为未找到登陆框&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 通常配合try catch使用, 可以在不中断后续命令执行的情况下，记录错误</span></span>
<span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> dom.</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#id&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;">(e){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">errorSend</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;错误未找到点击id&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;继续往下执行&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6F42C1;">errorSend</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;失败了，原因为未找到登陆框&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 通常配合try catch使用, 可以在不中断后续命令执行的情况下，记录错误</span></span>
<span class="line"><span style="color:#D73A49;">try</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> dom.</span><span style="color:#6F42C1;">click</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;#id&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span><span style="color:#D73A49;">catch</span><span style="color:#24292E;">(e){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">errorSend</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;错误未找到点击id&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;继续往下执行&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div>`,14)]))}const h=a(o,[["render",e]]);export{d as __pageData,h as default};
