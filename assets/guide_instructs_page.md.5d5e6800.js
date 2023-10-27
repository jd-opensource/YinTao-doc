import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.edbfdbf1.js";const h=JSON.parse('{"title":"page","description":"","frontmatter":{},"headers":[],"relativePath":"guide/instructs/page.md","filePath":"guide/instructs/page.md","lastUpdated":1698380891000}'),o={name:"guide/instructs/page.md"},l=p(`<h1 id="page" tabindex="-1">page <a class="header-anchor" href="#page" aria-label="Permalink to &quot;page&quot;">​</a></h1><p>页面类，包含对页面的操作、比如进入、刷新、返回、设置页面模拟等。</p><h2 id="page-setviewsize-width-height" tabindex="-1">page.setViewSize(width,height) <a class="header-anchor" href="#page-setviewsize-width-height" aria-label="Permalink to &quot;page.setViewSize(width,height)&quot;">​</a></h2><p>设置页面视图宽高，可用于在运行时动态修改。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">setViewSize</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">400</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 设置页面视图大小为宽200高400</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">setViewSize</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">400</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 设置页面视图大小为宽200高400</span></span></code></pre></div><h2 id="page-setdevice-name-string" tabindex="-1">page.setDevice(name:string) <a class="header-anchor" href="#page-setdevice-name-string" aria-label="Permalink to &quot;page.setDevice(name:string)&quot;">​</a></h2><p>设置页面设备模拟, 注意需要在页面创建前设置，否则只在之后创建的页面生效.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">setDevice</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;iPhone 11&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 模拟iPhone 11 访问</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">setDevice</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;iPhone 11&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 模拟iPhone 11 访问</span></span></code></pre></div><h2 id="page-create-url-string" tabindex="-1">page.create(url:string) <a class="header-anchor" href="#page-create-url-string" aria-label="Permalink to &quot;page.create(url:string)&quot;">​</a></h2><p>创建新页面打开网页, 传入标准的<code>url</code>格式</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://www.baidu.com&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 打开百度页面</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://www.baidu.com&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 打开百度页面</span></span></code></pre></div><h2 id="page-waitpopup" tabindex="-1">page.waitPopup() <a class="header-anchor" href="#page-waitpopup" aria-label="Permalink to &quot;page.waitPopup()&quot;">​</a></h2><p>将页面上下文切换至弹出的新窗口中</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> dom.</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#pageOpen&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 该点击操作将启动新窗口</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">waitPopup</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 将上下文切换至最近打开的窗口中</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 后续操作将在新窗口中进行</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> dom.</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#id&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;123&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> dom.</span><span style="color:#6F42C1;">click</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;#pageOpen&quot;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 该点击操作将启动新窗口</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">waitPopup</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 将上下文切换至最近打开的窗口中</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 后续操作将在新窗口中进行</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> dom.</span><span style="color:#6F42C1;">fill</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;#id&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;123&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="page-waitforevent-event-string" tabindex="-1">page.waitForEvent(event:string) <a class="header-anchor" href="#page-waitforevent-event-string" aria-label="Permalink to &quot;page.waitForEvent(event:string)&quot;">​</a></h2><p>等待页面事件，用于更新页面上下文内容，默认事件为<code>framenavigated</code>页面重定向 更多event事件:</p><ul><li>&#39;close&#39;: 页面被关闭时触发。</li><li>&#39;console&#39;: 当页面中有新的 console.log, console.debug, console.info, console.warn, 或 console.error 时触发。</li><li>&#39;crash&#39;: 当浏览器崩溃时触发。</li><li>&#39;dialog&#39;: 当页面弹出对话框时触发。</li><li>&#39;domcontentloaded&#39;: 当页面的 DOMContentLoaded 事件被触发时触发。即当初始 HTML 文档完全加载和解析完成后触发。</li><li>&#39;download&#39;: 当页面开始下载文件时触发。</li><li>&#39;filechooser&#39;: 当页面需要选择文件时触发。</li><li>&#39;frameattached&#39;: 当页面附加子帧时触发。</li><li>&#39;framedetached&#39;: 当页面卸载子帧时触发。</li><li>&#39;framenavigated&#39;: 当一个帧被导航到一个新的url时发出。</li><li>&#39;load&#39;: 当页面的 load 事件被触发时触发。即当所有资源（如图像和样式表）都已加载完成时触发。</li><li>&#39;navigation&#39;: 当页面控制权转移到另一个页面时触发。这通常意味着页面正在导航到新的 URL。</li><li>&#39;request&#39;: 当页面发出网络请求时触发。</li><li>&#39;response&#39;: 当页面接收到网络响应时触发。</li><li>&#39;route&#39;: 当页面接收到网络请求时触发。此事件允许您拦截和修改请求的内容。</li><li>&#39;websocket&#39;: 当页面连接到 WebSocket 时触发。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 登陆后页面会重建因此需要进行上下文转换</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">([dom.</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;text=登 录&quot;</span><span style="color:#E1E4E8;">),page.</span><span style="color:#B392F0;">waitForEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;framenavigated&#39;</span><span style="color:#E1E4E8;">)])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 登陆后页面会重建因此需要进行上下文转换</span></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">([dom.</span><span style="color:#6F42C1;">click</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;text=登 录&quot;</span><span style="color:#24292E;">),page.</span><span style="color:#6F42C1;">waitForEvent</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;framenavigated&#39;</span><span style="color:#24292E;">)])</span></span></code></pre></div><h2 id="page-waitforresponse" tabindex="-1">page.waitForResponse <a class="header-anchor" href="#page-waitforresponse" aria-label="Permalink to &quot;page.waitForResponse&quot;">​</a></h2><p>等待页面的接口响应 <strong>提示:</strong>: 这里使用Promise.all 是为了让两个操作同时进行，wait Response 基于事件监听,你不能等待监听而不去触发请求，这意味着什么都不会发生。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">res</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  page.</span><span style="color:#B392F0;">waitForResponse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">url</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/ajax/websiteProfile/online.json&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">status</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Triggers the response</span></span>
<span class="line"><span style="color:#E1E4E8;">  page.</span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`http://t.268xue.com/\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;response&#39;</span><span style="color:#E1E4E8;">,res.</span><span style="color:#B392F0;">url</span><span style="color:#E1E4E8;">())</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">res</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  page.</span><span style="color:#6F42C1;">waitForResponse</span><span style="color:#24292E;">(</span><span style="color:#E36209;">response</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> response.</span><span style="color:#6F42C1;">url</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/ajax/websiteProfile/online.json&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> response.</span><span style="color:#6F42C1;">status</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Triggers the response</span></span>
<span class="line"><span style="color:#24292E;">  page.</span><span style="color:#6F42C1;">to</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`http://t.268xue.com/\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;response&#39;</span><span style="color:#24292E;">,res.</span><span style="color:#6F42C1;">url</span><span style="color:#24292E;">())</span></span></code></pre></div><h2 id="page-setbrowsercofing-options" tabindex="-1">page.setBrowserCofing(options) <a class="header-anchor" href="#page-setbrowsercofing-options" aria-label="Permalink to &quot;page.setBrowserCofing(options)&quot;">​</a></h2><p>设置浏览器配置信息。</p><p>!！！ 注意-必须在第一访问页面前进行，或设置后使用page.create进行新环境搭建，否则配置不会生效</p><p>全量配置参考:newContext( <a href="https://playwright.dev/docs/api/class-browser#browser-new-context" target="_blank" rel="noreferrer">options</a>)</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">setBrowserCofing</span><span style="color:#E1E4E8;">({userAgent:</span><span style="color:#9ECBFF;">&quot;Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1&quot;</span><span style="color:#E1E4E8;">}) </span><span style="color:#6A737D;">// 自定义浏览器userAgent</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置允许获取定位权限，设置经纬度</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">setBrowserCofing</span><span style="color:#E1E4E8;">({permissions:[</span><span style="color:#9ECBFF;">&#39;geolocation&#39;</span><span style="color:#E1E4E8;">], geolocation: { longitude: </span><span style="color:#79B8FF;">12.4924</span><span style="color:#E1E4E8;">, latitude: </span><span style="color:#79B8FF;">41.8902</span><span style="color:#E1E4E8;"> }})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">setBrowserCofing</span><span style="color:#24292E;">({userAgent:</span><span style="color:#032F62;">&quot;Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1&quot;</span><span style="color:#24292E;">}) </span><span style="color:#6A737D;">// 自定义浏览器userAgent</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置允许获取定位权限，设置经纬度</span></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">setBrowserCofing</span><span style="color:#24292E;">({permissions:[</span><span style="color:#032F62;">&#39;geolocation&#39;</span><span style="color:#24292E;">], geolocation: { longitude: </span><span style="color:#005CC5;">12.4924</span><span style="color:#24292E;">, latitude: </span><span style="color:#005CC5;">41.8902</span><span style="color:#24292E;"> }})</span></span></code></pre></div><h2 id="page-to-url-options" tabindex="-1">page.to(url[, options]) <a class="header-anchor" href="#page-to-url-options" aria-label="Permalink to &quot;page.to(url[, options])&quot;">​</a></h2><p>切换当前页面的url,支持传入标准的<code>url</code>格式。</p><p>options:</p><ul><li><p>referer <code>string</code>: Referer header value.</p></li><li><p>timeout: <code>number</code> Maximum operation time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout.</p></li><li><p>waitUntil: <code>&quot;load&quot;|&quot;domcontentloaded&quot;|&quot;networkidle&quot;|&quot;commit&quot;</code> When to consider operation succeeded, defaults to load. Events can be either:#</p><ul><li><p>&#39;domcontentloaded&#39; - consider operation to be finished when the DOMContentLoaded event is fired.</p></li><li><p>&#39;load&#39; - consider operation to be finished when the load event is fired.</p></li><li><p>&#39;networkidle&#39; - consider operation to be finished when there are no network connections for at least 500 ms.</p></li><li><p>&#39;commit&#39; - consider operation to be finished when network response is received and the document started loading.</p></li></ul></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://www.baidu.com&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// commit 事件触发时,则判定页面加载完成。 -用于快速执行命令,一些网站主程序加载快，但依赖缓慢可用此参数加速测试。</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://www.baidu.com&#39;</span><span style="color:#E1E4E8;">,{waitUntil:</span><span style="color:#9ECBFF;">&#39;commit&#39;</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 增加页面访问超时时间，默认10s， 当前设置30s</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://www.baidu.com&#39;</span><span style="color:#E1E4E8;">,{timeout: </span><span style="color:#79B8FF;">30000</span><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">to</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://www.baidu.com&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// commit 事件触发时,则判定页面加载完成。 -用于快速执行命令,一些网站主程序加载快，但依赖缓慢可用此参数加速测试。</span></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">to</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://www.baidu.com&#39;</span><span style="color:#24292E;">,{waitUntil:</span><span style="color:#032F62;">&#39;commit&#39;</span><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 增加页面访问超时时间，默认10s， 当前设置30s</span></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">to</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://www.baidu.com&#39;</span><span style="color:#24292E;">,{timeout: </span><span style="color:#005CC5;">30000</span><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="page-hastext-text-string-options-timeout-number-bool" tabindex="-1">page.hasText(text:string,options:{timeout: number }) : bool <a class="header-anchor" href="#page-hastext-text-string-options-timeout-number-bool" aria-label="Permalink to &quot;page.hasText(text:string,options:{timeout: number }) : bool&quot;">​</a></h2><ul><li>v1.1.7+</li></ul><p>查找当前页面是否包含text元素，结果返回布尔值。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://www.baidu.com&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">hasText</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;百度一下&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">to</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://www.baidu.com&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">hasText</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;百度一下&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="page-geturl" tabindex="-1">page.getURL() <a class="header-anchor" href="#page-geturl" aria-label="Permalink to &quot;page.getURL()&quot;">​</a></h2><p>获取当前页面的地址。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">getURL</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">getURL</span><span style="color:#24292E;">()</span></span></code></pre></div><h2 id="page-back" tabindex="-1">page.back() <a class="header-anchor" href="#page-back" aria-label="Permalink to &quot;page.back()&quot;">​</a></h2><p>回退当前页面。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">back</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">back</span><span style="color:#24292E;">()</span></span></code></pre></div><h2 id="page-forward" tabindex="-1">page.forward() <a class="header-anchor" href="#page-forward" aria-label="Permalink to &quot;page.forward()&quot;">​</a></h2><p>前进当前页面。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">forward</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">forward</span><span style="color:#24292E;">()</span></span></code></pre></div><h2 id="page-refresh" tabindex="-1">page.refresh() <a class="header-anchor" href="#page-refresh" aria-label="Permalink to &quot;page.refresh()&quot;">​</a></h2><p>刷新当前页面。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">refresh</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">refresh</span><span style="color:#24292E;">()</span></span></code></pre></div><h2 id="page-change-index-url" tabindex="-1">page.change(index | url) <a class="header-anchor" href="#page-change-index-url" aria-label="Permalink to &quot;page.change(index | url)&quot;">​</a></h2><p>切换当前控制的页面, 1表示第一个。除了索引切换外还支持url模糊切换。 注: 如果先前页面在iframe内，切换页面后会自动退出iframe。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">change</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">change</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;baidu.com&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 切换至url 包含baidu.com</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">change</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/seach&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 切换至url 包含seach</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">change</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">change</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;baidu.com&quot;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 切换至url 包含baidu.com</span></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">change</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/seach&quot;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 切换至url 包含seach</span></span></code></pre></div><h2 id="page-changeiframe-index" tabindex="-1">page.changeIframe(index) <a class="header-anchor" href="#page-changeiframe-index" aria-label="Permalink to &quot;page.changeIframe(index)&quot;">​</a></h2><p>切换当前控制的iframe, 0表示当前页面内第一个iframe, -1 表示退出iframe, 默认不会进入iframe内。 也支持通过传递iframe-url片段切换到指定iframe中，更加方便。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">changeIframe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 根据 frame url进行切换</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">changeIframe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/login&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 退出iframe回到基础页面</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">changeIframe</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">changeIframe</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 根据 frame url进行切换</span></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">changeIframe</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/login&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 退出iframe回到基础页面</span></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">changeIframe</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="page-screenshot-filepath-options" tabindex="-1">page.screenshot(filePath,options) <a class="header-anchor" href="#page-screenshot-filepath-options" aria-label="Permalink to &quot;page.screenshot(filePath,options)&quot;">​</a></h2><p>屏幕截图, filePath表示截图存放路径。 必须指明详细的文件地址，而非目录地址。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">screenshot</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/src/screenshot/nihao.jpg&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 截图存取至该路径下</span></span>
<span class="line"><span style="color:#6A737D;">// 兼容多平台运行时需要提供全平台可用路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">os</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;os&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">imgPath</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(os.</span><span style="color:#B392F0;">tmpdir</span><span style="color:#E1E4E8;">(),</span><span style="color:#9ECBFF;">&#39;nihao.jpg&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 获取跨平台的临时目录</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">screenshot</span><span style="color:#E1E4E8;">(imgPath)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">screenshot</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/src/screenshot/nihao.jpg&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 截图存取至该路径下</span></span>
<span class="line"><span style="color:#6A737D;">// 兼容多平台运行时需要提供全平台可用路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">os</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;os&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">imgPath</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(os.</span><span style="color:#6F42C1;">tmpdir</span><span style="color:#24292E;">(),</span><span style="color:#032F62;">&#39;nihao.jpg&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 获取跨平台的临时目录</span></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> page.</span><span style="color:#6F42C1;">screenshot</span><span style="color:#24292E;">(imgPath)</span></span></code></pre></div>`,56),e=[l];function t(c,r,i,y,E,d){return a(),n("div",null,e)}const u=s(o,[["render",t]]);export{h as __pageData,u as default};
