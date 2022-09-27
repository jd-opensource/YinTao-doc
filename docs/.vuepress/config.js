module.exports = {
  title: "cherry 中文文档",
  description: "Just playing around",
  head: [
    ['link', {
      rel: 'shortcut icon',
      type: "image/x-icon",
      href: '../../strawberry.ico'
    }]
  ],
  base: "/cherry/",
  plugins: [],
  themeConfig: {
    version:"1.0.8", // 发布的版本号
    // 添加导航栏
    nav: [{
        text: "主页",
        link: "/"
      },
      {
        text: "指南",
        link: "/guide/introduce/introduce"
      },
      {
        text: "相关服务",
        items: [{
          text: "dqa",
          link: "https://dqa.jd.com"
        }, ]
      }
    ],
    // 为以下路由添加左侧边栏
    sidebar: {
      "/guide/": [{
          title: "简介",
          collapsable: false,
          path: "/guide/introduce/introduce",
          children: [{
              title: "简介",
              path: "/guide/introduce/introduce"
            },
            {
              title: "下载",
              path: "/guide/introduce/download"
            },
          ]
        },
        // {
        //   title: "架构设计",
        //   collapsable: false,
        //   path: "/guide/api/use",
        //   children: [{
        //       title: "运行架构",
        //       path: "/guide/api/use"
        //     },
        //     {
        //       title: "开发架构",
        //       path: "/guide/api/func"
        //     }
        //   ]
        // },
        {
          title: "api",
          collapsable: false,
          path: "/guide/api/use",
          children: [{
              title: "开放api",
              path: "/guide/api/api",
              children: [
                {
                  title:"http",
                  path:"/guide/api/httpApi"
                },
                {
                  title:"websockt",
                  path: "/guide/api/wsApi"
                }
              ]
            },
            {
              title: "指令",
              path: "/guide/api/instruct"
            },
            {
              title: "粘贴板配置",
              path: "/guide/api/pasteConfig"
            }
          ]
        },
        {
          title: "原理及特性",
          collapsable: false,
          path: "/guide/ex/ex1",
          children: [
            // {
            //   title: "实现原理",
            //   path: "/guide/ex/ex1"
            // },
            {
              title: "特性",
              path: "/guide/ex/ex2"
            },
          ]
        },
        {
          title: "起步",
          collapsable: false,
          path: "/guide/course/step",
          children: [{
              title: "安装说明",
              path: "/guide/course/step"
            },
            {
              title: "使用说明",
              path: "/guide/course/use"
            }
          ]
        },
        {
          title: "使用示例",
          collapsable: false,
          children: [{
              title: "基础功能操作",
              path: "/guide/exam/baseOpt"
            },
            {
              title: "选择器进阶",
              path: "/guide/exam/select"
            },
            {
              title: "H5测试支持",
              path: "/guide/exam/mobile"
            },
            {
              title: "日期控件",
              path: "/guide/exam/modifyDate"
            },
            {
              title: "接口数据测试",
              path: "/guide/exam/apiHook"
            }
          ]
        },
        {
          title: "数据结构",
          collapsable: true,
          children: [{
              title: "错误码",
              path: "/guide/data/errorCode"
            },
            {
              title: "keyCode",
              path: "/guide/data/keyCode"
            },
            {
              title: "cookie",
              path: "/guide/data/cookie"
            }
          ]
        },
      ]
    },

    sidebarDepth: 3, //左侧导航显示的层级
    lastUpdated: "Last Updated"
  }
};