(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={head:"style_head__21Qo5"}},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(9),i=n.n(r),a=(n(16),n(2)),o=n(3),l=n(6),u=n(5),j=n(4),h=n(0);var b=function(e){return Object(h.jsxs)("div",{children:["Event Handling in functional component:",Object(h.jsx)("button",{onClick:function(){console.log("Function component event fired!")},children:"Click Event Function"}),Object(h.jsxs)("div",{children:["Method as props: ",Object(h.jsx)("button",{onClick:function(){return e.greetHandler("FunctionClick")},children:"Click Me"})]})]})},d=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).changeMessageTwo=function(){c.setState({message:"Thats all for now folks!"})},c.state={message:"Hello, this is Todo!",parentName:"Todojs"},c.greetParent=c.greetParent.bind(Object(l.a)(c)),c}return Object(o.a)(n,[{key:"changeMessage",value:function(){this.setState({message:"Thats all folks!"})}},{key:"greetParent",value:function(e){alert("Hello ".concat(this.state.parentName," from ").concat(e))}},{key:"render",value:function(){var e=this.props.type,t=this.state.message;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Todos"}),Object(h.jsxs)("p",{children:["This is a ",e," based Component"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("h3",{children:["Message: ",t]}),Object(h.jsx)("button",{onClick:this.changeMessageTwo,children:"Change Message"}),Object(h.jsx)(b,{greetHandler:this.greetParent})]})}}]),n}(s.a.Component);function m(e){var t=e.name,n=e.action,c=e.children;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{children:[t," ",n]}),Object(h.jsx)("pre",{children:c}),Object(h.jsx)("br",{})]})}var O=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).state={count:0},c}return Object(o.a)(n,[{key:"increment",value:function(){this.setState((function(e){return{count:e.count+1}}))}},{key:"incrementFive",value:function(){this.increment(),this.increment(),this.increment(),this.increment(),this.increment()}},{key:"decrement",value:function(){this.setState((function(e){return{count:e.count-1}}))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:["Count: ",this.state.count]}),Object(h.jsx)("button",{onClick:function(){return e.increment()},children:"Increment"}),Object(h.jsx)("button",{onClick:function(){return e.decrement()},children:"Decrement"}),Object(h.jsx)("button",{onClick:function(){return e.incrementFive()},children:"IncrementFive"})]})}}]),n}(c.Component),x=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"clickHandler",value:function(){console.log("Class component event fired!")}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:["Event Handling in class component:",Object(h.jsx)("button",{onClick:this.clickHandler,children:"Click Event Class"})]})}}]),n}(s.a.Component),f=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).login=function(){c.setState({isLogged:!0})},c.logout=function(){c.setState({isLogged:!1})},c.state={isLogged:!1},c}return Object(o.a)(n,[{key:"render",value:function(){var e;return e=this.state.isLogged?Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:this.logout,children:"Logout"}),Object(h.jsx)("div",{children:"You have successfully logged in! Welcome Anupam!"})]}):Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:this.login,children:"Login"}),Object(h.jsx)("div",{children:"You have logged out. Redirecting ..."})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Conditional Rendering"}),e]})}}]),n}(c.Component),g=(n(18),n(10)),v=n.n(g);var p=function(){return Object(h.jsxs)("span",{children:[Object(h.jsx)("h3",{className:"".concat("primary"," font-l"),children:"This has been modified with regular Stylesheet"})," ",Object(h.jsx)("h3",{style:{color:"blue",fontSize:"46px"},children:"This is inline styling"}),Object(h.jsx)("h3",{className:v.a.head,children:"This is module stylesheet"})]})},C=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).handleUsernameChange=function(e){c.setState({username:e.target.value})},c.handleCommentChange=function(e){c.setState({comment:e.target.value})},c.handleFrameworkChange=function(e){c.setState({framework:e.target.value})},c.handleSubmit=function(e){alert("\n        Username: ".concat(c.state.username,"\n        Comment: ").concat(c.state.comment,"\n        Framework: ").concat(c.state.framework,"\n        ")),e.preventDefault()},c.state={username:"",comment:"",framework:"react"},c}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.comment,c=e.framework;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Controlled Component"}),Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("label",{children:"Username: "}),Object(h.jsx)("input",{type:"text",value:t,onChange:this.handleUsernameChange}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Comments: "}),Object(h.jsx)("textarea",{value:n,onChange:this.handleCommentChange})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Front-end framework: "}),Object(h.jsxs)("select",{value:c,onChange:this.handleFrameworkChange,children:[Object(h.jsx)("option",{value:"react",children:"ReactJS"}),Object(h.jsx)("option",{value:"angular",children:"AngularJS"}),Object(h.jsx)("option",{value:"vue",children:"VueJS"})]})]}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]}),Object(h.jsx)("br",{})]})}}]),n}(c.Component),k=n(8),y=n.n(k),S=n(11),w=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).loadData=Object(S.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.github.com/users",e.next=3,fetch("https://api.github.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c.setState({users:n});case 8:case"end":return e.stop()}}),e)}))),c.clickButton={padding:"10px"},c.state={users:[]},c}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Rendering List fetched from https://api.github.com/users"}),Object(h.jsx)("button",{style:this.clickButton,onClick:function(){return e.loadData()},children:"Click here to load data"}),Object(h.jsx)("ul",{children:this.state.users.map((function(e){return Object(h.jsx)("li",{children:e.login},e.id)}))})]})}}]),n}(c.Component);var F=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d,{type:"Class"}),Object(h.jsx)("br",{}),Object(h.jsx)(m,{name:"Functional Class",children:Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:"We can pass `props` as an argument to the function and reuse the component by changing the attributes."})})}),Object(h.jsx)(m,{name:"Anupam passing props",action:"by destructuring them in the parameter"}),Object(h.jsx)(m,{name:"Value passed from App Component"}),Object(h.jsx)(O,{}),Object(h.jsx)(x,{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(C,{}),Object(h.jsx)(f,{}),Object(h.jsx)(p,{}),Object(h.jsx)(w,{})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root")),T()}},[[20,1,2]]]);
//# sourceMappingURL=main.4be78a6e.chunk.js.map