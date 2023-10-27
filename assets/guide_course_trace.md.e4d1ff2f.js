import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.edbfdbf1.js";const h=JSON.parse('{"title":"问题追踪","description":"","frontmatter":{},"headers":[],"relativePath":"guide/course/trace.md","filePath":"guide/course/trace.md","lastUpdated":1698380891000}'),o={name:"guide/course/trace.md"},l=p(`<h1 id="问题追踪" tabindex="-1">问题追踪 <a class="header-anchor" href="#问题追踪" aria-label="Permalink to &quot;问题追踪&quot;">​</a></h1><p>在<code>YinTao: version-1.1.5</code>版本开始，引擎内提供了执行问题追踪功能。使用追踪功能可以大幅提高远程执行问题调试的时间，可帮助您在脚本运行后探索执行的记录。 并提供本地或在线预览的能力。</p><h2 id="使用跟踪" tabindex="-1">使用跟踪 <a class="header-anchor" href="#使用跟踪" aria-label="Permalink to &quot;使用跟踪&quot;">​</a></h2><p>使用跟踪的方法为，在调用执行接口时，向执行参数<code>remoteReport</code>中追加 <code>trace</code> 地址 <code>trace</code>可以传递 <code>url</code>，或本地路径(非本地执行只能传递<code>http</code>地址)</p><h2 id="本地追踪" tabindex="-1">本地追踪 <a class="header-anchor" href="#本地追踪" aria-label="Permalink to &quot;本地追踪&quot;">​</a></h2><p>例:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">&quot;remoteReport&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;trace&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/Users/zhouyuan11/work/test/trace.zip&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 本地路径需要以zip结尾</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;script&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;await page.to(&#39;https://www.baidu.com/&#39;);await sleep(1000);//点击我的权益;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">await dom.click(&#39;text=2002元&#39;);await sleep(2000);&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&quot;remoteReport&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;trace&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/Users/zhouyuan11/work/test/trace.zip&quot;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 本地路径需要以zip结尾</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;script&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;await page.to(&#39;https://www.baidu.com/&#39;);await sleep(1000);//点击我的权益;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">await dom.click(&#39;text=2002元&#39;);await sleep(2000);&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>当执行完成后, 会在对应的位置生成追踪信息<code>zip</code>文件。</p><h2 id="远程追踪" tabindex="-1">远程追踪 <a class="header-anchor" href="#远程追踪" aria-label="Permalink to &quot;远程追踪&quot;">​</a></h2><p>例:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">&quot;remoteReport&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;trace&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://127.0.0.1:8910/trace&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 本地路径需要以zip结尾</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;script&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;await page.to(&#39;https://www.baidu.com/&#39;);await sleep(1000);//点击我的权益;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">await dom.click(&#39;text=2002元&#39;);await sleep(2000);&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&quot;remoteReport&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;trace&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://127.0.0.1:8910/trace&quot;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 本地路径需要以zip结尾</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;script&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;await page.to(&#39;https://www.baidu.com/&#39;);await sleep(1000);//点击我的权益;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">await dom.click(&#39;text=2002元&#39;);await sleep(2000);&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>当采用远程追踪时，在脚本执行结束后, <code>YinTao</code>会向目标地址传递追踪信息<code>zip</code>文件。</p><p>上传方式为:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@method</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">上报运行跟踪内容</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reportTrace</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">filePath</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">storage</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FormData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;form-data&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">param</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FormData</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  param.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;trace&quot;</span><span style="color:#E1E4E8;">,   fs.</span><span style="color:#B392F0;">createReadStream</span><span style="color:#E1E4E8;">(filePath))</span></span>
<span class="line"><span style="color:#E1E4E8;">  param.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;storage&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(storage))</span></span>
<span class="line"><span style="color:#E1E4E8;">  param.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;headers&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;application/json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }))</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(url, param, { headers: param.</span><span style="color:#B392F0;">getHeaders</span><span style="color:#E1E4E8;">(), timeout: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> }) </span><span style="color:#6A737D;">// 追踪超时设置为3分钟</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@method</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">上报运行跟踪内容</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reportTrace</span><span style="color:#24292E;">(</span><span style="color:#E36209;">url</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">filePath</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">storage</span><span style="color:#D73A49;">?:</span><span style="color:#005CC5;">any</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FormData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;form-data&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">param</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FormData</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  param.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;trace&quot;</span><span style="color:#24292E;">,   fs.</span><span style="color:#6F42C1;">createReadStream</span><span style="color:#24292E;">(filePath))</span></span>
<span class="line"><span style="color:#24292E;">  param.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;storage&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(storage))</span></span>
<span class="line"><span style="color:#24292E;">  param.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;headers&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;Content-Type&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;application/json&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }))</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(url, param, { headers: param.</span><span style="color:#6F42C1;">getHeaders</span><span style="color:#24292E;">(), timeout: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">60</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> }) </span><span style="color:#6A737D;">// 追踪超时设置为3分钟</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>远程服务需要接收<code>zip</code>文件，以放置在<code>oss</code>资源路径中。</p><h2 id="查看追踪信息" tabindex="-1">查看追踪信息 <a class="header-anchor" href="#查看追踪信息" aria-label="Permalink to &quot;查看追踪信息&quot;">​</a></h2><p>预览追踪可以通过<a href="https://trace.playwright.dev/" target="_blank" rel="noreferrer">trace.dev</a>进行, 如果是本地文件，可以通过选择文件的信息打开对应<code>追踪.zip</code>文件进行浏览</p><p>远程文件也可通过传递给<code>trace</code> 进行预览</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//trace.playwright.dev/?trace=http_url // 的方式进行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 例如:</span></span>
<span class="line"><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//trace.playwright.dev/?trace=https://storage.jd.com/assert/nihao2.zip</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//trace.playwright.dev/?trace=http_url // 的方式进行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 例如:</span></span>
<span class="line"><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//trace.playwright.dev/?trace=https://storage.jd.com/assert/nihao2.zip</span></span></code></pre></div><p><a href="https://trace.playwright.dev/?trace=https://storage.jd.com/assert/nihao2.zip" target="_blank" rel="noreferrer">点击此处在线查看跟踪效果</a></p><h2 id="相关文档及资料参考" tabindex="-1">相关文档及资料参考 <a class="header-anchor" href="#相关文档及资料参考" aria-label="Permalink to &quot;相关文档及资料参考&quot;">​</a></h2><p><a href="https://playwright.dev/docs/trace-viewer" target="_blank" rel="noreferrer">playwright-trace</a>, <a href="https://www.chromium.org/developers/how-tos/trace-event-profiling-tool/recording-tracing-runs/" target="_blank" rel="noreferrer">chromium-trace</a></p>`,22),e=[l];function t(r,c,y,E,i,d){return a(),n("div",null,e)}const u=s(o,[["render",t]]);export{h as __pageData,u as default};
