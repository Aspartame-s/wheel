# wheel 一个Vue UI 组件

author: Aspartame-s

## 介绍

## 开始使用

1. 添加 css 样式
    使用本框架前，请在 css 中 开启 border-box

    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```
    你还需要设置默认颜色等变量

    ```
    html {
      --button-height: 32px;
      --button-bg: white;
      --font-size: 14px;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-hover-color: #666;
    }
    ```
     IE 15 及以上都支持此样式

2. 安装 wheel
    ```
    npm i -S wheel-demo-1-3
    ```
3. 引入 wheel
    ```
    import {Button, ButtonGroup, Icon} from 'wheel-demo-1-3'
    import 'wheel-demo-1-3/dist/index.css'

    export default {
      name: 'app',
      components: {
        'g-button': Button,
        'g-icon': Icon
      }
    }
    ```
4. 引入 svg symbols
    ```
    <script src="//at.alicdn.com/t/font_2120401_fogrpgpfo8a.js"></script>
    ```
## 文档

## 提问 

## 变更记录

## 联系方式

## 贡献代码

