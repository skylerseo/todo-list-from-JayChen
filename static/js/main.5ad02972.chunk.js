(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{18:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(0),c=n(12),i=n.n(c),a=(n(18),n(2));var s=function(t,e,n){var o=Object(r.useReducer)(e,n,(function(){var e;try{e=JSON.parse(window.localStorage.getItem(t)||String(n))}catch(o){e=n}return e})),c=Object(a.a)(o,2),i=c[0],s=c[1];return Object(r.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(i))}),[t,i]),[i,s]},d=n(5),l=n(6),u=n(33),j="ADD_TODO",b="REMOVE_TODO",m="TOGGLE_TODO",O="EDIT_TODO",h=function(t,e){switch(e.type){case j:return[].concat(Object(l.a)(t),[{id:Object(u.a)(),task:e.task,completed:!1}]);case b:return t.filter((function(t){return t.id!==e.id}));case m:return t.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{completed:!t.completed}):t}));case O:return t.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{task:e.task}):t}));default:return t}},f=[{id:"0",task:"\ucc45 10\uc7a5 \uc77d\uae30",completed:!1},{id:"1",task:"\uc544\uce68 \uc0b0\ucc45\ud558\uae30",completed:!0},{id:"2",task:"\uc54c\uace0\ub9ac\uc998 10\ubb38\uc81c \ud480\uae30",completed:!1}],p=Object(r.createContext)(),x=Object(r.createContext)();function g(t){var e=s("todos",h,f),n=Object(a.a)(e,2),r=n[0],c=n[1];return Object(o.jsx)(p.Provider,{value:r,children:Object(o.jsx)(x.Provider,{value:c,children:t.children})})}var v=function(t){var e=Object(r.useState)(t),n=Object(a.a)(e,2),o=n[0],c=n[1];return[o,function(t){return c(t.target.value)},function(){return c("")}]},k=n(32),w=Object(k.a)({TodoForm:{width:"100%",marginBottom:"1rem"},input:{width:"100%",height:"2rem",background:"none",border:"none",borderBottom:"1px solid #34495e",color:"#34495e",fontSize:"1.2rem",fontWeight:"300",outline:"none"}});var y=function(){var t=w(),e=Object(r.useContext)(x),n=v(""),c=Object(a.a)(n,3),i=c[0],s=c[1],d=c[2];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),e({type:j,task:i}),d()},className:t.TodoForm,children:Object(o.jsx)("input",{placeholder:"\uc77c\uc815\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",value:i,onChange:s,className:t.input})})},C=Object(k.a)({EditTodoForm:{width:"100%",marginBottom:"1rem"},input:{width:"85%",background:"transparent",border:"none",borderBottom:"1px solid #ccc",fontSize:"1rem",transition:"0.6s",transform:"translateY(8px)","&:focus":{borderBottom:"1px solid #58b2dc",outline:"none"}}});var S=function(t){var e=t.id,n=t.task,c=t.toggleEditForm,i=C(),s=Object(r.useContext)(x),d=v(n),l=Object(a.a)(d,3),u=l[0],j=l[1],b=l[2];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),s({type:O,id:e,task:u}),c(),b()},className:i.EditTodoForm,children:Object(o.jsx)("input",{autoFocus:!0,value:u,onChange:j,onClick:function(t){return t.stopPropagation()},className:i.input})})},N=Object(k.a)({Todo:{width:"100%",height:"2.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",paddingLeft:"0.5rem",color:"#34495e",fontSize:"1rem",lineHeight:"2.5rem",overflowX:"hidden",transition:"all 0.3s ease","&:hover":{background:"rgba(0, 0, 0, 0.03)",cursor:"pointer"},"&:hover div":{opacity:"1"}},icons:{width:"40px",display:"inline-flex",alignItems:"center",justifyContent:"space-between",marginRight:"1rem",float:"right",transition:"all 0.3s",opacity:"0"}});function T(t){var e=t.id,n=t.task,c=t.completed,i=N(),s=Object(r.useContext)(x),d=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(r.useState)(t),n=Object(a.a)(e,2),o=n[0],c=n[1];return[o,function(){return c(!o)}]}(!1),l=Object(a.a)(d,2),u=l[0],j=l[1];return u?Object(o.jsx)("li",{className:i.Todo,style:{overflowY:"hidden"},onClick:function(){return j()},children:Object(o.jsx)(S,{id:e,task:n,toggleEditForm:j})}):Object(o.jsxs)("li",{className:i.Todo,onClick:function(){return s({type:m,id:e})},children:[Object(o.jsx)("span",{style:{textDecoration:c?"line-through":"",color:c?"#bdc3c7":"#34495e"},children:n}),Object(o.jsxs)("div",{className:i.icons,children:[Object(o.jsx)("i",{style:{color:"#c0392b"},className:"fas fa-trash",onClick:function(t){t.stopPropagation(),s({type:b,id:e})}}),Object(o.jsx)("i",{style:{color:"#58b2dc"},className:"fas fa-pen",onClick:function(t){t.stopPropagation(),j()}})]})]})}var D=Object(r.memo)(T);var E=function(){var t=Object(r.useContext)(p);return Object(o.jsx)("ul",{style:{paddingLeft:10,width:"95%"},children:t.map((function(t){return Object(o.jsx)(D,Object(d.a)({},t),t.id)}))})};var z,F=function(){return Object(o.jsxs)(g,{children:[Object(o.jsx)(y,{}),Object(o.jsx)(E,{})]})},B=n(3),I=function(t){return"@media (max-width: ".concat({xs:"575.98px",md:"991.98px"}[t],")")},A=Object(k.a)({App:(z={width:"50%",margin:"0 auto"},Object(B.a)(z,I("md"),{width:"70%"}),Object(B.a)(z,I("xs"),{width:"90%"}),z),header:{textAlign:"center","& h1":Object(B.a)({color:"#2c3e50",margin:"5vh 0 0 0",fontSize:"5rem",fontWeight:"300","& span":{fontWeight:"700"}},I("xs"),{fontSize:"4.5rem"}),"& h2":Object(B.a)({color:"#9aa1a5",fontSize:"1rem",fontWeight:"300"},I("xs"),{fontSize:"0.6rem"})},link:{display:"flex",justifyContent:"center",backfaceVisibility:"hidden",color:"#81b3d2",fontSize:"0.7rem",position:"relative",textDecoration:"none",transition:"0.5s color ease"}});var J=function(){var t=A();return Object(o.jsxs)("div",{className:t.App,children:[Object(o.jsxs)("header",{className:t.header,children:[Object(o.jsxs)("h1",{children:["todo",Object(o.jsx)("span",{children:"list"})]}),Object(o.jsx)("h2",{children:"A simple todolist app built with React Hooks & Context"})]}),Object(o.jsx)(F,{}),Object(o.jsx)("a",{href:"https://github.com/walkccc/react-hooks-todolist",className:t.link,children:Object(o.jsx)("strong",{children:"View source on GitHub \xa9 Jay Chen"})})]})};i.a.render(Object(o.jsx)(J,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.5ad02972.chunk.js.map