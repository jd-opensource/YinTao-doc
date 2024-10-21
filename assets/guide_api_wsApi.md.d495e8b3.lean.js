import{_ as a,o as n,c as o,O as p}from"./chunks/framework.58a9e095.js";const u=JSON.parse('{"title":"websockt服务","description":"","frontmatter":{},"headers":[],"relativePath":"guide/api/wsApi.md","filePath":"guide/api/wsApi.md","lastUpdated":1729501740000}'),l={name:"guide/api/wsApi.md"};function t(e,s,c,r,E,y){return n(),o("div",null,s[0]||(s[0]=[p(`<h1 id="websockt服务" tabindex="-1">websockt服务 <a class="header-anchor" href="#websockt服务" aria-label="Permalink to &quot;websockt服务&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p>YinTao 启动后默认占用本机<code>8888</code>端口,对外提供<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket" target="_blank" rel="noreferrer">websocket</a>服务。</p><p>它更适合在网页端使用避免触发<a href="https://wicg.github.io/cors-rfc1918" target="_blank" rel="noreferrer">CORS</a></p><h2 id="通用数据协议" tabindex="-1">通用数据协议 <a class="header-anchor" href="#通用数据协议" aria-label="Permalink to &quot;通用数据协议&quot;">​</a></h2><p>与<code>http</code>不同<code>Websocket</code>采用数据协议进行交互。</p><p>这意味着我们需要提供符合规范的数据才能被正确解析。</p><p><code>YinTao</code>内部采用<code>json</code>结构传递数据。</p><p>例:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;api&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;run&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;config&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;script&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;page.to(&#39;https://baidu.com&#39;)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;storage&quot;</span><span style="color:#E1E4E8;">: {</span><span style="color:#79B8FF;">&quot;id&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;api&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;run&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;config&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;script&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;page.to(&#39;https://baidu.com&#39;)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;storage&quot;</span><span style="color:#24292E;">: {</span><span style="color:#005CC5;">&quot;id&quot;</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">123</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>只需给<code>websocket</code>连接发送这些数据，就能打开运行百度页面。 内部实现中<code>http</code>以及<code>websocket</code>都通过<code>openApi</code>对外提供服务, 这意味着他们支持相同的配置格式。</p><h2 id="快速接入" tabindex="-1">快速接入 <a class="header-anchor" href="#快速接入" aria-label="Permalink to &quot;快速接入&quot;">​</a></h2><p>在大多数情况下，我们只需要以函数式的方式去使用， 因此YinTao提供对外便捷的函数式api文件封装。</p><p>文件内包含了详细的使用步骤，你只需要以工具类接入使用即可。 如果你需要实现更高级的功能实现，可以按照下列数据格式自行接入。</p><h2 id="执行" tabindex="-1">执行 <a class="header-anchor" href="#执行" aria-label="Permalink to &quot;执行&quot;">​</a></h2><p>说明: <code>运行脚本时调用,运行报告随请求返回</code></p><p>参数:</p><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>script</td><td>string</td><td>空</td><td>执行的脚本</td></tr><tr><td>cookies</td><td><a href="https://dqa.jd.com/YinTao/guide/data/cookie.html" target="_blank" rel="noreferrer">Cookie</a>[]</td><td>空</td><td>可接收cookie数组,用于初始化配置</td></tr><tr><td>storage</td><td>any</td><td>空</td><td>自定义参数仓库</td></tr><tr><td>hosts</td><td>Map</td><td>空</td><td>host信息 <code>{&quot;域名&quot;:&quot;解析IP地址&quot;}</code></td></tr></tbody></table><p><strong>数据格式:</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;api&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;live&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;config&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;script&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;page.to(&#39;https://baidu.com&#39;)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;storage&quot;</span><span style="color:#E1E4E8;">: {</span><span style="color:#79B8FF;">&quot;id&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;api&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;live&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;config&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;script&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;page.to(&#39;https://baidu.com&#39;)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;storage&quot;</span><span style="color:#24292E;">: {</span><span style="color:#005CC5;">&quot;id&quot;</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">123</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><strong>结果示例</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;duration&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">9392.7518</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;success&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;msg&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;divertor&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;storage&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;case_id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">12</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;duration&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">9392.7518</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;success&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;msg&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;divertor&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;storage&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;case_id&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">12</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="录制" tabindex="-1">录制 <a class="header-anchor" href="#录制" aria-label="Permalink to &quot;录制&quot;">​</a></h2><p>说明: <code>录制脚本时调用,录制结果请求响应返回</code></p><p>参数:</p><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>空</td><td>录制时默认打开的地址</td></tr><tr><td>storage</td><td>any</td><td>空</td><td>自定义参数仓库</td></tr></tbody></table><pre><code>| cookies    | [Cookie](https://dqa.jd.com/YinTao/guide/data/cookie.html)[]    |  空     | 可接收cookie数组,用于初始化配置 |
</code></pre><p>| compatibility | bool| 空 | 兼容模式,默认采用YinTao浏览器,开启后将使用Chromium | | device | string | 空 | 模拟移动设备录制, 支持的字段参考<a href="https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json" target="_blank" rel="noreferrer">setDevice</a> | | hosts | Map | 空 | host信息 <code>{&quot;域名&quot;:&quot;解析IP地址&quot;}</code>|</p><p><strong>数据格式:</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;api&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;live&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;config&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://jd.com&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;storage&quot;</span><span style="color:#E1E4E8;">: {</span><span style="color:#79B8FF;">&quot;id&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;api&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;live&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;config&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://jd.com&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;storage&quot;</span><span style="color:#24292E;">: {</span><span style="color:#005CC5;">&quot;id&quot;</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">123</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><strong>结果示例</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;script&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">await page.goto(&#39;https://www.baidu.com/&#39;);</span><span style="color:#79B8FF;">\\n\\n</span><span style="color:#9ECBFF;">// Fill input[name=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">wd</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">]</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">await dom.fill(&#39;input[name=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">wd</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">]&#39;,&#39;2&#39;);</span><span style="color:#79B8FF;">\\n\\n</span><span style="color:#9ECBFF;">// Click input[name=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">wd</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">]</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">await dom.click(&#39;input[name=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">wd</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">]&#39;);</span><span style="color:#79B8FF;">\\n\\n</span><span style="color:#9ECBFF;">// Fill input[name=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">wd</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">]</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">await dom.fill(&#39;input[name=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">wd</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">]&#39;,&#39;2222&#39;);</span><span style="color:#79B8FF;">\\n\\n</span><span style="color:#9ECBFF;">// Click text=百度一下</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">await dom.click(&#39;text=百度一下&#39;);&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;storage&quot;</span><span style="color:#E1E4E8;">: {}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;script&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">await page.goto(&#39;https://www.baidu.com/&#39;);</span><span style="color:#005CC5;">\\n\\n</span><span style="color:#032F62;">// Fill input[name=</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">wd</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">]</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">await dom.fill(&#39;input[name=</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">wd</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">]&#39;,&#39;2&#39;);</span><span style="color:#005CC5;">\\n\\n</span><span style="color:#032F62;">// Click input[name=</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">wd</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">]</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">await dom.click(&#39;input[name=</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">wd</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">]&#39;);</span><span style="color:#005CC5;">\\n\\n</span><span style="color:#032F62;">// Fill input[name=</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">wd</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">]</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">await dom.fill(&#39;input[name=</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">wd</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">]&#39;,&#39;2222&#39;);</span><span style="color:#005CC5;">\\n\\n</span><span style="color:#032F62;">// Click text=百度一下</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">await dom.click(&#39;text=百度一下&#39;);&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;storage&quot;</span><span style="color:#24292E;">: {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="ping" tabindex="-1">ping <a class="header-anchor" href="#ping" aria-label="Permalink to &quot;ping&quot;">​</a></h2><p><strong>数据格式:</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;api&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ping&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;api&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ping&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="退出" tabindex="-1">退出 <a class="header-anchor" href="#退出" aria-label="Permalink to &quot;退出&quot;">​</a></h2><p><strong>数据格式:</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;api&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;exit&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;api&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;exit&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,38)]))}const d=a(l,[["render",t]]);export{u as __pageData,d as default};
