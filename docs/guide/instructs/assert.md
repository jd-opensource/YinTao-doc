# assert

## assert.all(string,times)
  全局断言,判断当前页面内是否存在指定字符串。
  默认判断规则为，判定默认6次每次间隔500ms,如果在规定时间能为找到则断言失败
  ``` js
  await assert.all('立即下单') // 判断页面内是否存在立即下单文字
  await assert.all('立即下单',10) // 增加重试次数
  ```

## assert.true(value: bool | string | number ,errHint)
  判断value内容是否为true.
  ``` js
  await assert.true('存在') // 
  await assert.all(false, "断言内容为false,请检查相关代码逻辑") // 当断言失败时会显示，提示文字
  ```

## assert.custom(sign,attr,preValue,operate)
  断言，获取元素的预期值与实际值进行比较。
  
  `sign`:元素标记，支持传递元素的`css选择器`、`xpath`、`id`；
  
  `attr`:断言的元素的属性值；
  
  `preValue`: 断言元素属性的预期值；
  
  `opreate`: 比较方式：`0-相等`，`1-不相等`，`2-包含`，`3-不包含`；
  ```js
  await assert.custom('#su','value','百度一下',0) //判断su的value是否等于百度一下
  await assert.custom('.title','innerText','hello',0) // 获取class=tiile的文本内容进行断言
  ```

## assert.title(string)
  断言，指定dom的`title`与入参进行比较。
  ```js
  await assert.title('百度一下，你就知道') //判断当前页面的title值是不是‘百度一下，你就知道’
  ```

## assert.location(url)
  断言，指定dom的`url`与文本进行比较。
  ```js
  await assert.location('https://www.baidu.com/') //判断当前页面的url值与传参是否一致
  ```
