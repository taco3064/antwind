import{r as n,U as $,z as w,Q as D,A as M,T as g,_ as j,a as m,P as A,aI as _}from"./index-DERcz0tS.js";var I=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],V=n.forwardRef(function(e,a){var r=e.prefixCls,c=r===void 0?"rc-checkbox":r,d=e.className,u=e.style,y=e.checked,o=e.disabled,f=e.defaultChecked,R=f===void 0?!1:f,v=e.type,h=v===void 0?"checkbox":v,x=e.title,i=e.onChange,P=$(e,I),s=n.useRef(null),p=n.useRef(null),E=w(R,{value:y}),k=D(E,2),C=k[0],N=k[1];n.useImperativeHandle(a,function(){return{focus:function(t){var l;(l=s.current)===null||l===void 0||l.focus(t)},blur:function(){var t;(t=s.current)===null||t===void 0||t.blur()},input:s.current,nativeElement:p.current}});var L=M(c,d,g(g({},"".concat(c,"-checked"),C),"".concat(c,"-disabled"),o)),S=function(t){o||("checked"in e||N(t.target.checked),i==null||i({target:m(m({},e),{},{type:h,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))};return n.createElement("span",{className:L,title:x,style:u,ref:p},n.createElement("input",j({},P,{className:"".concat(c,"-input"),ref:s,onChange:S,disabled:o,checked:!!C,type:h})),n.createElement("span",{className:"".concat(c,"-inner")}))});function z(e){const a=A.useRef(null),r=()=>{_.cancel(a.current),a.current=null};return[()=>{r(),a.current=_(()=>{a.current=null})},u=>{a.current&&(u.stopPropagation(),r()),e==null||e(u)}]}export{V as C,z as u};
