(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{195:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"taro踩坑指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taro踩坑指南","aria-hidden":"true"}},[s._v("#")]),s._v(" Taro踩坑指南")]),s._v(" "),a("ul",[a("li",[s._v("jsx中不能使用匿名函数, 需要bind")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("View onClick"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("handleClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("View"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正确")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("View onClick"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("handleClick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("View"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("View onClick"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("handleClick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("View"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正确")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"taro中的跳转事件与生命周期的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taro中的跳转事件与生命周期的关系","aria-hidden":"true"}},[s._v("#")]),s._v(" Taro中的跳转事件与生命周期的关系")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("navigateTo")]),s._v(" 会进  "),a("code",[s._v("componentDidhide")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("relaunch")]),s._v(",  "),a("code",[s._v("redirect")]),s._v(", "),a("code",[s._v("navigateBack")]),s._v(" 以及物理返回 会进 "),a("code",[s._v("componentWillUnmount")])])])]),s._v(" "),a("p",[s._v("应用：如果要监听taro中的返回事件，则可以在页面中所有的跳转事件中加上一个state，然后在componentwillUnmount中判断state中的判断，用于判断是返回还是跳转")]),s._v(" "),a("h3",{attrs:{id:"不能在render函数中定义纯函数组件，否则打包为小程序的时候会报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不能在render函数中定义纯函数组件，否则打包为小程序的时候会报错","aria-hidden":"true"}},[s._v("#")]),s._v(" 不能在render函数中定义纯函数组件，否则打包为小程序的时候会报错")]),s._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("taro Cannot read property 'isCallExpression' of null\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("解决：去除render return之前定义的纯函数组件 使用class组件代替")]),s._v(" "),a("h3",{attrs:{id:"文本溢出显示省略号样式不不生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本溢出显示省略号样式不不生效","aria-hidden":"true"}},[s._v("#")]),s._v(" 文本溢出显示省略号样式不不生效")]),s._v(" "),a("div",{staticClass:"language-scss line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 多行截取")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@mixin")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("textOrient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$line")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 需要加上这一句autoprefixer的忽略规则 否则这一行样式加不上 导致无法展示省略号")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*! autoprefixer: ignore next */")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-box-orient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" vertical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-line-clamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$line")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"移动滑动不跟手的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动滑动不跟手的问题","aria-hidden":"true"}},[s._v("#")]),s._v(" 移动滑动不跟手的问题")]),s._v(" "),a("div",{staticClass:"language-scss line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-overflow-scrolling")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" touch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#app ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-overflow-scrolling")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" touch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"错误图片处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误图片处理","aria-hidden":"true"}},[s._v("#")]),s._v(" 错误图片处理")]),s._v(" "),a("p",[s._v("解决方案：每一个Image标签传入一个唯一key，使用onError事件监听解决。\n下面是封装的组件")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Taro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Component "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@tarojs/taro'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Image "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@tarojs/components'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" defaultStoreIcon "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./../assets/images/common/headimg.jpg'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" defaultGoodsIcon "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./../assets/images/common/icon_default.png'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" defaultPersonIcon "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./../assets/images/common/person_zhanweitu@2x.png'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 组件需要的Props定义\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IProps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  className"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 分割线\n */")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * api同taro Image 增加type和key属性 用于处理图片路径错误\n * @type 图片类型 String store-店铺 person-用户 goods-商品\n * @key 图片key值，需要保证页面唯一\n * @src 图片路径 同Image src\n * @className 图片类名 同Image className\n */")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" iconEnum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'store'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" defaultStoreIcon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'person'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" defaultPersonIcon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'goods'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" defaultGoodsIcon\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BackTop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Component")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IProps")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  \n    state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误时间监听 设置唯一state")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("handleError")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" type "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("props\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("`imgError")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" iconEnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" className"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("props\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Image")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token spread"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("`imgError")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("onError")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("handleError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n")])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br")])]),a("h3",{attrs:{id:"行内样式自动转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行内样式自动转换","aria-hidden":"true"}},[s._v("#")]),s._v(" 行内样式自动转换")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果在设计稿上是10px，这里就传入10\t返回一个字符串 h5单位为rem 小程序端为rpx")]),s._v("\nTaro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pxTransform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}],!1,null,null,null);t.default=e.exports}}]);