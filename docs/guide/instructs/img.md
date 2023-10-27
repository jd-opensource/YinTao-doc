# img

通过图像进行操作
## img.click(imgPath)
通过图像进行点击, 会点击当前页面匹配的图像中心区域。基于[sift](https://en.wikipedia.org/wiki/Scale-invariant_feature_transform)实现
``` js
await img.click("https://storage.360buyimg.com/assert/baidu_btn.jpg") // 使用远程图片操作点击
await img.click("/use/app/baidu_btn.jpg") // 使用本地图像点击
```
