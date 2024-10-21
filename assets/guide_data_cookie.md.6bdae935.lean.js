import{_ as e,o as i,c,O as t}from"./chunks/framework.58a9e095.js";const u=JSON.parse('{"title":"Cookie object","description":"","frontmatter":{},"headers":[],"relativePath":"guide/data/cookie.md","filePath":"guide/data/cookie.md","lastUpdated":1729501740000}'),a={name:"guide/data/cookie.md"};function l(d,o,n,r,s,k){return i(),c("div",null,o[0]||(o[0]=[t('<h1 id="cookie-object" tabindex="-1">Cookie object <a class="header-anchor" href="#cookie-object" aria-label="Permalink to &quot;Cookie object&quot;">​</a></h1><p><code>录制时</code>cookie<code>必须</code>额外传递<code>url</code>: <code>string</code> 标明录制地址。</p><ul><li>name : <code>string</code> - cookie 的名称。</li><li>value: <code>string</code> - cookie 的值。</li><li>domain: <code>string</code>(optional)- cookie 的域；这将使用前面的点进行标准化，以便它对子域也有效。</li><li>hostOnly: <code>boolean</code>(optional) - cookie 是否是 host-only cookie；true只有在没有通过域的情况下才会出现这种情况。</li><li>path: <code>string</code>(optional)- cookie 的路径。</li><li>secure: <code>boolean</code>(optional) - cookie 是否被标记为安全。</li><li>httpOnly布尔值(optional)- cookie 是否仅标记为 HTTP。</li><li>session: <code>boolean</code>(optional) - cookie 是会话 cookie 还是具有到期日期的持久 cookie。</li><li>expirationDate <code>Double</code>(optional)- cookie 的到期日期，即自 UNIX 纪元以来的秒数。不为会话 cookie 提供。</li><li>sameSite: <code>string</code>(optional) -应用于此 cookie的相同站点策略。可以是unspecified、no_restriction或laxstrict。</li></ul>',3)]))}const m=e(a,[["render",l]]);export{u as __pageData,m as default};
