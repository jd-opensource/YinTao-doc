import{_ as t,o,c as a,O as e}from"./chunks/framework.cd5f8e03.js";const E=JSON.parse('{"title":"cookies","description":"","frontmatter":{},"headers":[],"relativePath":"guide/instructs/cookies.md","filePath":"guide/instructs/cookies.md","lastUpdated":1733905285000}'),l={name:"guide/instructs/cookies.md"};function n(p,s,c,r,d,i){return o(),a("div",null,s[0]||(s[0]=[e(`<h1 id="cookies" tabindex="-1">cookies <a class="header-anchor" href="#cookies" aria-label="Permalink to &quot;cookies&quot;">​</a></h1><p>适用于用户身份认证，以及验证码跳过。</p><h2 id="cookies-setall-url-value" tabindex="-1">cookies.setAll(url, value) <a class="header-anchor" href="#cookies-setall-url-value" aria-label="Permalink to &quot;cookies.setAll(url, value)&quot;">​</a></h2><p>对指定页面批量设置cookie</p><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>空</td><td>必填，要设置cookie的url</td></tr><tr><td>value</td><td>string</td><td>空</td><td>必填，string类型的cookie值</td></tr></tbody></table><p>示例:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> cookies.</span><span style="color:#B392F0;">setAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;https://www.baidu.com/&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;jZ0bGJpeXR3&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> cookies.</span><span style="color:#6F42C1;">setAll</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;https://www.baidu.com/&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;jZ0bGJpeXR3&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="cookies-set-cookies" tabindex="-1">cookies.set(cookies) <a class="header-anchor" href="#cookies-set-cookies" aria-label="Permalink to &quot;cookies.set(cookies)&quot;">​</a></h2><p>通过浏览器cookie标准，设置完整的cookie信息。</p><ul><li>cookies : details[]</li></ul><p>details参数:</p><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>空</td><td>必填，与cookie相关联的url</td></tr><tr><td>name</td><td>string</td><td>空</td><td>必填，cookie的名称</td></tr><tr><td>value</td><td>string</td><td>空</td><td>必填，cookie的值</td></tr><tr><td>domain</td><td>string</td><td>空</td><td>必填，cookie的域，使用前面的点进行标准化，以便适用于子域</td></tr><tr><td>path</td><td>string</td><td>空</td><td>选填，cookie的路径</td></tr><tr><td>secure</td><td>boolean</td><td>false</td><td>选填，cookie是否标记为安全</td></tr><tr><td>httpOnly</td><td>boolean</td><td>false</td><td>选填，cookie是否仅标记为HTTP</td></tr><tr><td>expirationDate</td><td>double</td><td>空</td><td>选填，cookie的到期日期，表示自UNIX纪元以来的秒数</td></tr><tr><td>sameSite</td><td>boolean</td><td>no_restriction</td><td>选填，应用于此cookie的相同站点策略,可选：unspecified,no_restriction,lax,strict</td></tr></tbody></table><p>注意: 新版不允许同时设置url和domain, 设置url后会自动生成对应的domain.</p><p>如果你要设置单个cookie更推荐使用<code>domain</code> + <code>path</code> 设置, 而非<code>url</code></p><p>示例:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> cookies.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">([{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;domain&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;.jd.com&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;sso.jd.com&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;jZ0bGJpeXR3Z1FCeWRPclJ1LTRtOUI2YWR6fkpXfmxKSDU1Sk5LS3htS3dDS3RoRUFBQUFBJ&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> cookies.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">([{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;domain&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;.jd.com&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;sso.jd.com&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;jZ0bGJpeXR3Z1FCeWRPclJ1LTRtOUI2YWR6fkpXfmxKSDU1Sk5LS3htS3dDS3RoRUFBQUFBJ&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}])</span></span></code></pre></div><h2 id="cookies-clear" tabindex="-1">cookies.clear <a class="header-anchor" href="#cookies-clear" aria-label="Permalink to &quot;cookies.clear&quot;">​</a></h2><p>清空浏览器cookie</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> cookies.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> cookies.</span><span style="color:#6F42C1;">clear</span><span style="color:#24292E;">()</span></span></code></pre></div>`,19)]))}const y=t(l,[["render",n]]);export{E as __pageData,y as default};