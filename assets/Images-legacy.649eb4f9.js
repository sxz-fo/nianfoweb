!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.23fe6159.js","./Folder-legacy.7fa24324.js","./Layout-legacy.7a2a6407.js","./useUtil-legacy.779c990b.js","./ImageWithError-legacy.0c16d866.js","./icon-legacy.bcf70b8f.js","./Paginator-legacy.332c882e.js","./index-legacy.3831395e.js","./index-legacy.2ae03479.js","./api-legacy.aefd9cd6.js","./Markdown-legacy.a7360343.js","./index-legacy.503eac67.js","./FolderTree-legacy.eb81be28.js"],(function(n){"use strict";var t,r,o,a,i,c,u,l,f,s,g,d,y,b,j,h,p,m,v,x,w,$,k,A,M,S;return{setters:[function(e){t=e.f,r=e.a7,o=e.ah,a=e.e,i=e.t,c=e.aF,u=e.W,l=e.aE,f=e.aH,s=e.cl,g=e.ak,d=e.m,y=e.bv,b=e.af,j=e.ag,h=e.v,p=e.o,m=e.bg},function(e){v=e.b},function(e){x=e.a,w=e.M},function(e){$=e.c,k=e.a},function(e){A=e.I},function(e){M=e.O,S=e.g},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var E=function(n){if((0,$().isHide)(n.obj)||n.obj.type!==M.IMAGE)return null;var h=x().setPathAs,p=t(o,{get color(){return r()},boxSize:"$12",get as(){return S(n.obj)}}),m=e(a(!1),2),E=m[0],I=m[1],C=i((function(){return c()&&(E()||n.obj.selected)})),F=v({id:1}).show,z=k().rawLink;return t(w.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return t(u,{w:"$full",class:"image-item",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:"2px solid ".concat(r())}},onMouseEnter:function(){I(!0),h(n.obj.name,n.obj.is_dir,!0)},onMouseLeave:function(){I(!1)},onContextMenu:function(e){l((function(){f(!1),s(n.index,!0,!0)})),F(e,{props:n.obj})},get children(){return t(g,{w:"$full",pos:"relative",get children(){return[t(d,{get when(){return C()},get children(){return t(y,{pos:"absolute",left:"$1",top:"$1",get checked(){return n.obj.selected},onChange:function(e){s(n.index,e.target.checked)}})}}),t(A,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return t(b,{size:"lg"})},fallbackErr:p,get src(){return z(n.obj)},loading:"lazy",onClick:function(){j.emit("gallery",n.obj.name)}})]}})}})}})};n("default",(function(){return t(m,{w:"$full",gap:"$1",flexWrap:"wrap",get children(){return t(h,{get each(){return p.objs},children:function(e,n){return t(E,{obj:e,get index(){return n()}})}})}})}))}}}))}();
