import{r as t,h as te,m as ne,i as re,k as se,aq as oe,C as W,U as ae,d as ie,bM as le,aE as X,c as G,ak as ce,t as de,a8 as ue}from"./index-CIDXRfH1.js";import{P as fe}from"./index-Dlwg80Bh.js";const _=t.createContext({}),ge=e=>{const{antCls:s,componentCls:o,iconCls:n,avatarBg:a,avatarColor:z,containerSize:h,containerSizeLG:v,containerSizeSM:p,textFontSize:g,textFontSizeLG:C,textFontSizeSM:N,borderRadius:m,borderRadiusLG:u,borderRadiusSM:O,lineWidth:R,lineType:k}=e,E=(r,f,$)=>({width:r,height:r,borderRadius:"50%",[`&${o}-square`]:{borderRadius:$},[`&${o}-icon`]:{fontSize:f,[`> ${n}`]:{margin:0}}});return{[o]:Object.assign(Object.assign(Object.assign(Object.assign({},re(e)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:z,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:a,border:`${se(R)} ${k} transparent`,"&-image":{background:"transparent"},[`${s}-image-img`]:{display:"block"}}),E(h,g,m)),{"&-lg":Object.assign({},E(v,C,u)),"&-sm":Object.assign({},E(p,N,O)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},me=e=>{const{componentCls:s,groupBorderColor:o,groupOverlapping:n,groupSpace:a}=e;return{[`${s}-group`]:{display:"inline-flex",[s]:{borderColor:o},"> *:not(:first-child)":{marginInlineStart:n}},[`${s}-group-popover`]:{[`${s} + ${s}`]:{marginInlineStart:a}}}},pe=e=>{const{controlHeight:s,controlHeightLG:o,controlHeightSM:n,fontSize:a,fontSizeLG:z,fontSizeXL:h,fontSizeHeading3:v,marginXS:p,marginXXS:g,colorBorderBg:C}=e;return{containerSize:s,containerSizeLG:o,containerSizeSM:n,textFontSize:Math.round((z+h)/2),textFontSizeLG:v,textFontSizeSM:a,groupSpace:g,groupOverlapping:-p,groupBorderColor:C}},q=te("Avatar",e=>{const{colorTextLightSolid:s,colorTextPlaceholder:o}=e,n=ne(e,{avatarBg:o,avatarColor:s});return[ge(n),me(n)]},pe);var Se=function(e,s){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&s.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)s.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const he=(e,s)=>{const[o,n]=t.useState(1),[a,z]=t.useState(!1),[h,v]=t.useState(!0),p=t.useRef(null),g=t.useRef(null),C=oe(s,p),{getPrefixCls:N,avatar:m}=t.useContext(W),u=t.useContext(_),O=()=>{if(!g.current||!p.current)return;const i=g.current.offsetWidth,l=p.current.offsetWidth;if(i!==0&&l!==0){const{gap:S=4}=e;S*2<l&&n(l-S*2<i?(l-S*2)/i:1)}};t.useEffect(()=>{z(!0)},[]),t.useEffect(()=>{v(!0),n(1)},[e.src]),t.useEffect(O,[e.gap]);const R=()=>{const{onError:i}=e;(i==null?void 0:i())!==!1&&v(!1)},{prefixCls:k,shape:E,size:r,src:f,srcSet:$,icon:x,className:A,rootClassName:L,alt:B,draggable:I,children:y,crossOrigin:j}=e,b=Se(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),c=ae(i=>{var l,S;return(S=(l=r??(u==null?void 0:u.size))!==null&&l!==void 0?l:i)!==null&&S!==void 0?S:"default"}),w=Object.keys(typeof c=="object"?c||{}:{}).some(i=>["xs","sm","md","lg","xl","xxl"].includes(i)),M=ie(w),F=t.useMemo(()=>{if(typeof c!="object")return{};const i=le.find(S=>M[S]),l=c[i];return l?{width:l,height:l,fontSize:l&&(x||y)?l/2:18}:{}},[M,c]),d=N("avatar",k),T=X(d),[D,J,K]=q(d,T),Q=G({[`${d}-lg`]:c==="large",[`${d}-sm`]:c==="small"}),H=t.isValidElement(f),Y=E||(u==null?void 0:u.shape)||"circle",Z=G(d,Q,m==null?void 0:m.className,`${d}-${Y}`,{[`${d}-image`]:H||f&&h,[`${d}-icon`]:!!x},K,T,A,L,J),ee=typeof c=="number"?{width:c,height:c,fontSize:x?c/2:18}:{};let P;if(typeof f=="string"&&h)P=t.createElement("img",{src:f,draggable:I,srcSet:$,onError:R,alt:B,crossOrigin:j});else if(H)P=f;else if(x)P=x;else if(a||o!==1){const i=`scale(${o})`,l={msTransform:i,WebkitTransform:i,transform:i};P=t.createElement(ce,{onResize:O},t.createElement("span",{className:`${d}-string`,ref:g,style:Object.assign({},l)},y))}else P=t.createElement("span",{className:`${d}-string`,style:{opacity:0},ref:g},y);return delete b.onError,delete b.gap,D(t.createElement("span",Object.assign({},b,{style:Object.assign(Object.assign(Object.assign(Object.assign({},ee),F),m==null?void 0:m.style),b.style),className:Z,ref:C}),P))},U=t.forwardRef(he),V=e=>{const{size:s,shape:o}=t.useContext(_),n=t.useMemo(()=>({size:e.size||s,shape:e.shape||o}),[e.size,e.shape,s,o]);return t.createElement(_.Provider,{value:n},e.children)},ve=e=>{var s,o,n,a;const{getPrefixCls:z,direction:h}=t.useContext(W),{prefixCls:v,className:p,rootClassName:g,style:C,maxCount:N,maxStyle:m,size:u,shape:O,maxPopoverPlacement:R,maxPopoverTrigger:k,children:E,max:r}=e,f=z("avatar",v),$=`${f}-group`,x=X(f),[A,L,B]=q(f,x),I=G($,{[`${$}-rtl`]:h==="rtl"},B,x,p,g,L),y=de(E).map((c,w)=>ue(c,{key:`avatar-key-${w}`})),j=(r==null?void 0:r.count)||N,b=y.length;if(j&&j<b){const c=y.slice(0,j),w=y.slice(j,b),M=(r==null?void 0:r.style)||m,F=((s=r==null?void 0:r.popover)===null||s===void 0?void 0:s.trigger)||k||"hover",d=((o=r==null?void 0:r.popover)===null||o===void 0?void 0:o.placement)||R||"top",T=Object.assign(Object.assign({content:w},r==null?void 0:r.popover),{classNames:{root:G(`${$}-popover`,(a=(n=r==null?void 0:r.popover)===null||n===void 0?void 0:n.classNames)===null||a===void 0?void 0:a.root)},placement:d,trigger:F});return c.push(t.createElement(fe,Object.assign({key:"avatar-popover-key",destroyTooltipOnHide:!0},T),t.createElement(U,{style:M},`+${b-j}`))),A(t.createElement(V,{shape:O,size:u},t.createElement("div",{className:I,style:C},c)))}return A(t.createElement(V,{shape:O,size:u},t.createElement("div",{className:I,style:C},y)))},Ce=U;Ce.Group=ve;export{Ce as A};
