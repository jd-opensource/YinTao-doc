import{_ as s,v as a,b as n,R as o}from"./chunks/framework.0e36afc9.js";const h=JSON.parse('{"title":"粘贴板配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/api/pasteConfig.md","filePath":"guide/api/pasteConfig.md","lastUpdated":1690872800000}'),l={name:"guide/api/pasteConfig.md"},p=o(`<h1 id="粘贴板配置" tabindex="-1">粘贴板配置 <a class="header-anchor" href="#粘贴板配置" aria-label="Permalink to &quot;粘贴板配置&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>YinTao 作为底层引擎，经常会在多个平台间使用，为了让用户能够更好的使用YinTao功能，以及兼容一些平台实现的差异。 我们提供了通用的粘贴板配置模式。</p><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><p>在执行中或录制中，平台将传递一系列参数来控制具体执行的行为，现在我们允许用户去覆盖或扩充它 <em>(注: 仅针对本地有效)</em> 。</p><p>我们读取用户的粘贴板内容，转化为配置文件，并覆盖原始配置(仅针对修改项)。</p><p>让用户可以更加灵活的时候扩展功能。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p><strong>使用方式</strong>: <code>复制下列代码至粘贴板</code></p><h3 id="自定义录制打开的浏览器" tabindex="-1">自定义录制打开的浏览器 <a class="header-anchor" href="#自定义录制打开的浏览器" aria-label="Permalink to &quot;自定义录制打开的浏览器&quot;">​</a></h3><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://jd.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="模拟录制h5页面" tabindex="-1">模拟录制h5页面 <a class="header-anchor" href="#模拟录制h5页面" aria-label="Permalink to &quot;模拟录制h5页面&quot;">​</a></h3><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://jd.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">device</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">iPhone 6</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="模拟录制并使用快捷cookies" tabindex="-1">模拟录制并使用快捷cookies <a class="header-anchor" href="#模拟录制并使用快捷cookies" aria-label="Permalink to &quot;模拟录制并使用快捷cookies&quot;">​</a></h3><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://hospital-beta01.healthjd.com/pethospital/first/housekeeper</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">device</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">iPhone 6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">cookies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://hospital-beta01.healthjd.com/pethospital/first/housekeeper</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">__jda=98075014.1677122656594590344178.1677122656.1677122656.1677122656.1; __jdv=98075014%7Cdirect%7C-%7Cnone%7C-%7C1677122656595; __jdc=98075014; mba_muid=1677122656594590344178; pt_key=AAJj9tzYADDlAcxsjRJmiKtwOjUpXA6xKyGngu0jjpv0UKr2anI7VYrzg5QXBn29NjomMiFl4; pt_pin=jd_71016da8d4de3; pt_token=hr8eh2zt; pwdt_id=jd_71016da8d4de3; sfstoken=tk01ma5161b90a8sMXgxNGh4K1IvvgX7/JGshz3aFJC0upRHpzZQup8CM8EUdz1U3d/HtnT7IenQnq+LBMv12AC6wf/k; __jdb=98075014.7.1677122656594590344178|1.1677122656; mba_sid=16771226565972996304242824537.4; __jd_ref_cls=MInternetPetHospital_FirstHousekeeper_Tab</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="录制-执行-传递动态host" tabindex="-1">录制/执行 传递动态host <a class="header-anchor" href="#录制-执行-传递动态host" aria-label="Permalink to &quot;录制/执行 传递动态host&quot;">​</a></h3><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">hosts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">asdas.jd.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">11.11.11.11</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="使用兼容模式录制" tabindex="-1">使用兼容模式录制 <a class="header-anchor" href="#使用兼容模式录制" aria-label="Permalink to &quot;使用兼容模式录制&quot;">​</a></h3><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compatibility</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><strong>全部参数，参考<a href="https://dqa.jd.com/YinTao/guide/api/httpApi.html" target="_blank" rel="noreferrer">open-Api</a></strong></p>`,20),e=[p];function t(c,r,D,i,F,y){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{h as __pageData,u as default};
