module.exports = {
  title: "BIThesis",
  description: "📖 Unofficial LaTeX templates for your bachelor graduation thesis (and more) here at BIT.",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      }
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }]
  ],
  themeConfig: {
    logo: "/favicon-32x32.png",
    nav: [
      { text: "文档指南", link: "/Guide/" },
      // { text: "系列视频指导", link: "/Video/" },
      { text: "模板下载", link: "https://github.com/spencerwooo/BIThesis/releases/latest" },
      { text: "GitHub", link: "https://github.com/spencerwooo/BIThesis" }
    ],
    sidebar: {
      "/Guide/": [
        ["", "主页"],
        ["1-Intro/First-things-first", "如何开始"],
        ["2-Usage/Downloading-and-using-templates", "下载与使用模板"],
        {
          title: "BIThesis 模板",
          children: [
            ["3-Templates/Proposal-Report", "本科生开题报告"],
            ["3-Templates/Final-Graduation-Thesis", "本科生毕业论文"],
            ["3-Templates/Lab-Report", "本科生实验报告"]
          ]
        },
        {
          title: "其他",
          children: [
            ["4-Others/Converting-to-Word", "将 LaTeX 文档转换为 Word"],
            ["4-Others/Troubleshooting", "疑难杂症"]
          ]
        },
        ["5-Acknowledgements/Acknowledgements", "致谢"]
      ],
      "/Video/": [
        ["", "系列视频"],
        ["Episode-1", "第一集"],
        ["Episode-2", "第二集"],
        ["Episode-3", "第三集"]
      ],
      "/": [""]
    },
    sidebarDepth: 3,
    smoothScroll: true,
    lastUpdated: "Last Updated"
  },
  plugins: [
    [
      "container",
      {
        type: "vue",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>"
      }
    ],
    ["dplayer"]
  ]
};
