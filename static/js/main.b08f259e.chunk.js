(this["webpackJsonpmy-markdown"]=this["webpackJsonpmy-markdown"]||[]).push([[0],{17:function(e,n,t){e.exports=t(28)},22:function(e,n,t){},23:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(11),l=t.n(r),c=(t(22),t(23),t(24),function(){return o.a.createElement("header",{className:"jumbotron"},o.a.createElement("h1",{className:"text-center title"},o.a.createElement("i",{className:"fas fa-code"}),"My Markdown"))}),i=t(12),s=t(13),d=t(15),m=t(14),u=t(16),h=t(25),w=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(o)))).state={markdown:"\n# Heading1\n## Heading2\n### Heading 3\n---        \n#### I am a smaller heading\n \n Paragraphs are separated\nby a \n       blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline\n        break\n\nText attributes *italic*, **bold**, or, wow... **_both italic and bold!_** \n\n        .\n\nUnordered list:\n\n  * bananas\n  * kiwi\n  * oranges\n\n        \n\nNumbered list:\n\n  1. milk\n  2. eggs\n  3. butter\n \n        Hey, you can also ~~cross things out~~.\n        \n### More awesome stuff\n Inline code:\nFrom the console, run <code>console.log('Hello world!');</code>to see the output. \n\n---\n\n#### Code block:<code>\n javascript\nfunction sayHello() {\n return 'Hello world!';\n}</code>\n\n---\n\n#### \n         \n#### Blockquote:  \n> Simplicity is about subtracting the obvious and adding the meaningful. -John Maeda \n\n---\n#### \n         \n Some code `<div></div>`  `<pre></pre>` between 2 backticks.\n There's also a [link](https://www.google.com)\n\nLife is more beautiful with embedded images:![React Logo w/ Text](https://goo.gl/Umyytc) "},t.writeMarkdown=function(e){this.setState({markdown:e})},t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this,n=this.state.markdown;return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("h4",{className:"text-center"},"Input"),o.a.createElement("textarea",{rows:"20",cols:"60",type:"text",value:n,onChange:function(n){return e.writeMarkdown(n.target.value)},id:"editor",className:"col-xs-10"})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:h(n)},id:"preview",className:" col-md-6 col-xs-10 "}))}}]),n}(o.a.Component);var g=function(){return o.a.createElement("div",null,o.a.createElement(c,null),o.a.createElement("div",{className:"container-fluid"},o.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.b08f259e.chunk.js.map