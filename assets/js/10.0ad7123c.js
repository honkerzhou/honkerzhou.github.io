(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{281:function(t,v,_){t.exports=_.p+"assets/img/event-loop.e8a1c733.jpg"},309:function(t,v,_){"use strict";_.r(v);var i=_(14),e=Object(i.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"事件循环"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),v("p",[t._v("不爱看文字的，可以先看下这个视频（英音中字）：2014年JS开发者大会上philip_roberts的演讲——"),v("a",{attrs:{href:"https://www.bilibili.com/video/BV1k7411q7rV",target:"_blank",rel:"noopener noreferrer"}},[t._v("What the heck is this event loop anyway?"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"是啥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#是啥"}},[t._v("#")]),t._v(" 是啥")]),t._v(" "),v("p",[t._v("事件循环是一种机制，用来处理程序中代码块的执行——调用JavaScript引擎。")]),t._v(" "),v("p",[t._v("从上面的定义就可以知道，事件循环并不是由JavaScript引擎实现的（"),v("strong",[t._v("初学者注意")]),t._v("），而是由JavaScript引擎所在的宿主环境（eg：浏览器、node.js）实现的。")]),t._v(" "),v("h2",{attrs:{id:"长啥样"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#长啥样"}},[t._v("#")]),t._v(" 长啥样")]),t._v(" "),v("p",[v("img",{attrs:{src:_(281),alt:"一次事件循环"}})]),t._v(" "),v("p",[t._v("先看下，图中的宏任务、微任务是咋产生的？")]),t._v(" "),v("ul",[v("li",[t._v("宏任务（Macrotask）:\n"),v("ul",[v("li",[t._v("script 标签的代码加载")]),t._v(" "),v("li",[t._v("I/O")]),t._v(" "),v("li",[t._v("setTimeout")]),t._v(" "),v("li",[t._v("setInterval")]),t._v(" "),v("li",[t._v("setImmediate(node.js)")]),t._v(" "),v("li",[t._v("requestAnimationFrame(浏览器)")]),t._v(" "),v("li",[t._v("UI 渲染（有争议）")])])]),t._v(" "),v("li",[t._v("微任务（Microtask）:\n"),v("ul",[v("li",[t._v("promise.then")]),t._v(" "),v("li",[t._v("promise.catch")]),t._v(" "),v("li",[t._v("promise.finally")]),t._v(" "),v("li",[t._v("process.nextTick(node.js)")]),t._v(" "),v("li",[t._v("MutationObserver(浏览器)")])])])]),t._v(" "),v("p",[t._v("事件循环过程：")]),t._v(" "),v("ol",[v("li",[t._v("先执行同步阻塞任务,全部执行完毕后")]),t._v(" "),v("li",[t._v("执行完所有微任务队列的任务")]),t._v(" "),v("li",[t._v("检查渲染，如需渲染则由GUI线程接管渲染，渲染完毕后")]),t._v(" "),v("li",[t._v("执行宏任务队列中的下一个宏任务，执行完后")]),t._v(" "),v("li",[t._v("执行完所有微任务队列的任务")]),t._v(" "),v("li",[t._v("检查渲染，如需渲染则由GUI线程接管渲染，渲染完毕后")]),t._v(" "),v("li",[t._v("重复步骤4、5、6，直到宏任务队列和微任务队列都清空了，结束事件循环")])]),t._v(" "),v("p",[v("strong",[t._v("注意")]),t._v("：以上执行过程中，只要碰到新的宏任务和微任务，都会添加到相应任务队列的末尾")])])}),[],!1,null,null,null);v.default=e.exports}}]);