(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(17),a=n.n(s),j=(n(6),n(2)),i=n(0);var l=function(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),n=t[0],r=t[1],s="button";return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h2",{children:["Count: ",n]}),Object(i.jsx)("button",{className:s,onClick:function(){return r(n+1)},children:"Unsafe Increment"})," ",Object(i.jsx)("button",{className:s,onClick:function(){return r(0)},children:"Reset"})," ",Object(i.jsx)("button",{className:s,onClick:function(){return r((function(e){return e+1}))},children:"Increment"})," ",Object(i.jsx)("button",{className:s,onClick:function(){return r((function(e){return e-1}))},children:"Decrement"})," ",Object(i.jsx)("button",{className:s,onClick:function(){for(var e=0;e<5;e++)r((function(e){return e+1}))},children:"Increment Five"})]})},o=n(5),u=function(){var e=Object(c.useState)({firstName:"",lastName:""}),t=Object(j.a)(e,2),n=t[0],r=t[1];function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}var a=null;return a=0===n.firstName.length&&0===n.lastName.length?"guest":"".concat(s(n.firstName)," ").concat(s(n.lastName)),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("input",{type:"text",placeholder:"firstname",value:n.firstName,onChange:function(e){return r(Object(o.a)(Object(o.a)({},n),{},{firstName:e.target.value}))}}),Object(i.jsx)("input",{type:"text",placeholder:"lastname",value:n.lastName,onChange:function(e){return r(Object(o.a)(Object(o.a)({},n),{},{lastName:e.target.value}))}}),Object(i.jsxs)("h3",{children:["Welcome",Object(i.jsxs)("span",{className:"greet",children:[" ",a]})]})]})},b=n(19),O=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(j.a)(s,2),l=a[0],o=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{type:"text",onChange:function(e){return o(e.target.value)},value:l}),Object(i.jsx)("button",{className:"button",onClick:function(){""!==l&&r([].concat(Object(b.a)(n),[{id:n.length,value:l}])),console.log(n),o("")},children:"+"})]}),Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:n.map((function(e){return Object(i.jsx)("li",{children:e.value},e.id)}))})})]})},d=function(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){document.title="Clicked ".concat(n," times")})),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("button",{className:"button",onClick:function(){return r((function(e){return e+1}))},children:["Clicked ",n," times"]})})},h=(new Date).getFullYear()+1,f=new Date("January 01 ".concat(h," 00:00:00")),x=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(j.a)(s,2),l=a[0],o=a[1],u=Object(c.useState)(""),b=Object(j.a)(u,2),O=b[0],d=b[1],h=Object(c.useState)(""),x=Object(j.a)(h,2),m=x[0],v=x[1],g=Object(c.useRef)(),p=Object(c.useCallback)((function(){var e=f-(new Date).getTime();return e<0&&clearInterval(g.current),e}),[f]);return Object(c.useEffect)((function(){console.log("Day firing!"),r(Math.floor(p()/1e3/60/60/24))}),[l,p]),Object(c.useEffect)((function(){console.log("Hour firing!"),o(Math.floor(p()/1e3/60/60)%24)}),[O,p]),Object(c.useEffect)((function(){console.log("Minute firing!"),d(Math.floor(p()/1e3/60)%60)}),[m,p]),Object(c.useEffect)((function(){return console.log("Second firing!"),g.current=setInterval((function(){v(Math.floor(p()/1e3)%60)}),1e3),function(){clearInterval(g.current)}}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"countdown",children:[Object(i.jsx)("input",{type:"date",onChange:function(e){f=new Date(e.target.value),console.log(f)},id:"count-table"}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{htmlFor:"count-table",children:Object(i.jsx)("table",{className:"count",children:Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:l}),Object(i.jsx)("td",{children:O}),Object(i.jsx)("td",{children:m})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"DAYS"}),Object(i.jsx)("th",{children:"HOURS"}),Object(i.jsx)("th",{children:"MINUTES"}),Object(i.jsx)("th",{children:"SECONDS"})]})]})})})]})})},m=n(18),v=n.n(m),g=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){v.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){r(e.data)}))}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{children:n.slice(0,10).map((function(e){return Object(i.jsxs)("div",{className:"posts",children:[Object(i.jsx)("h3",{children:e.title}),Object(i.jsx)("p",{children:e.body})]},e.id)}))})})},p=function(){var e=Object(c.useState)(!0),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("button",{className:"button",onClick:function(){r(!n)},children:n?"Hide Posts":"Show Posts"}),n?Object(i.jsx)(g,{}):null]})},C=function(){var e=Object(c.useContext)(S),t=Object(c.useContext)(k);return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{children:["Using useContext to consume these following values ",e," ",t]})})};var N=function(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h2",{className:"header",children:["Hook App ",Object(i.jsx)(x,{})]}),Object(i.jsxs)("div",{className:"".concat("container"),children:[Object(i.jsx)(u,{}),Object(i.jsx)(l,{}),Object(i.jsx)(O,{}),Object(i.jsx)(d,{}),Object(i.jsx)(p,{}),Object(i.jsx)(S.Provider,{value:"Anupam",children:Object(i.jsx)(k.Provider,{value:"Chakrawarti",children:Object(i.jsx)(C,{})})})]})]})},S=r.a.createContext(),k=r.a.createContext(),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root")),F()},6:function(e,t,n){}},[[43,1,2]]]);
//# sourceMappingURL=main.6d1e41ce.chunk.js.map