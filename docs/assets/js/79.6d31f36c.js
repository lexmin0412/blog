(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{254:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("接到一个需求，在小程序中需要获取用户经纬度信息，据此来给用户展示50km范围内的商家优惠券，但是在开发过程中发现小程序API获取的经纬度和原生APP使用百度API获取到的经纬度总是差了那么一些，经过多次对比，发现小程序和APP的位置差并不是随机的。")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("在我国，出于国家安全考虑，国内所有导航电子地图必须使用国家测绘局制定的加密坐标系统，所以通过微信api获取的经纬度是故意偏离的加密了的。")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("要获取精确的经纬度信息，需要将微信获取到的经纬度转换成百度的坐标。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),a("p",[t._v("使用示例：")]),t._v(" "),a("ul",[a("li",[t._v("项目：蜜仓小程序")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信小程序-位置-API"),a("OutboundLink")],1)]),t._v(" "),t._m(7)]),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("后续在蜜铺小程序中也有类似需求，所以自己封装了一个经纬度转换的库 "),a("a",{attrs:{href:"https://www.npmjs.com/package/coordinate-transfer",target:"_blank",rel:"noopener noreferrer"}},[t._v("coordinate-transfer"),a("OutboundLink")],1),t._v(" 来专门实现这个功能。")]),t._v(" "),a("p",[t._v("使用方法如下：")]),t._v(" "),t._m(10),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/coordinate-transfer",target:"_blank",rel:"noopener noreferrer"}},[t._v("API详见"),a("OutboundLink")],1)]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("在经纬网图上，可以根据经纬度量算两点之间的距离。全球各地纬度1°的间隔长度都相等（因为所有经线的长度都相等），大约是111km/1°。")]),t._v(" "),a("p",[t._v("赤道上经度1°对应在地面上的弧长大约也是111km。由于各纬线从赤道向两极递减，60°纬线上的长度为赤道上的一半，所以在各纬线上经度差1°的弧长就不相等。在同一条纬线上（假设此纬线的纬度为α）经度1°对应的实际弧长大约为111cosαkm。")]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("国内主流的地图服务提供厂商有三家，百度、高德和腾讯，其中腾讯和高德的经纬度是同一坐标系下的，可以通用，而百度与两者稍有不同，需要相互转换。")]),t._v(" "),t._m(14),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/th_1101/article/details/85762741",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于微信开发定位获取当前经纬度在百度地图上不准确的问题。"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhidao.baidu.com/question/1431627115688846899.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("经纬度和距离的关系"),a("OutboundLink")],1)])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"微信小程序获取经纬度不准确的解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序获取经纬度不准确的解决方案"}},[this._v("#")]),this._v(" 微信小程序获取经纬度不准确的解决方案")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[this._v("#")]),this._v(" 背景")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"问题来源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题来源"}},[this._v("#")]),this._v(" 问题来源")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[this._v("#")]),this._v(" 解决方案")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"方案1-使用百度接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案1-使用百度接口"}},[this._v("#")]),this._v(" 方案1: 使用百度接口")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用 "),s("code",[this._v("http://api.map.baidu.com/ag/coord/convert?from=0&to=4&x=longitude&y=latitude")]),this._v(" 这个接口，传入微信获取到的经纬度，得到真实的base64加密的经纬度字符串，使用base64解密成js字符串即可得到真实的经纬度值。\n返回示例：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"x"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MTEyLjU5ODMxODEzMzk="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 经度")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"y"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MjguMTU2NDI5MTk3MTc4"')]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 纬度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("经蜜仓项目实践，在手机上使用 "),s("code",[this._v("wgs84")]),this._v(" 坐标比 "),s("code",[this._v("gcj02")]),this._v(" 坐标更精确")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLocation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wgs84'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\t\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" longitude "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longitude   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微信获取到的经纬度")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" latitude "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("latitude\n\t\tTaro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\turl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("http://api.map.baidu.com/ag/coord/convert?from=0&to=4&x=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("longitude"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("&y=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("latitude"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tmethod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" strlongitude "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longitude  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 百度转换后base64加密的经纬度字符串")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" strLatitude "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("latitude\n\t\t\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'在这里进行base64解密操作'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"方案2-使用经纬度转换库（推荐）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案2-使用经纬度转换库（推荐）"}},[this._v("#")]),this._v(" 方案2: 使用经纬度转换库（推荐）")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  transTMapToBMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  transBMapToTMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  transCoordinate\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'coordinate-transfer'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用方法1: 直接调用转换方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transTMapToBMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("120.8484")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.2121")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transBMapToTMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("120.8484")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.2121")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用方法2: 调用父级方法, 通过此方法传入不同的参数可以调用上面的两个转换方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transCoordinate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tmap'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bmap'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  lng"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("120.8484")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  lat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.2121")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"相关知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关知识"}},[this._v("#")]),this._v(" 相关知识")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"经纬度和距离的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#经纬度和距离的关系"}},[this._v("#")]),this._v(" 经纬度和距离的关系")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"国内主流地图服务提供厂商的经纬度关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#国内主流地图服务提供厂商的经纬度关系"}},[this._v("#")]),this._v(" 国内主流地图服务提供厂商的经纬度关系")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);s.default=e.exports}}]);