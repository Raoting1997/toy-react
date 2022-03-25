# 

## 第一步：配置环境

首先配置 webpack 的环境，webpack、webpack-cli
然后创建 webpack 的 config 文件，添加 loader 等

## 第二步：安装识别 JSX 的插件

@babel/plugin-transform-react-jsx
JSX 语法会被编译为 React.createElement() 方法的调用，因此需要实现 createElement 方法

## 实现 createElement 方法

参数：标签名（也可能是class、函数等），属性对象，子元素
逻辑：
    - 创建一个标签
        - 如果是 string，则表示是标签，直接创建
        - 否则就是 class，直接 new
    - 添加所有属性
    - 添加所有子元素，如果子元素是文本，就创建一个文本节点，再添加进去

## 虚拟 DOM

对比算法：

  