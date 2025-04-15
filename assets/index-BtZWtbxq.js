import{r as o,I as te,_ as ne,J as G,c0 as re,A as H,p as U,t as ae,v as ie,b1 as le,aY as ce,aI as ue,Z as fe,N as oe,bp as pe,aN as Z,a0 as de,ay as me,O as ve,ai as se,bk as ge,a5 as ee,B as Ce,c1 as ye,c2 as be}from"./index-DERcz0tS.js";import{I as Q,u as Oe}from"./Input-Cy4pw4s5.js";var he={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},xe=function(s,r){return o.createElement(te,ne({},s,{ref:r,icon:he}))},Ie=o.forwardRef(xe);const Pe=e=>{const{getPrefixCls:s,direction:r}=o.useContext(G),{prefixCls:t,className:n}=e,u=s("input-group",t),g=s("input"),[v,C,y]=re(g),b=H(u,y,{[`${u}-lg`]:e.size==="large",[`${u}-sm`]:e.size==="small",[`${u}-compact`]:e.compact,[`${u}-rtl`]:r==="rtl"},C,n),f=o.useContext(U),P=o.useMemo(()=>Object.assign(Object.assign({},f),{isFormItemInput:!1}),[f]);return v(o.createElement("span",{className:b,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},o.createElement(U.Provider,{value:P},e.children)))},Ee=e=>{const{componentCls:s,paddingXS:r}=e;return{[s]:{display:"inline-flex",alignItems:"center",flexWrap:"nowrap",columnGap:r,"&-rtl":{direction:"rtl"},[`${s}-input`]:{textAlign:"center",paddingInline:e.paddingXXS},[`&${s}-sm ${s}-input`]:{paddingInline:e.calc(e.paddingXXS).div(2).equal()},[`&${s}-lg ${s}-input`]:{paddingInline:e.paddingXS}}}},Se=ae(["Input","OTP"],e=>{const s=ie(e,le(e));return[Ee(s)]},ce);var we=function(e,s){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)s.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};const je=o.forwardRef((e,s)=>{const{value:r,onChange:t,onActiveChange:n,index:u,mask:g}=e,v=we(e,["value","onChange","onActiveChange","index","mask"]),C=r&&typeof g=="string"?g:r,y=p=>{t(u,p.target.value)},b=o.useRef(null);o.useImperativeHandle(s,()=>b.current);const f=()=>{ue(()=>{var p;const O=(p=b.current)===null||p===void 0?void 0:p.input;document.activeElement===O&&O&&O.select()})},P=p=>{const{key:O,ctrlKey:_,metaKey:A}=p;O==="ArrowLeft"?n(u-1):O==="ArrowRight"?n(u+1):O==="z"&&(_||A)&&p.preventDefault(),f()},$=p=>{p.key==="Backspace"&&!r&&n(u-1),f()};return o.createElement(Q,Object.assign({type:g===!0?"password":"text"},v,{ref:b,value:C,onInput:y,onFocus:f,onKeyDown:P,onKeyUp:$,onMouseDown:f,onMouseUp:f}))});var ze=function(e,s){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)s.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};function q(e){return(e||"").split("")}const $e=e=>{const{index:s,prefixCls:r,separator:t}=e,n=typeof t=="function"?t(s):t;return n?o.createElement("span",{className:`${r}-separator`},n):null},_e=o.forwardRef((e,s)=>{const{prefixCls:r,length:t=6,size:n,defaultValue:u,value:g,onChange:v,formatter:C,separator:y,variant:b,disabled:f,status:P,autoFocus:$,mask:p,type:O,onInput:_,inputMode:A}=e,w=ze(e,["prefixCls","length","size","defaultValue","value","onChange","formatter","separator","variant","disabled","status","autoFocus","mask","type","onInput","inputMode"]),{getPrefixCls:j,direction:T}=o.useContext(G),E=j("otp",r),S=fe(w,{aria:!0,data:!0,attr:!0}),[M,D,N]=Se(E),h=oe(a=>n??a),z=o.useContext(U),R=pe(z.status,P),B=o.useMemo(()=>Object.assign(Object.assign({},z),{status:R,hasFeedback:!1,feedbackIcon:null}),[z,R]),I=o.useRef(null),x=o.useRef({});o.useImperativeHandle(s,()=>({focus:()=>{var a;(a=x.current[0])===null||a===void 0||a.focus()},blur:()=>{var a;for(let i=0;i<t;i+=1)(a=x.current[i])===null||a===void 0||a.blur()},nativeElement:I.current}));const V=a=>C?C(a):a,[L,X]=o.useState(()=>q(V(u||"")));o.useEffect(()=>{g!==void 0&&X(q(g))},[g]);const J=Z(a=>{X(a),_&&_(a),v&&a.length===t&&a.every(i=>i)&&a.some((i,c)=>L[c]!==i)&&v(a.join(""))}),W=Z((a,i)=>{let c=de(L);for(let m=0;m<a;m+=1)c[m]||(c[m]="");i.length<=1?c[a]=i:c=c.slice(0,a).concat(q(i)),c=c.slice(0,t);for(let m=c.length-1;m>=0&&!c[m];m-=1)c.pop();const F=V(c.map(m=>m||" ").join(""));return c=q(F).map((m,Y)=>m===" "&&!c[Y]?c[Y]:m),c}),l=(a,i)=>{var c;const F=W(a,i),m=Math.min(a+i.length,t-1);m!==a&&F[a]!==void 0&&((c=x.current[m])===null||c===void 0||c.focus()),J(F)},d=a=>{var i;(i=x.current[a])===null||i===void 0||i.focus()},k={variant:b,disabled:f,status:R,mask:p,type:O,inputMode:A};return M(o.createElement("div",Object.assign({},S,{ref:I,className:H(E,{[`${E}-sm`]:h==="small",[`${E}-lg`]:h==="large",[`${E}-rtl`]:T==="rtl"},N,D)}),o.createElement(U.Provider,{value:B},Array.from({length:t}).map((a,i)=>{const c=`otp-${i}`,F=L[i]||"";return o.createElement(o.Fragment,{key:c},o.createElement(je,Object.assign({ref:m=>{x.current[i]=m},index:i,size:h,htmlSize:1,className:`${E}-input`,onChange:l,value:F,onActiveChange:d,autoFocus:i===0&&$},k)),i<t-1&&o.createElement($e,{separator:y,index:i,prefixCls:E}))}))))});var Re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},ke=function(s,r){return o.createElement(te,ne({},s,{ref:r,icon:Re}))},Ae=o.forwardRef(ke),Me=function(e,s){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)s.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};const Ne=e=>e?o.createElement(Ie,null):o.createElement(Ae,null),Te={click:"onClick",hover:"onMouseOver"},Be=o.forwardRef((e,s)=>{const{disabled:r,action:t="click",visibilityToggle:n=!0,iconRender:u=Ne}=e,g=o.useContext(me),v=r??g,C=typeof n=="object"&&n.visible!==void 0,[y,b]=o.useState(()=>C?n.visible:!1),f=o.useRef(null);o.useEffect(()=>{C&&b(n.visible)},[C,n]);const P=Oe(f),$=()=>{var h;if(v)return;y&&P();const z=!y;b(z),typeof n=="object"&&((h=n.onVisibleChange)===null||h===void 0||h.call(n,z))},p=h=>{const z=Te[t]||"",R=u(y),B={[z]:$,className:`${h}-icon`,key:"passwordIcon",onMouseDown:I=>{I.preventDefault()},onMouseUp:I=>{I.preventDefault()}};return o.cloneElement(o.isValidElement(R)?R:o.createElement("span",null,R),B)},{className:O,prefixCls:_,inputPrefixCls:A,size:w}=e,j=Me(e,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:T}=o.useContext(G),E=T("input",A),S=T("input-password",_),M=n&&p(S),D=H(S,O,{[`${S}-${w}`]:!!w}),N=Object.assign(Object.assign({},ve(j,["suffix","iconRender","visibilityToggle"])),{type:y?"text":"password",className:D,prefixCls:E,suffix:M});return w&&(N.size=w),o.createElement(Q,Object.assign({ref:se(s,f)},N))});var Fe=function(e,s){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)s.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};const De=o.forwardRef((e,s)=>{const{prefixCls:r,inputPrefixCls:t,className:n,size:u,suffix:g,enterButton:v=!1,addonAfter:C,loading:y,disabled:b,onSearch:f,onChange:P,onCompositionStart:$,onCompositionEnd:p}=e,O=Fe(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:_,direction:A}=o.useContext(G),w=o.useRef(!1),j=_("input-search",r),T=_("input",t),{compactSize:E}=ge(j,A),S=oe(l=>{var d;return(d=u??E)!==null&&d!==void 0?d:l}),M=o.useRef(null),D=l=>{l!=null&&l.target&&l.type==="click"&&f&&f(l.target.value,l,{source:"clear"}),P==null||P(l)},N=l=>{var d;document.activeElement===((d=M.current)===null||d===void 0?void 0:d.input)&&l.preventDefault()},h=l=>{var d,k;f&&f((k=(d=M.current)===null||d===void 0?void 0:d.input)===null||k===void 0?void 0:k.value,l,{source:"input"})},z=l=>{w.current||y||h(l)},R=typeof v=="boolean"?o.createElement(ye,null):null,B=`${j}-button`;let I;const x=v||{},V=x.type&&x.type.__ANT_BUTTON===!0;V||x.type==="button"?I=ee(x,Object.assign({onMouseDown:N,onClick:l=>{var d,k;(k=(d=x==null?void 0:x.props)===null||d===void 0?void 0:d.onClick)===null||k===void 0||k.call(d,l),h(l)},key:"enterButton"},V?{className:B,size:S}:{})):I=o.createElement(Ce,{className:B,type:v?"primary":void 0,size:S,disabled:b,key:"enterButton",onMouseDown:N,onClick:h,loading:y,icon:R},v),C&&(I=[I,ee(C,{key:"addonAfter"})]);const L=H(j,{[`${j}-rtl`]:A==="rtl",[`${j}-${S}`]:!!S,[`${j}-with-button`]:!!v},n),X=Object.assign(Object.assign({},O),{className:L,prefixCls:T,type:"search"}),J=l=>{w.current=!0,$==null||$(l)},W=l=>{w.current=!1,p==null||p(l)};return o.createElement(Q,Object.assign({ref:se(M,s),onPressEnter:z},X,{size:S,onCompositionStart:J,onCompositionEnd:W,addonAfter:I,suffix:g,onChange:D,disabled:b}))}),K=Q;K.Group=Pe;K.Search=De;K.TextArea=be;K.Password=Be;K.OTP=_e;export{K as I};
