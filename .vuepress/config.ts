import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "冰苷晶",
  description: "兰花草，梅花桩",
  head: [ // 注入到当前HTMl页面 <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    logo: "/logo.png",
    author: "IGCrystal",
    authorAvatar: "/logo.png",
    docsRepo: "https://github.com/IGCrystal/IGCrystal.github.io/",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",

    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "分组1",
          children: ["home", "theme"],
        },
        {
          text: "分组2",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "Home", link: "/" },
      { text: "Categories", link: "/categories/reco/1.html" },
      { text: "WentUrc Docs", link: "https://docs.wenturc.com/" },
      {
        text: "Docs",
        children: [
          { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
          { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
        ],
      },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `这是一个测试站点，你可以进行浏览`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "GitHub",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://wenturc.com">WentUrc<a/></li>
            <li><a href="https://docs.wenturc.com">WentUrc Docs<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
