import{d as i,u,f as e,bf as c,I as g,_ as p,J as d,bN as m,a0 as o,bg as h,bc as a,B as s,W as f}from"./index.583ded0e.js";import{a as $}from"./Layout.0a02d4ec.js";import{L as b}from"./index.ce87ac65.js";import"./index.a3f69cd9.js";import"./Markdown.5916ce5b.js";import"./api.7f2baa4b.js";import"./useUtil.a480a79b.js";import"./index.63d29e53.js";import"./FolderTree.2a97c636.js";const B=()=>{const t=i(),{refresh:n}=$(),{back:l}=u();return e(f,{w:{"@initial":"$full","@md":"$lg"},p:"$8",spacing:"$3",alignItems:"start",get children(){return[e(c,{get children(){return t("home.input_password")}}),e(g,{type:"password",get value(){return p()},get background(){return d("$neutral3","$neutral2")()},onKeyDown:r=>{r.key==="Enter"&&n(!0)},onInput:r=>m(r.currentTarget.value)}),e(o,{w:"$full",justifyContent:"space-between",get children(){return[e(h,{fontSize:"$sm",color:"$neutral10",direction:{"@initial":"column","@sm":"row"},columnGap:"$1",get children(){return[e(a,{get children(){return t("global.have_account")}}),e(a,{color:"$info9",as:b,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return t("global.go_login")}})]}}),e(o,{spacing:"$2",get children(){return[e(s,{colorScheme:"neutral",onClick:l,get children(){return t("global.back")}}),e(s,{onClick:()=>n(!0),get children(){return t("global.ok")}})]}})]}})]}})};export{B as default};
