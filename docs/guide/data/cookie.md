# Cookie object
`录制时`cookie`必须`额外传递`url`: `string` 标明录制地址。

* name : `string` - cookie 的名称。
* value: `string` - cookie 的值。
* domain: `string`(optional)- cookie 的域；这将使用前面的点进行标准化，以便它对子域也有效。
* hostOnly: `boolean`(optional) - cookie 是否是 host-only cookie；true只有在没有通过域的情况下才会出现这种情况。
* path: `string`(optional)- cookie 的路径。
* secure: `boolean`(optional) - cookie 是否被标记为安全。
* httpOnly布尔值(optional)- cookie 是否仅标记为 HTTP。
* session: `boolean`(optional) - cookie 是会话 cookie 还是具有到期日期的持久 cookie。
* expirationDate `Double`(optional)- cookie 的到期日期，即自 UNIX 纪元以来的秒数。不为会话 cookie 提供。
* sameSite: `string`(optional) -应用于此 cookie的相同站点策略。可以是unspecified、no_restriction或laxstrict。