module.exports = {
  title: "cherry 中文文档",
  base: "",
  description: "Just playing around",
  head: [
    ['link', {
      rel: 'shortcut icon',
      type: "image/x-icon",
      href: '../../strawberry.ico'
    }]
  ],
  plugins: [],
  themeConfig: {
    version:"2.0.1", // 发布的版本号
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
    sidebar: [
      {
        
        text: "简介",
        link: "/guide/introduce/introduce",
      },
      {
        text: "下载",
        link: "/guide/introduce/download",
        frontmatter: {
          title:"nihao22"
        }
      },
      {
        text: "api",
        collapsable: false,
        items: [{
            items: [
              {
                text:"http",
                link:"/guide/api/httpApi"
              },
              {
                text:"websockt",
                link: "/guide/api/wsApi"
              }
            ]
          },
          {
            text: "指令",
            link: "/guide/api/instruct"
          },
          {
            text: "粘贴板配置",
            link: "/guide/api/pasteConfig"
          }
        ]
      },
      {
        text: "原理及特性",
        collapsable: false,
        link: "/guide/ex/ex1",
        items: [
          {
            text: "特性",
            link: "/guide/ex/ex2"
          },
        ]
      },
      {
        text: "起步",
        collapsable: false,
        link: "/guide/course/step",
        items: [{
            text: "安装说明",
            link: "/guide/course/step"
          },
          {
            text: "使用说明",
            link: "/guide/course/use"
          },
          {
            text: "问题追踪",
            link: "/guide/course/trace"
          }
        ]
      },
      {
        text: "使用示例",
        collapsable: false,
        items: [{
            text: "基础功能操作",
            link: "/guide/exam/baseOpt"
          },
          {
            text: "选择器进阶",
            link: "/guide/exam/select"
          },
          {
            text: "H5测试支持",
            link: "/guide/exam/mobile"
          },
          {
            text: "日期控件",
            link: "/guide/exam/modifyDate"
          },
          {
            text: "接口数据测试",
            link: "/guide/exam/apiHook"
          }
        ]
      },
      {
        text: "数据结构",
        collapsable: true,
        items: [{
            text: "错误码",
            link: "/guide/data/errorCode"
          },
          {
            text: "keyCode",
            link: "/guide/data/keyCode"
          },
          {
            text: "cookie",
            link: "/guide/data/cookie"
          }
        ]
      },
    ],
    sidebarDepth: 3, //左侧导航显示的层级
    lastUpdated: "Last Updated"
  }
};