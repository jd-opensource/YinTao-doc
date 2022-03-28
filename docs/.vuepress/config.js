module.exports = {
  title: "Cherry-driver 中文文档",
  description: "Just playing around",
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: '../../strawberry.ico'}]
  ],
  base:"/cherry_driver/",
  plugins: [],
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: "主页", link: "/" },
      { text: "指南", link: "/guide/introduce/introduce" },
      {
        text: "相关服务",
        items: [
          { text: "octopus", link: "https://dqa.jd.com/octopus/" },
        ]
      }
    ],
    // 为以下路由添加左侧边栏
    sidebar: {
      "/guide/": [
        {
          title: "简介",
          collapsable: false,
          path: "/guide/introduce/introduce",
          children: [
            { title: "简介", path: "/guide/introduce/introduce" },
            { title: "下载", path: "/guide/introduce/download" },
          ]
        },
        {
          title: "架构设计",
          collapsable: false,
          path: "/guide/api/use",
          children: [
            { title: "运行架构", path: "/guide/api/use" },
            { title: "开发架构", path: "/guide/api/func" }
          ]
        },
        {
          title: "api",
          collapsable: false,
          path: "/guide/api/use",
          children: [
            { title: "api", path: "/guide/api/api" },
            { title: "指令", path: "/guide/api/instruct" },
            { title: "api结构", path: "/guide/api/apistruct"}
          ]
        },
        {
          title: "原理及特性",
          collapsable: false,
          path: "/guide/ex/ex1",
          children: [
            { title: "实现原理", path: "/guide/ex/ex1" },
            { title: "特性", path: "/guide/ex/ex2" },
          ]
        },
        {
          title: "起步",
          collapsable: false,
          path: "/guide/course/step",
          children: [
            { title: "安装说明", path: "/guide/course/step"},
            { title: "使用说明", path: "/guide/course/use"}
          ]
        },
        {
          title: "使用示例",
          collapsable: false,
          path: "/guide/examples/addAndDel",
          children: [
            { title: "web接入", path: "/guide/examples/web_call" },
            { title: "新增和删除数据", path: "/guide/examples/addAndDel" },
            { title: "日期控件", path:"/guide/examples/modifyDate"},
            { title: "浏览器调试模式", path:"/guide/examples/devTools"}
          ]
        },
      ]
    },
    
    sidebarDepth: 3, //左侧导航显示的层级
    lastUpdated: "Last Updated"
  }
};
