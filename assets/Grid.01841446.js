import{f as t,a7 as g,ah as b,e as h,t as d,aF as f,W as j,z as x,aE as $,aH as w,cl as i,ak as k,ag as v,m as l,bv as C,af as p,bc as y,v as I,o as M,b$ as S}from"./index.583ded0e.js";import{b as z}from"./Folder.4aaef7e1.js";import{a as E,M as O}from"./Layout.0a02d4ec.js";import{c as P}from"./useUtil.a480a79b.js";import{n as A}from"./index.ce87ac65.js";import{I as G}from"./ImageWithError.240d4840.js";import{g as H,O as L}from"./icon.435067f9.js";import"./Paginator.f4a3e601.js";import"./index.a3f69cd9.js";import"./api.7f2baa4b.js";import"./Markdown.5916ce5b.js";import"./index.63d29e53.js";import"./FolderTree.2a97c636.js";const W=e=>{const{isHide:a}=P();if(a(e.obj))return null;const{setPathAs:s}=E(),o=t(b,{get color(){return g()},boxSize:"$12",get as(){return H(e.obj)}}),[c,n]=h(!1),u=d(()=>f()&&(c()||e.obj.selected)),{show:m}=z({id:1});return t(O.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(j,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:x()}},as:A,get href(){return e.obj.name},onMouseEnter:()=>{n(!0),s(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{n(!1)},onContextMenu:r=>{$(()=>{w(!1),i(e.index,!0,!0)}),m(r,{props:e.obj})},get children(){return[t(k,{class:"item-thumbnail",h:"70px",w:"$full","on:click":r=>{e.obj.type===L.IMAGE&&(r.stopPropagation(),r.preventDefault(),v.emit("gallery",e.obj.name))},pos:"relative",get children(){return[t(l,{get when(){return u()},get children(){return t(C,{pos:"absolute",left:"$1",top:"$1","on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{i(e.index,r.target.checked)}})}}),t(l,{get when(){return e.obj.thumb},fallback:o,get children(){return t(G,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return t(p,{size:"lg"})},fallbackErr:o,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),t(y,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})},X=()=>t(S,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",get children(){return t(I,{get each(){return M.objs},children:(e,a)=>t(W,{obj:e,get index(){return a()}})})}});export{X as default};
