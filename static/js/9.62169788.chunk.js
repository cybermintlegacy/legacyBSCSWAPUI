(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[9],{972:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var i,o=n(11),c=n(14),r=n(0),l=n(5),u=n(2),d=n(77),a=n(18),s=n(17),b=n(297),j=n(80),O=n(82),x=n(40),f=n(177),h=n(151),p=n(195),m=n(1),v=Object(l.e)(u.n)(i||(i=Object(c.a)(["\n  background-color: ",";\n"])),(function(e){return e.theme.colors.dropdownDeep}));function k(){var e=Object(s.a)().account,t=Object(a.b)().t,n=Object(x.k)(),i=Object(r.useMemo)((function(){return n.map((function(e){return{liquidityToken:Object(x.a)(e),tokens:e}}))}),[n]),c=Object(r.useMemo)((function(){return i.map((function(e){return e.liquidityToken}))}),[i]),l=Object(j.f)(null!==e&&void 0!==e?e:void 0,c),k=Object(o.a)(l,2),y=k[0],g=k[1],q=Object(r.useMemo)((function(){return i.filter((function(e){var t,n=e.liquidityToken;return null===(t=y[n.address])||void 0===t?void 0:t.greaterThan("0")}))}),[i,y]),w=Object(O.c)(q.map((function(e){return e.tokens}))),A=g||(null===w||void 0===w?void 0:w.length)<q.length||(null===w||void 0===w?void 0:w.some((function(e){return!e}))),T=w.map((function(e){return Object(o.a)(e,2)[1]})).filter((function(e){return Boolean(e)}));return Object(m.jsx)(p.a,{children:Object(m.jsxs)(h.a,{children:[Object(m.jsx)(h.b,{title:t("Your Liquidity"),subtitle:t("Remove liquidity to receive tokens back")}),Object(m.jsxs)(v,{children:[e?A?Object(m.jsx)(u.eb,{color:"textSubtle",textAlign:"center",children:Object(m.jsx)(f.a,{children:t("Loading")})}):(null===T||void 0===T?void 0:T.length)>0?T.map((function(e,t){return Object(m.jsx)(b.b,{pair:e,mb:t<T.length-1?"16px":0},e.liquidityToken.address)})):Object(m.jsx)(u.eb,{color:"textSubtle",textAlign:"center",children:t("No liquidity found.")}):Object(m.jsx)(u.eb,{color:"textSubtle",textAlign:"center",children:t("Connect to a wallet to view your liquidity.")}),e&&!A&&Object(m.jsxs)(u.A,{flexDirection:"column",alignItems:"center",mt:"24px",children:[Object(m.jsx)(u.eb,{color:"textSubtle",mb:"8px",children:t("Don't see a pool you joined?")}),Object(m.jsx)(u.j,{id:"import-pool-link",variant:"secondary",scale:"sm",as:d.a,to:"/find",children:t("Find other LP tokens")})]})]}),Object(m.jsx)(u.o,{style:{textAlign:"center"},children:Object(m.jsx)(u.j,{id:"join-pool-button",as:d.a,to:"/add",width:"100%",startIcon:Object(m.jsx)(u.a,{color:"white"}),children:t("Add Liquidity")})})]})})}}}]);
//# sourceMappingURL=9.62169788.chunk.js.map