(this.webpackJsonpcartas=this.webpackJsonpcartas||[]).push([[0],{13:function(t,e,r){},14:function(t,e,r){},16:function(t,e,r){"use strict";r.r(e);var n=r(1),c=r.n(n),a=r(8),i=r.n(a),l=(r(13),r(14),r(4)),o=r(2),s=r(0),u=function(t){var e=t.url,r=t.onClick,n=t.clase;return Object(s.jsx)("img",{className:n,onClick:r,src:e})},d=function(t){var e=t.cartas,r=t.pulsarCarta;return Object(s.jsx)("div",{className:"cartasGrid",children:function(){var t=e.map((function(t){var e=t.numero;return Object(s.jsx)(u,{clase:"carta",onClick:function(){r({numero:e})},id:e,url:"/img/".concat(e,".png")},e)}));return 0==t.length?"No se han registrado cartas":t}()})},j=r(5),b=function(t,e){var r=Object(n.useState)(null==localStorage.getItem(t)),c=Object(o.a)(r,2),a=c[0],i=(c[1],Object(n.useState)((function(){return a?({key:t}.key,[]):JSON.parse(localStorage.getItem(t))}))),s=Object(o.a)(i,2),u=s[0],d=s[1];return Object(n.useEffect)((function(){return a?function(t){var e=t.key,r=t.setItem,n=t.url;fetch(n).then((function(t){return t.json()})).then((function(t){var n=t.data.reduce((function(t,e){return[].concat(Object(j.a)(t),[Object(l.a)(Object(l.a)({},e),{},{valor:parseInt(e.valor)})])}),[]);r(n),localStorage.setItem(e,JSON.stringify(n))})).catch((function(t){return console.log(t)}))}({key:t,setItem:d,url:e}):null}),[]),[u,function(e){var r=e.numero,n=e.carta,c=void 0===n?"":n,a=e.valor,i=Object(j.a)(u),l=i.find((function(t){return t.numero==r})),o=void 0!=l?function(t,e){var r=Object(j.a)(e),n=r.findIndex((function(e){return t.numero==e.numero}));return r[n]=Object.assign(t,{valor:t.valor+1}),r}(Object.assign(l,{carta:""!=c?c:l.carta}),i):[].concat(Object(j.a)(i),[{numero:r,carta:c,valor:a}]);localStorage.setItem(t,JSON.stringify(o)),d(o)}]},h={header:{},h1:{padding:"50px",textAlign:"left"}},O=function(){return Object(s.jsx)("header",{children:Object(s.jsx)("h1",{style:h.h1,children:"SHOWDOWN"})})},f={th:{padding:"15px",border:"1px solid #ddd",textAlign:"left"}},x=function(t){var e=t.children;return Object(s.jsx)("th",{style:f.th,children:e})},g={td:{padding:"15px",border:"1px solid #ddd",textAlign:"left"}},p=function(t){var e=t.children;return Object(s.jsx)("td",{style:g.td,children:e})},m={tbody:{display:"block",width:"100%"}},v=function(t){var e=t.children;return Object(s.jsx)("tbody",{style:m.tbody,children:e})},y={thead:{display:"block",width:"100%"}},C=function(t){var e=t.children;return Object(s.jsx)("thead",{style:y.thead,children:e})},k={tr:{display:"grid",gridTemplateColumns:"1fr 4fr 1fr",gridTemplateRows:"minmax(1f,auto)"}},S=function(t){var e=t.children;return Object(s.jsx)("tr",{style:k.tr,children:e})},I={tabla:{display:"block",borderCollapse:"collapse",border:"black"}},N=function(t){return t.map((function(t){return Object(s.jsxs)(S,{children:[Object(s.jsx)(p,{children:t.numero}),Object(s.jsx)(p,{children:t.carta}),Object(s.jsx)(p,{children:t.valor})]},t.numero)}))},w=function(t){var e=t.cartas;return Object(s.jsxs)("table",{style:I.tabla,children:[Object(s.jsx)(C,{children:Object(s.jsxs)(S,{children:[Object(s.jsx)(x,{children:"#"}),Object(s.jsx)(x,{children:"Carta"}),Object(s.jsx)(x,{children:"Cant"})]})}),Object(s.jsx)(v,{children:N(e)})]})},T={form:{display:"block",border:"1px solid black"}},F=function(t){var e=t.children;return Object(s.jsx)("form",{style:T.form,children:e})},D={button:{padding:"8px",marginTop:"4%",marginBottom:"4%"}},J=function(t){var e=t.children,r=t.accion;return Object(s.jsx)("button",{onClick:r,style:D.button,children:e})},B={input:{width:"100%",height:"25px"}},A=function(t){var e=t.onChange,r=t.value,n=t.type;return Object(s.jsx)("input",{type:n,onChange:function(t){e(t.target.value)},style:B.input,value:r})},G={grupo:{margin:"auto",width:"90%"}},q=function(t){var e=t.children;return Object(s.jsx)("div",{style:G.grupo,children:e})},E={label:{display:"block",marginTop:"10px",fontSize:"17px"}},H=function(t){var e=t.forHtml,r=t.children;return Object(s.jsx)("label",{style:E.label,htmlFor:e,children:r})},L={contenedor:{display:"grid",gridTemplateColumns:"1fr",gap:"5%"}},P=function(t){var e=t.cartas,r=t.setCartas,c=Object(n.useState)(""),a=Object(o.a)(c,2),i=a[0],l=a[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),j=d[0],b=d[1];return Object(s.jsxs)("div",{style:L.contenedor,children:[Object(s.jsx)(w,{cartas:e}),Object(s.jsxs)(F,{children:[Object(s.jsx)("h4",{style:{margin:"3%"},children:"Registro Cartas"}),Object(s.jsxs)(q,{children:[Object(s.jsx)(H,{children:"Numero"}),Object(s.jsx)(A,{type:"number",onChange:l,value:i})]}),Object(s.jsxs)(q,{children:[Object(s.jsx)(H,{children:"Carta"}),Object(s.jsx)(A,{onChange:b,value:j})]}),Object(s.jsx)(q,{children:Object(s.jsx)(J,{accion:function(t){t.preventDefault(),function(t,e,r){0!=t.length?0!=e.length?parseInt(t)<1||parseInt(t)>13?alert("Numero debe ser mayor que 0 y menor que 14"):r({numero:t,carta:e,valor:0}):alert("Debe ingresar carta"):alert("Debe ingresar numero")}(i,j,r)},children:"Guardar"})})]})]})},R={width:"95%",margin:"auto",marginBottom:"10%"},W=function(){var t=b("cartas","https://carlosreneas.github.io/endpoints/cartas.json"),e=Object(o.a)(t,2),r=e[0],c=e[1];return Object(s.jsxs)(n.Fragment,{children:[Object(s.jsx)(O,{}),Object(s.jsxs)("div",{className:"containerGrid",style:Object(l.a)({},R),children:[Object(s.jsx)(d,{cartas:r,pulsarCarta:c}),Object(s.jsx)(P,{setCartas:c,cartas:r})]})]})};var z=function(){return Object(s.jsx)(W,{})},M=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(e){var r=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),c(t),a(t),i(t)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(z,{})}),document.getElementById("root")),M()}},[[16,1,2]]]);
//# sourceMappingURL=main.429401ec.chunk.js.map