(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{194:function(e,a,t){"use strict";t.d(a,"d",function(){return n}),t.d(a,"a",function(){return o}),t.d(a,"b",function(){return r}),t.d(a,"c",function(){return p}),t.d(a,"e",function(){return l});t(25),t(119),t(124),t(12),t(357);function n(e){return"/"===e?"undefined"!=typeof window&&"zh-CN"===(localStorage?localStorage.getItem("locale"):"en-US"):/-cn/.test(e)}function o(e,a){var t=e.startsWith("/")?e:"/"+e;return"/"===(t=t.replace("-cn",""))||"/index"===t?a?"/index-cn":"/":a?t.endsWith("/")?t.substring(0,t.length-1)+"-cn":t+"-cn":""+t}function r(e,a){var t=e.map(function(e){return e.meta}),n={topLevel:{}};return t.sort(function(e,a){return(e.order||0)-(a.order||0)}).forEach(function(e){var t=e.category&&e.category[a]||e.category||"topLevel";n[t]||(n[t]={});var o=e.type||"topLevel";n[t][o]||(n[t][o]=[]),n[t][o].push(e)}),n}function p(){var e=window.localStorage;try{return e.setItem("test","1"),e.removeItem("test"),!0}catch(a){return!1}}var l=function(e){var a=e.title;return Object.assign({},e,{title:{"zh-CN":a.zh_CN,"en-US":a.en_US}})}},217:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(52),p=t.n(r);t.d(a,"a",function(){return p.a});t(269),t(7),o.a.createContext({})},269:function(e,a,t){var n;e.exports=(n=t(377))&&n.default||n},324:function(e,a,t){"use strict";t(47),t(39),t(21),t(116),t(328);var n=t(528),o=t.n(n),r=(t(25),t(0)),p=t.n(r),l=t(193),i=t(532),c=t.n(i),s=t(325),m=t(355),d={locale:"en-US",data:t.n(m).a,messages:{"app.header.search":"Search...","app.header.search.all":"Search in Google: ","app.header.search.doc":"Docs","app.header.search.component":"Components","app.header.menu.home":"Home","app.header.menu.docs":"Docs","app.header.menu.components":"Components","app.header.menu.resource":"Resources","app.header.lang":"中文","app.content.edit-page":"Edit this page on GitHub!","app.content.modifiedTime":"Last updated on ","app.content.edit-demo":"Edit this demo on GitHub!","app.component.examples":"Examples","app.component.refer.title":"Usage:","app.component.refer.desc":"Learning more to visit: ","app.component.refer.link":"Using Pro Components Alone","app.demo.copy":"Copy code","app.demo.copied":"Copied!","app.demo.codepen":"Open in CodePen","app.demo.riddle":"Open in Riddle","app.demo.codesandbox":"Open in CodeSandbox","app.home.slogan":"Out-of-box UI solution for enterprise applications","app.home.preview":"Preview","app.home.start":"Getting Started","app.home.download":"Download","app.home.letspro":"Run commands below, explore it!","app.home.selectpro":"Select Ant Design Pro","app.home.selectlanguage":"Select language you use","app.home.openbrowser":"open browser and visit","app.home.needhelp":"Need help? You can see {docs} and {faq} first, and {ask} in GitHub if they don't help.","app.home.docs":"documentation","app.home.faq":"faq","app.home.ask":"ask questions","app.footer.repo":"GitHub Repository","app.footer.awesome":"Awesome Ant Design","app.footer.chinamirror":"China Mirror 🇨🇳","app.footer.primary-color-changed":"Change primary color successfully!","app.footer.scaffold":"Scaffold","app.footer.kitchen":"Sketch Toolkit","app.footer.landing":"Landing Templates","app.footer.scaffolds":"Scaffold Market","app.footer.dev-tools":"Developer Tools","app.footer.dva":"Framework","app.footer.resources":"Resources","app.footer.data-vis":"Data Visualization","app.footer.eggjs":"Enterprise Node Framework","app.footer.motion":"Motion Solution","app.footer.antd-library":"Axure library","app.footer.design-platform":"Ant Financial Design Platform","app.footer.antux":"Sitemap Template","app.footer.community":"Community","app.footer.help":"Help","app.footer.change-log":"Change Log","app.footer.faq":"FAQ","app.footer.feedback":"Feedback","app.footer.stackoverflow":"StackOverflow","app.footer.segmentfault":"SegmentFault","app.footer.discuss-en":"Chat Room (English)","app.footer.discuss-cn":"Chat Room (中文)","app.footer.bug-report":"Bug Report","app.footer.issues":"Issues","app.footer.version":"Version: ","app.footer.author":"Created by AFX","app.footer.work_with_us":"Work with Us","app.footer.more-product":"More Products","app.footer.company":"AFX","app.footer.ant-design":"UI Design Language","app.footer.yuque":"YuQue","app.footer.yuque.slogan":"Write your document as a team","app.footer.fengdie":"FengDie","app.footer.fengdie.slogan":"Mobile web app builder","app.footer.zhihu":"Zhihu","app.footer.zhihu.xtech":"Experience Cloud Blog","app.footer.seeconf":"Seeking Experience & Engineering Conference","app.footer.xcloud":"Ant Experience Cloud","app.publish.title":"Ant Desgin Pro@2.0.0 has been released! 🎉 🎉 🎉","app.publish.greeting":"Hello, ","app.publish.intro":"has been released","app.publish.tips":", welcome to upgrade and experience. ","app.publish.url":"https://medium.com/ant-design/beautiful-and-powerful-ant-design-pro-2-0-release-51358da5af95","app.publish.old-version-guide":"If you need documentation of older version, please visit ","app.publish.old-version-tips":",It can also be viewed by clicking on the v1 menu in the top right corner of the page."}},u=t(356),f={locale:"zh-CN",data:t.n(u).a,messages:{"app.header.search":"搜索...","app.header.search.all":"全文本搜索：","app.header.search.doc":"文档","app.header.search.component":"组件","app.header.menu.home":"首页","app.header.menu.docs":"文档","app.header.menu.components":"组件","app.header.menu.resource":"资源","app.header.lang":"English","app.content.edit-page":"在 Github 上编辑此页！","app.content.modifiedTime":"上次修改时间：","app.content.edit-demo":"在 Github 上编辑此示例！","app.component.examples":"代码演示","app.component.refer.title":"引用方式：","app.component.refer.desc":"详细使用方式请参照：","app.component.refer.link":"独立使用 pro 组件","app.demo.copy":"复制代码","app.demo.copied":"复制成功","app.demo.codepen":"在 CodePen 中打开","app.demo.riddle":"在 Riddle 中打开","app.demo.codesandbox":"在 CodeSandbox 中打开","app.home.slogan":"开箱即用的中台前端/设计解决方案","app.home.preview":"预览","app.home.start":"开始使用","app.home.download":"下载","app.home.letspro":"命令行运行下列命令，快速启动开发服务：","app.home.selectpro":"选择 Ant Design Pro","app.home.selectlanguage":"选择你使用的语言","app.home.openbrowser":"打开浏览器访问","app.home.needhelp":"需要帮助？请先阅读 {docs} 和 {faq}， 如果未能解决，可以到 GitHub 上 {ask}。","app.home.docs":"开发文档","app.home.faq":"常见问题","app.home.ask":"进行提问","app.footer.repo":"GitHub 仓库","app.footer.awesome":"Awesome Ant Design","app.footer.chinamirror":"国内镜像站点 🇨🇳","app.footer.primary-color-changed":"修改主题色成功！","app.footer.kitchen":"Sketch 工具集","app.footer.landing":"Landing 模板集","app.footer.scaffold":"脚手架","app.footer.scaffolds":"脚手架市场","app.footer.dev-tools":"开发工具","app.footer.dva":"应用框架","app.footer.resources":"相关资源","app.footer.data-vis":"数据可视化","app.footer.eggjs":"企业级 Node 开发框架","app.footer.motion":"设计动效","app.footer.antd-library":"Axure 部件库","app.footer.design-platform":"蚂蚁金服设计平台","app.footer.antux":"页面逻辑素材","app.footer.community":"社区","app.footer.help":"帮助","app.footer.change-log":"更新记录","app.footer.faq":"常见问题","app.footer.feedback":"反馈和建议","app.footer.stackoverflow":"StackOverflow","app.footer.segmentfault":"SegmentFault","app.footer.discuss-en":"在线讨论 (English)","app.footer.discuss-cn":"在线讨论 (中文)","app.footer.bug-report":"报告 Bug","app.footer.issues":"讨论列表","app.footer.version":"文档版本：","app.footer.author":"蚂蚁金服体验技术部出品 @ AFX","app.footer.work_with_us":"加入我们","app.footer.more-product":"更多产品","app.footer.company":"AFX","app.footer.ant-design":"蚂蚁 UI 体系","app.footer.yuque":"语雀","app.footer.yuque.slogan":"知识创作·协作平台","app.footer.fengdie":"云凤蝶","app.footer.fengdie.slogan":"移动建站平台","app.footer.zhihu":"知乎专栏","app.footer.zhihu.xtech":"体验科技专栏","app.footer.seeconf":"蚂蚁体验科技大会","app.footer.xcloud":"蚂蚁体验云","app.publish.title":"Ant Desgin Pro@2.0.0 发布！🎉 🎉 🎉","app.publish.greeting":"你好，","app.publish.intro":" 已正式发布","app.publish.tips":"，欢迎升级和体验。","app.publish.url":"https://www.yuque.com/ant-design/ant-design-pro/gg1e9a","app.publish.old-version-guide":"如果您还需要使用旧版，请查阅 ","app.publish.old-version-tips":"，也可通过点击页面右上角的 v1 菜单查看。"}},h=t(194),g=(t(358),t(359),t(360),t(361),t(231),t(257)),E=t.n(g),v=(t(206),t(205)),b=t.n(v),w=(t(364),t(517)),y=t.n(w),k=(t(232),t(258)),x=t.n(k),_=(t(366),t(509)),C=t.n(_),S=(t(233),t(180)),A=t.n(S),M=(t(268),t(228)),N=t.n(M),z=(t(48),t(371),t(495)),O=t.n(z),D=(t(12),t(373),t(378)),j=t.n(D),q=t(217);var I,L=j.a.Option,R="antd-pro@2.0.0-notification-sent";function F(e){I&&I({apiKey:"dfba5eddecb719460b9fd232af57748d",indexName:"pro_ant_design",inputSelector:"#search-box input",algoliaOptions:{facetFilters:["tags:"+("zh-CN"===e?"cn":"en")]},transformData:function(e){return e.forEach(function(e){e.url=e.url.replace("ant.design.pro",window.location.host),e.url=e.url.replace("https:",window.location.protocol)}),e},debug:!1})}"undefined"!=typeof window&&(I=t(445));var G=function(e){var a,t;function n(){for(var a,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(a=e.call.apply(e,[this].concat(n))||this).state={menuVisible:!1,menuMode:"horizontal"},a.setMenuMode=function(e){a.setState({menuMode:e?"inline":"horizontal"})},a.handleHideMenu=function(){a.setState({menuVisible:!1})},a.handleShowMenu=function(){a.setState({menuVisible:!0})},a.onMenuVisibleChange=function(e){a.setState({menuVisible:e})},a.handleSelect=function(e){window.location.href=e},a.infoNewVersion=function(){var e=a.props.intl.formatMessage;O.a.info({title:e({id:"app.publish.title"}),content:p.a.createElement("div",null,p.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"Ant Design"}),p.a.createElement("p",null,e({id:"app.publish.greeting"}),p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e({id:"app.publish.url"})},"Ant Desgin Pro ",e({id:"app.publish.intro"})),e({id:"app.publish.tips"}),e({id:"app.publish.old-version-guide"}),p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://v1.pro.ant.design"},"v1.pro.ant.design"),e({id:"app.publish.old-version-tips"}))),okText:"OK",onOk:function(){return localStorage.setItem(R,"true")},className:"new-version-info-modal",width:470})},a.handleLangChange=function(){var e=a.props.location.pathname,t=window.location.protocol+"//",n=window.location.href.substr(t.length);h.c()&&localStorage.setItem("locale",h.d(e)?"en-US":"zh-CN"),window.location.href=t+n.replace(window.location.pathname,h.a(e,!h.d(e)))},a.onVersionChange=function(e){"v1"===e&&window.open("https://v1.pro.ant.design/"),"v2"===e&&window.open("https://v2-pro.ant.design/")},a}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var o=n.prototype;return o.componentDidMount=function(){var e=this.searchInput,a=this.props.intl;document.addEventListener("keyup",function(a){83===a.keyCode&&a.target===document.body&&e&&e.focus()}),F(a.locale),"true"!==localStorage.getItem(R)&&Date.now()<new Date("2018/9/5").getTime()&&this.infoNewVersion(),F(this.props.intl.locale)},o.componentDidUpdate=function(e){var a=this.props.isMobile;a!==e.isMobile&&this.setMenuMode(a)},o.render=function(){var e=this,a=this.state,t=a.menuMode,n=a.menuVisible,o=this.props,r=o.location,i=o.intl,c=r.pathname,s=r.pathname.replace(/(^\/|\/$)/g,"").split("/").slice(0,-1).join("/")||"home";/^blog/.test(c)?s="blog":/docs/.test(c)?s="docs":"/"===c&&(s="home");var m="zh-CN"===i.locale,d=[p.a.createElement(N.a,{mode:t,selectedKeys:[s],id:"nav",key:"nav"},p.a.createElement(N.a.Item,{key:"home"},p.a.createElement(q.a,{to:h.a("/",m)},p.a.createElement(l.a,{id:"app.header.menu.home"}))),p.a.createElement(N.a.Item,{key:"docs"},p.a.createElement(q.a,{to:h.a("/docs/getting-started",m)},p.a.createElement(l.a,{id:"app.header.menu.docs"}))),p.a.createElement(N.a.Item,{key:"blog"},p.a.createElement(q.a,{to:h.a("/blog/change-theme",m)},"Blog")),"inline"===t&&p.a.createElement(N.a.Item,{key:"preview"},p.a.createElement("a",{target:"_blank",href:"http://preview.pro.ant.design/",rel:"noopener noreferrer"},p.a.createElement(l.a,{id:"app.home.preview"}))))];return p.a.createElement("div",{id:"header",className:"header"},"inline"===t?p.a.createElement(C.a,{overlayClassName:"popover-menu",placement:"bottomRight",content:d,trigger:"click",visible:n,arrowPointAtCenter:!0,onVisibleChange:this.onMenuVisibleChange},p.a.createElement(A.a,{className:"nav-phone-icon",type:"menu",onClick:this.handleShowMenu})):null,p.a.createElement(E.a,null,p.a.createElement(x.a,{xxl:4,xl:5,lg:8,md:8,sm:24,xs:24},p.a.createElement(q.a,{id:"logo",to:"/"},p.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"logo"}),p.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/tNoOLUAkyuGLXoZvaibF.svg",alt:"Ant Design Pro"}))),p.a.createElement(x.a,{xxl:20,xl:19,lg:16,md:16,sm:0,xs:0},p.a.createElement("div",{id:"search-box"},p.a.createElement(A.a,{type:"search"}),p.a.createElement(y.a,{ref:function(a){e.searchInput=a},placeholder:i.formatMessage({id:"app.header.search"})})),p.a.createElement("div",{className:"header-meta"},p.a.createElement("div",{className:"right-header"},p.a.createElement("div",{id:"lang"},p.a.createElement(b.a,{onClick:this.handleLangChange,size:"small"},p.a.createElement(l.a,{id:"app.header.lang"}))),p.a.createElement("div",{id:"preview"},p.a.createElement("a",{id:"preview-button",target:"_blank",href:"http://preview.pro.ant.design",rel:"noopener noreferrer"},p.a.createElement(b.a,{icon:"eye-o",size:"small"},p.a.createElement(l.a,{id:"app.home.preview"})))),p.a.createElement(j.a,{size:"small",onChange:this.onVersionChange,value:"stable"},p.a.createElement(L,{value:"v1"},"v1"),p.a.createElement(L,{value:"v2"},"v2"),p.a.createElement(L,{value:"stable"},"v4"))),"horizontal"===t?p.a.createElement("div",{id:"menu"},d):null))))},n}(p.a.Component),V=Object(l.d)(G),H=(t(317),t(318)),P=t.n(H);var U=function(e){var a,t;function n(){for(var a,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(a=e.call.apply(e,[this].concat(n))||this).handleLangChange=function(){var e=a.props.location.pathname,t=window.location.protocol+"//",n=window.location.href.substr(t.length);h.c()&&localStorage.setItem("locale",h.d(e)?"en-US":"zh-CN"),window.location.href=t+n.replace(window.location.pathname,h.a(e,!h.d(e)))},a}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return p.a.createElement("footer",{id:"footer"},p.a.createElement("div",{className:"footer-wrap"},p.a.createElement(E.a,null,p.a.createElement(x.a,{md:6,sm:24,xs:24},p.a.createElement("div",{className:"footer-center"},p.a.createElement("h2",null,p.a.createElement(l.a,{id:"app.footer.resources"})),p.a.createElement("div",null,p.a.createElement("a",{href:"http://ant.design"},"Ant Design")),p.a.createElement("div",null,p.a.createElement("a",{href:"http://mobile.ant.design"},"Ant Design Mobile")),p.a.createElement("div",null,p.a.createElement("a",{href:"http://ng.ant.design"},"NG-ZORRO"),p.a.createElement("span",null," - "),"Ant Design of Angular"),p.a.createElement("div",null,p.a.createElement("a",{href:"https://ng.mobile.ant.design/"},"NG-ZORRO-MOBILE")),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank ",href:"https://github.com/websemantics/awesome-ant-design"},p.a.createElement(l.a,{id:"app.footer.awesome"}))),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://kitchen.alipay.com"},"Kitchen"),p.a.createElement("span",null," - "),p.a.createElement(l.a,{id:"app.footer.kitchen"})),p.a.createElement("div",null,p.a.createElement(P.a,{dot:!0,offset:[3,0]},p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://landing.ant.design"},"Ant Design Landing"),p.a.createElement("span",null," - "),p.a.createElement(l.a,{id:"app.footer.landing"}))),p.a.createElement("div",null,p.a.createElement("a",{href:"http://scaffold.ant.design"},"Scaffolds"),p.a.createElement("span",null," - "),p.a.createElement(l.a,{id:"app.footer.scaffolds"})),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/dvajs/dva"},"dva")," ","- ",p.a.createElement(l.a,{id:"app.footer.dva"})),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://motion.ant.design"},"Ant Motion"),p.a.createElement("span",null," - "),p.a.createElement(l.a,{id:"app.footer.motion"})),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://library.ant.design/"},"Axure Library"),p.a.createElement("span",null," - "),p.a.createElement(l.a,{id:"app.footer.antd-library"})),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://ux.ant.design"},"Ant UX"),p.a.createElement("span",null," - "),p.a.createElement(l.a,{id:"app.footer.antux"})),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank ",href:"https://ant-design-pro.gitee.io/"},p.a.createElement(l.a,{id:"app.footer.chinamirror"}))))),p.a.createElement(x.a,{md:6,sm:24,xs:24},p.a.createElement("div",{className:"footer-center"},p.a.createElement("h2",null,p.a.createElement(l.a,{id:"app.footer.community"})),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://zhuanlan.zhihu.com/antdesign"},p.a.createElement(l.a,{id:"app.footer.zhihu"}))),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://medium.com/ant-design/"},"Medium")),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://twitter.com/antdesignui"},"Twitter")),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://zhuanlan.zhihu.com/xtech"},p.a.createElement(l.a,{id:"app.footer.zhihu.xtech"}))),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://seeconf.alipay.com/"},"SEE Conf"),p.a.createElement("span",null," - "),p.a.createElement(l.a,{id:"app.footer.seeconf"})))),p.a.createElement(x.a,{md:6,sm:24,xs:24},p.a.createElement("div",{className:"footer-center"},p.a.createElement("h2",null,p.a.createElement(l.a,{id:"app.footer.help"})),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank ",href:"https://github.com/ant-design/ant-design-pro"},"GitHub")),p.a.createElement("div",null,p.a.createElement("a",{href:"/docs/changelog"},p.a.createElement(l.a,{id:"app.footer.change-log"}))),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ant-design/ant-design/wiki/FAQ"},p.a.createElement(l.a,{id:"app.footer.faq"}))),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://gitter.im/ant-design/ant-design-pro"},p.a.createElement(l.a,{id:"app.footer.discuss-cn"}))),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ant-design/ant-design/issues"},p.a.createElement(l.a,{id:"app.footer.issues"}))),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://stackoverflow.com/questions/tagged/antd"},p.a.createElement(l.a,{id:"app.footer.stackoverflow"}))),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://segmentfault.com/t/antd"},p.a.createElement(l.a,{id:"app.footer.segmentfault"}))))),p.a.createElement(x.a,{md:6,sm:24,xs:24},p.a.createElement("div",{className:"footer-center"},p.a.createElement("h2",null,p.a.createElement("img",{className:"title-icon",src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"AFX Cloud"}),p.a.createElement(l.a,{id:"app.footer.more-product"})),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://yuque.com/"},p.a.createElement(l.a,{id:"app.footer.yuque"})),p.a.createElement("span",null," - "),p.a.createElement(l.a,{id:"app.footer.yuque.slogan"})),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://yunfengdie.com/"},p.a.createElement(l.a,{id:"app.footer.fengdie"})),p.a.createElement("span",null," - "),p.a.createElement(l.a,{id:"app.footer.fengdie.slogan"})),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://antv.alipay.com/"},"AntV"),p.a.createElement("span",null," - "),p.a.createElement(l.a,{id:"app.footer.data-vis"})),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://eggjs.org/"},"Egg"),p.a.createElement("span",null," - "),p.a.createElement(l.a,{id:"app.footer.eggjs"})),p.a.createElement("div",null,p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://xcloud.alipay.com/"},p.a.createElement(l.a,{id:"app.footer.xcloud"}))))))),p.a.createElement("div",{className:"bottom-bar"},"Made with ",p.a.createElement("span",{className:"heart"},"❤")," by",p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://yuque.com/afx/blog"},p.a.createElement(l.a,{id:"app.footer.company"}))))},n}(p.a.Component);var T=function(e){var a,t;function n(a){var t;t=e.call(this,a)||this;var n=a.location.pathname,o=h.d(n)?f:d;return Object(l.c)(o.data),t.state={appLocale:o},t}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e=this.props,a=e.children,t=e.location,n=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["children","location"]),r=t.pathname,i=this.state.appLocale;return p.a.createElement(l.b,{locale:i.locale,messages:i.messages},p.a.createElement(o.a,{locale:c.a},p.a.createElement("div",{className:"page-wrapper "+(("/"===r||"index-cn"===r)&&"index-page-wrapper")},p.a.createElement(V,Object.assign({},n,{location:t})),p.a.cloneElement(a,Object.assign({},a.props,{isMobile:n.isMobile})),p.a.createElement(U,Object.assign({},n,{location:t})))))},n}(p.a.Component);a.a=function(e){return p.a.createElement(s.a,{query:"(max-width: 996px)"},function(a){var t="undefined"==typeof window;return p.a.createElement(T,Object.assign({},e,{isMobile:a&&!t}))})}},333:function(e,a){},342:function(e,a){},349:function(e,a){},377:function(e,a,t){"use strict";t.r(a);t(25);var n=t(0),o=t.n(n),r=t(110);a.default=function(e){var a=e.location,t=e.pageResources;return t?o.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}}}]);
//# sourceMappingURL=2-1de7a5e9f8156726f6c8.js.map