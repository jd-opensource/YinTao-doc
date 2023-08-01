# 粘贴板配置

## 介绍
YinTao 作为底层引擎，经常会在多个平台间使用，为了让用户能够更好的使用YinTao功能，以及兼容一些平台实现的差异。
我们提供了通用的粘贴板配置模式。

## 原理

在执行中或录制中，平台将传递一系列参数来控制具体执行的行为，现在我们允许用户去覆盖或扩充它 *(注: 仅针对本地有效)* 。

我们读取用户的粘贴板内容，转化为配置文件，并覆盖原始配置(仅针对修改项)。

让用户可以更加灵活的时候扩展功能。


## 示例 

**使用方式**: `复制下列代码至粘贴板`

### 自定义录制打开的浏览器

```json
{
    "url": "https://jd.com"
}
```

### 模拟录制h5页面
```json
{
    "url": "https://jd.com",
    "device":"iPhone 6"
}
```

### 模拟录制并使用快捷cookies
```json
{
    "url": "https://hospital-beta01.healthjd.com/pethospital/first/housekeeper",
    "device":"iPhone 6",
    "cookies":{
        "url":"https://hospital-beta01.healthjd.com/pethospital/first/housekeeper",
    	"data":"__jda=98075014.1677122656594590344178.1677122656.1677122656.1677122656.1; __jdv=98075014%7Cdirect%7C-%7Cnone%7C-%7C1677122656595; __jdc=98075014; mba_muid=1677122656594590344178; pt_key=AAJj9tzYADDlAcxsjRJmiKtwOjUpXA6xKyGngu0jjpv0UKr2anI7VYrzg5QXBn29NjomMiFl4; pt_pin=jd_71016da8d4de3; pt_token=hr8eh2zt; pwdt_id=jd_71016da8d4de3; sfstoken=tk01ma5161b90a8sMXgxNGh4K1IvvgX7/JGshz3aFJC0upRHpzZQup8CM8EUdz1U3d/HtnT7IenQnq+LBMv12AC6wf/k; __jdb=98075014.7.1677122656594590344178|1.1677122656; mba_sid=16771226565972996304242824537.4; __jd_ref_cls=MInternetPetHospital_FirstHousekeeper_Tab"
    }
}
```

### 录制/执行 传递动态host

```json
{
    "hosts": {
            "asdas.jd.com":"11.11.11.11"
        }
}
```

### 使用兼容模式录制

```json
{
    "compatibility":true
}
```

**全部参数，参考[open-Api](https://dqa.jd.com/YinTao/guide/api/httpApi.html)**