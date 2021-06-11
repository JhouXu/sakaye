# SaKaYe readme

## 介绍

这是根据设计稿开发的单页面网站程序，主要作为 SaKaYe 酒店的官网，对外展示。

## 网站技术

网站技术说明：

- HTML5
- CSS3
- JavaScript
- [lazyLoad.js](https://github.com/verlok/vanilla-lazyload)：用于长页面图片的延迟加载
- [百度地图 WebService API](https://lbsyun.baidu.com/)

## 安装教程

1. 将项目克隆到本地

```md
$ git clone https://github.com.cnpmjs.org/JhouXu/sakaye.git
```

2. 运行

```md
$ cd SaKaYe

# 进入项目文件中，打开运行 index.html 文件即可。
```

## 目录结构

```
SaKaYe
├─ css
│  ├─ commonStyle.css
│  └─ style.css
├─ images
│  ├─ Features
│  ├─ logo素材
│  ├─ Theme
│  ├─ 素材来源
├─ index.html
├─ js
│  ├─ lazyLoad.js
│  └─ script.js
├─ README.md
└─ video
```

## 界面效果

- 导航栏与轮播图 界面

![nav-swiper.png](https://i.loli.net/2021/06/11/i7g6PDcaNYslTwE.png)

- 关于我们 界面

![about-us.png](https://i.loli.net/2021/06/11/4ehFxjTwW3ti1c5.png)

- 视频宣传 界面

![video.png](https://i.loli.net/2021/06/11/ATkzecLowNCfy9F.png)

- 酒店介绍 界面

![hotel.png](https://i.loli.net/2021/06/11/K7VMbmOWdw23YRI.png)

- 服务介绍 界面

![service.png](https://i.loli.net/2021/06/11/BKCW3l4dNR8GQ7z.png)

- 酒店主题 界面

![theme.png](https://i.loli.net/2021/06/11/KWTlEeQfmg7Da5C.png)

- 实时资讯 界面

![industry-news.png](https://i.loli.net/2021/06/11/cA3yFBTsDRY14wJ.png)

- 联系我们 界面

![contact-us.png](https://i.loli.net/2021/06/11/N1MGOhiYsqAFeKQ.png)

## 界面交互效果设计

1. 导航栏：根据当前用户鼠标的位置产生交互效果。
2. 实时日期：在轮播图下方，实时显示当前的年份和日期。

![nav-swiper-show.png](https://i.loli.net/2021/06/11/A9JqrlxR7KFfEaQ.png)

3. 快速置顶置底：当用户观看页面到一定程度时，页面右下角会出现一个快速置顶置底的按钮，以便用户快速查找浏览。
4. 表单验证：前端验证用户数据的表单是否符合规则，以不同的颜色效果反馈给用户。

![contact-us-show.png](https://i.loli.net/2021/06/11/pEnBQM5CUtJG43s.png)

## 参与贡献

- JhouXu（作者）

## 关于

- gitee 仓库地址：https://gitee.com/JhouXu/SaKaYe
- gitee 演示地址：https://jhouxu.gitee.io/sakaye（受 gitee-page 影响，此链接不能实现视频的观看，如需正常浏览请移步 github 演示地址）
- github 仓库地址：https://github.com/JhouXu/SaKaYe
- github 演示地址：https://jhouxu.github.io/SaKaYe/

本仓库网站主要通过前端基础知识，进行页面效果的展示，图片、视频等素材均来源于网络，仅供学习使用。谢谢观看。
