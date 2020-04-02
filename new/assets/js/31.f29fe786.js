(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{270:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2-0迁移指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0迁移指南"}},[t._v("#")]),t._v(" 2.0迁移指南")]),t._v(" "),a("p",[t._v("mpx2.0是完全兼容1.0版本的，显著的区别是支持了跨小程序平台的支持，")]),t._v(" "),a("p",[t._v("新创建的项目不用关心迁移问题，直接开发即可，使用1.0时期的包等都不受影响。")]),t._v(" "),a("p",[t._v("需要注意的一点是对小程序提供的API调用，我们使用了@mpxjs/api-proxy来抹平差异，同时之前的promisify被整合到了这个包里，所以1.x升级2.x需要替换@mpxjs/promisify为@mpxjs/api-proxy，使用方式为 "),a("code",[t._v("mpx.use(apiProxy, {usePromise: true})")]),t._v(" ，同时，所有的api调用应从wx.xxx变更为mpx.xxx，比如wx.navigateTo写为mpx.navigateTo，"),a("strong",[t._v("参数保持和微信一致，平台差异方面api-proxy做了抹平")]),t._v("。")]),t._v(" "),a("p",[t._v("老项目可以有两种升级方式：")]),t._v(" "),a("h2",{attrs:{id:"拷贝升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拷贝升级"}},[t._v("#")]),t._v(" 拷贝升级")]),t._v(" "),a("p",[t._v("如果你的项目是在1.0时期利用脚手架生成的，希望体验2.0的新特性，最简单的方式是升级cli工具后新创建一个项目，删掉src部分，复制老项目的src即可。")]),t._v(" "),a("p",[t._v("一个有所变化的地方在于，新项目的打开项目方式发生了一些变化，原本用微信开发者工具打开项目目录变为了用开发者工具打开构建结果目录（dist或dist/wx，取决于是否用跨平台构建），变化的原因详情见下方 "),a("a",{attrs:{href:"#%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84%E5%8C%BA%E5%88%AB"}},[t._v("附录-文件结构区别")]),t._v(" 部分。")]),t._v(" "),a("h2",{attrs:{id:"手工升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手工升级"}},[t._v("#")]),t._v(" 手工升级")]),t._v(" "),a("p",[t._v("如果你的项目之前就是手工配置的或者被个性化再次修改过或者对webpack配置非常熟练了解，也可以按照以下内容参考自行手工升级。")]),t._v(" "),a("h3",{attrs:{id:"依赖升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖升级"}},[t._v("#")]),t._v(" 依赖升级")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@mpxjs/core")]),t._v("由1.x升级至2.0")]),t._v(" "),a("li",[a("code",[t._v("@mpxjs/webpack-plugin")]),t._v("由1.x升级至2.0")])]),t._v(" "),a("h3",{attrs:{id:"依赖变更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖变更"}},[t._v("#")]),t._v(" 依赖变更")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@mpxjs/promisify")]),t._v("废弃，使用"),a("code",[t._v("@mpxjs/api-proxy")]),t._v("代替")]),t._v(" "),a("li",[a("code",[t._v("@mpxjs/url-loader")]),t._v("废弃，合入到"),a("code",[t._v("@mpxjs/webpack-plugin")]),t._v("中维护")])]),t._v(" "),a("h3",{attrs:{id:"webpack配置变更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack配置变更"}},[t._v("#")]),t._v(" webpack配置变更")]),t._v(" "),a("p",[t._v("在2.0版本中，为了更好地处理小程序中template和wxs的引用，我们重写了url-loader和file-loader，并且调整了原有的wxs-loader的工作机制，这会导致项目的build/webpack.base.conf.js中的module.rules配置发生一定的变化，调整规则如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpackConf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.mpx$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MpxWebpackPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          transRpx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'only'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            comment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use rpx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            include"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        include"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node_modules/@mpxjs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.json$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        resourceQuery"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/__component/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'javascript/auto'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.x版本中的配置")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   test: /(\\.wxs|\\.sjs|\\.filter\\.js)$/,")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   use: MpxWebpackPlugin.wxsLoader(),")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   type: 'javascript/auto',")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   issuer: /(\\.wxml|\\.axml|\\.swan|\\.mpx|\\.th)$/")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// },")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   test: /\\.(png|jpe?g|gif|svg)$/,")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   loader: '@mpxjs/url-loader',")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   options: {")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     name: 'img/[name].[ext]',")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     limit: 10000")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   }")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// },")]),t._v("\n      \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.0版本后的配置")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.(wxs|sjs|filter\\.js)$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MpxWebpackPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wxsPreLoader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        enforce"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pre'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.(png|jpe?g|gif|svg)$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MpxWebpackPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("urlLoader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img/[name].[ext]'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"附录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[t._v("#")]),t._v(" 附录")]),t._v(" "),a("h4",{attrs:{id:"文件结构区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件结构区别"}},[t._v("#")]),t._v(" 文件结构区别")]),t._v(" "),a("p",[t._v("使用@mpxjs/cli脚手架生成的项目在1.0版本时期和2.0版本时期有些区别。")]),t._v(" "),a("p",[t._v("早先因社区同学的建议使用了在项目根目录下的project.config.json文件中通过指定miniprogramRoot字段为dist，好处是不用复制，在微信小程序开发工具里可以用编辑器直接修改保存project.config.json文件。但跨小程序平台支持下，我们可能会在dist文件夹下再深一个层级区分不同小程序比如会有/dist/wx，/dist/ali，/dist/swan这样，出于打开项目体验的一致性等方面考量，决定这个微信特有的文件还是复制进构建结果里，不通过miniprogramRoot指定。")]),t._v(" "),a("p",[t._v("因此对于微信小程序的开发，1.0时期项目直接拷贝src到迁移2.0生成的新项目需要注意打开方式由打开项目目录改为打开项目构建生成的dist目录，如果是要用到跨平台特性（npm run build:cross），则要打开/dist/wx目录。")])])}),[],!1,null,null,null);s.default=e.exports}}]);